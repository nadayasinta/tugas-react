import React, { useState } from 'react';
import menuList from '../Data/menuList';
import { Link } from 'react-router-dom';

function HomeFunction(props) {
    const [titlePage, setTitlePage] = useState('WELCOME TO REACT');
    const [subTitle, setSubTitle] = useState(
        'A JavaScript library for building user interfaces'
    );
    const [descriptionData, setDescriptionData] = useState(menuList);

    return (
        <div className='container-fluid vh-100 bg-light'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>{titlePage}</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='title'>{subTitle}</h2>
                </div>
            </div>
            <div className='row justify-content-around'>
                {descriptionData.map((item) => (
                    <div
                        key={item.id}
                        className='col-8 shadow-sm p-3 m-4 bg-white rounded text-center'
                    >
                        <Link to={'/detail/' + item.id}>{item.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeFunction;
