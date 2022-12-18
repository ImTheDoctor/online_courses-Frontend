import React from 'react'
import Layout from '/components/Layout'
import Hero from '/components/about/Hero'
import Values from '/components/about/Values'

const index = () => {
    return (
        <Layout title='About Page'>
            <section>
                <Hero />
                <Values />
            </section>
        </Layout>
    )
}

export default index