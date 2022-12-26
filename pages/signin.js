import Login from '../components/auth/Login';

const signin = () => {
    return (
        <section className="container auth_container">
            <div className='btn_wrapper'>
                <button className='back_btn' onClick={() => history.back()}>Back</button>
            </div>
            <Login />
        </section>
    )
}

export default signin