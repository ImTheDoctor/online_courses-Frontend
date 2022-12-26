import Register from "../components/auth/Register"

const signup = () => {
    return (
        <section className="container auth_container">
            <div className='btn_wrapper'>
                <button className='back_btn' onClick={() => history.back()}>Back</button>
            </div>
            <Register />
        </section>
    )
}

export default signup