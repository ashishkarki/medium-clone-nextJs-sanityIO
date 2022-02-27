import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Posts from '../components/Posts/Posts'
import SubHeader from '../components/SubHeader/SubHeader'
import { sanityClient } from '../lib/sanity'
import { Post } from '../lib/typings'

interface HomeProps {
  posts: Post[]
}

const Home = ({ posts }: HomeProps) => {
  // console.log('index.tsx, posts :>> ', posts)

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Clone by Ashish Karki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SubHeader />

      {/* Posts */}
      <Posts posts={posts} />
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `* [_type == 'post'] {
    _id,
    title,
    description,
    author -> {
      name,
      image
    },
    slug,
    mainImage
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
