import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader/SubHeader'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Clone by Ashish Karki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SubHeader />
    </div>
  )
}

export default Home
