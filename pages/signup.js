import Register from "../components/auth/Register"
import Head from 'next/head';

const signup = () => {
    return (
        <>
            <Head>
                <title key="title">Register Page</title>
                <meta name="description" content="Online Courses" />
                <link rel="icon" href="/Vector.ico" />
            </Head>
            <section className="container auth_container">
                <div className='btn_wrapper'>
                    <button className='back_btn' onClick={() => history.back()}>Back</button>
                </div>
                <Register />
            </section>
        </>
    )
}

export default signup