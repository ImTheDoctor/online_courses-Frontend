import Login from '../components/auth/Login';
import Head from 'next/head';

const signin = () => {
    return (
        <>
            <Head>
                <title key="title">Login Page</title>
                <meta name="description" content="Online Courses" />
                <link rel="icon" href="/Vector.ico" />
            </Head>
            <section className="container auth_container">
                <div className='btn_wrapper'>
                    <button className='back_btn' onClick={() => history.back()}>Back</button>
                </div>
                <Login />
            </section>
        </>
    )
}

export default signin