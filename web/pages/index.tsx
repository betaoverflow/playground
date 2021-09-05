import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Editor from '../components/editor'
import styles from '../styles/Home.module.scss'
import Photo from '../components/photo'
import { ThemeProvider } from '../components/themeProvider'
import Header from '../components/header'
import AwesomeHeading from '../components/awesomeHeading'
import sectionData from '../utils/sectionData'
import ConfirmedQuestions from '../components/confirmedQuestions'
import Footer from '../components/footer'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <ThemeProvider>
            <div className={styles.container}>
                <Head>
                    <title>Playground</title>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/playground-logo.png"></link>
                    <meta name="theme-color" content="#fff" />
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/playground-logo.png" />
                </Head>
                <Header />
                <main className={styles.main}>
                    <AwesomeHeading heading={sectionData.coditor.heading} description={sectionData.coditor.description} />
                    <Editor />
                    <AwesomeHeading heading={sectionData.questions.heading} description={sectionData.questions.description} />
                    <div className={styles.btn}>
                    <Link href="/form">
                   Contribute
                    </Link>
                    </div>
                    <ConfirmedQuestions />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Home
