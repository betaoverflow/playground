import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Editor from '../components/editor'
import styles from '../styles/Home.module.css'
import Photo from '../components/photo'
import { ThemeProvider } from '../components/themeProvider'
import Header from '../components/header'
import AwesomeHeading from '../components/awesomeHeading'
import sectionData from '../utils/sectionData'
import ConfirmedQuestions from '../components/confirmedQuestions'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Playground</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/tinder-logo.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/tinder-logo.png" />
            </Head>
      <Header />
      <main className={styles.main}>
        <ThemeProvider>
          <AwesomeHeading 
            heading={sectionData.coditor.heading} 
            description={sectionData.coditor.description} 
          />
          <Editor />
          <AwesomeHeading 
            heading={sectionData.questions.heading} 
            description={sectionData.questions.description} 
          />
          <ConfirmedQuestions />
        </ThemeProvider>
      </main>
      
      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        made with &#heart; by
      </footer>
    </div>
  );
};

export default Home
