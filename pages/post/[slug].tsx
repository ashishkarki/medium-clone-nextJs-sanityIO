import { url } from 'inspector'
import { GetStaticProps } from 'next'
import PortableText from 'react-portable-text'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../lib/sanity'
import { Post } from '../../lib/typings'

type Props = {
  post: Post
}

const PostDetails = ({ post }: Props) => {
  // console.log('post :>> ', post)

  // decide what portable text does to certain html tags
  const myserializers: object = {
    h1: (props: any) => <h1 className="text-2xl font-bold my-5" {...props} />,
    h2: (props: any) => <h2 className="text-xl font-bold my-5" {...props} />,
    li: ({ children }: any) => <li className="ml-4 list-disc">{children}</li>,
    link: ({ href, children }: any) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
  }

  return (
    <main>
      <Header />

      <img
        src={urlFor(post.mainImage).url()}
        alt="post details"
        className="w-full h-40 object-cover"
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>

        <h2 className="text-xl font-light text-gray-500 mb-2">
          {post.description}
        </h2>

        <div className="flex items-center space-x-2">
          <img
            src={urlFor(post.author.image).url()}
            alt="author"
            className="h-10 w-10 rounded-full"
          />

          <p className="font-extralight text-sm">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={myserializers}
          />
        </div>
      </article>
    </main>
  )
}

export default PostDetails

export const getStaticPaths = async () => {
  const query = `* [_type == 'post'] {
        _id,
        slug {
            current
        }
    }`

  const posts: Post[] = await sanityClient.fetch(query)

  /**
  returns something like:
  {
    paths: [
        {
            params: {
                slug: 'post-1'
            }
        },
        {
            params: {
                slug: 'post-2'
            }
        }
    ],
    fallback: false
  }
*/
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking', // block the page from showing or show 404
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0] {
	_id,
	_createdAt,
	title,
	author -> {
		name,
		image
	},
	description,
	mainImage,
	slug,
	body
}`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // update the page every 60 seconds
  }
}
