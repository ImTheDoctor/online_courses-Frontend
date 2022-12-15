import React from 'react'
import Layout from '/components/Layout'

import Image from 'next/image'
import Form from '/components/contacts/Form'
import Info from '/components/contacts/Info'
import {top_section, bottom_section, info_box, map, map_box, image_box, form_box} from './contacts.module.scss'

const index = () => {
    return (
        <Layout title='Contact Page'>
            <section>
                <div className={top_section}>
                    <div className={info_box}>
                        <h1>Get in Touch</h1>
                        <Info />
                    </div>
                    <div className={map_box}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d275949.4408543413!2d44.689902627523885!3d40.16812956418216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1670677409879!5m2!1sru!2s" className={map} style={{ border: 0, width: 550, height:392}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className={bottom_section}>
                    <div className={image_box}>
                        <Image src='/woman.svg' width={435} height={481} alt='woman' priority/>
                    </div>
                    <div className={form_box}>
                        <h1>Drop us a line</h1>
                        <Form />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default index