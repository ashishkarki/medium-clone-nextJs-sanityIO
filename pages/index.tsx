import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Posts from '../components/Posts/Posts'
import SubHeader from '../components/SubHeader/SubHeader'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Clone by Ashish Karki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SubHeader />

      {/* Posts */}
      <Posts />
    </div>
  )
}

export default Home
