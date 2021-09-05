import React from 'react'
import Head from 'next/head'
import ConfirmedQuestions from '../components/confirmedQuestions'
import Navbar from '../components/navbar'
import { ThemeProvider } from '../components/themeProvider'
import Footer from '../components/footer'

function questionBank() {
    return (
        <ThemeProvider>
            <div>
                <Head>
                    <title>Playground | Question Bank</title>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/playground-logo.png"></link>
                    <meta name="theme-color" content="#fff" />
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/playground-logo.png" />
                </Head>
                <Navbar />
                <ConfirmedQuestions />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default questionBank
