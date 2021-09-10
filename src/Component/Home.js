import React, { useState, useRef } from 'react';

function Home(props) {
    const [userData, setUserData] = useState({
        name: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const inputOther = useRef(null);

    const handleChange = (event) => {
        console.log(event.target.name);
        const newUserData = {
            ...userData,
            [event.target.name]: event.target.value,
        };
        setUserData(newUserData);
        if (event.target.name === 'password') {
            if (event.target.value.length < 4) {
                setErrorMessage('password tidak valid');
            } else {
                setErrorMessage('');
            }
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserData({ name: '', password: '' });
    };

    const handleSubmitOther = (event) => {
        event.preventDefault();
        console.log(inputOther);
        console.log(inputOther.current);
        console.log(inputOther.current.value);
        alert(inputOther.current.value);
    };

    return (
        <div className='container-fluid min-vh-100 bg-light'>
            <div className='row justify-content-center'>
                <div className='col-12 p-5'>
                    <form onSubmit={handleSubmit}>
                        NAME
                        <input
                            name='name'
                            type='text'
                            value={userData.name}
                            onChange={handleChange}
                        ></input>
                        {userData.name}
                        <br />
                        PASSWORD
                        <input
                            name='password'
                            type='password'
                            value={userData.password}
                            onChange={handleChange}
                        ></input>
                        {userData.password}
                        <br></br>
                        {errorMessage}
                        <button type='submit' disabled={false}>
                            Submit
                        </button>
                    </form>
                    <br />
                    <br />
                    <br />

                    <form onSubmit={handleSubmitOther}>
                        <input
                            name='Other'
                            type='text'
                            ref={inputOther}
                        ></input>
                        <button type='submit' disabled={false}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
