import React, { useState } from 'react';

function Home(props) {
    const [userData, setUserData] = useState({
        name: '',
        gender: '',
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert('ok');
        setUserData({
            name: '',
            gender: '',
        });
    };

    return (
        <div className='container-fluid min-vh-100 bg-light'>
            <div className='row justify-content-center'>
                {JSON.stringify(userData)}
                <div className='col-8 p-5 shadow bg-white'>
                    <form onSubmit={handleOnSubmit}>
                        <label for='Name'>Name :</label>
                        <input
                            name='Name'
                            type='text'
                            id='Name'
                            value={userData.name}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label for='gender'>Gender :</label>
                        <input
                            type='radio'
                            value='male'
                            name='gender'
                            checked={userData.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label for='male'>Male</label>
                        <input
                            type='radio'
                            value='female'
                            name='gender'
                            checked={userData.gender === 'female'}
                            onChange={handleChange}
                        />
                        <label for='female'>Female</label>
                        <br />
                        <br />

                        <button type='submit' className='btn btn-primary'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
