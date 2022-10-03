import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// import { StreamChat } from 'stream-chat'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="my first next app with typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Homepage</h1>
      </div>
      <div></div>
    </div>
  )
}

export default Home
