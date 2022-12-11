import React from 'react';
import Head from 'next/head';
import Menu from './menu/Menu'
import Footer from './footer/Footer';
import { Lato } from '@next/font/google'
import {main} from './layout.module.scss'
const lato = Lato({
    weight: ['400', '700']
})

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title ? title + ' - Online School' : 'Online School'} </title>
                <meta name="description" content="Online Courses" />
                <link rel="icon" href="/Vector.ico" />
            </Head>
            <div className={`app_wrapper ${lato.className}`}>
                <header>
                    <Menu />
                </header>
                <main className={`${main} container`}> {children} </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;