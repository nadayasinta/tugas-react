import React, { useState, useEffect } from 'react';
import {
    Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from 'react-router-dom';
import menuList from '../Data/menuList';
import {} from 'react-router-dom';

function DetailPage(props) {
    let history = useHistory();
    let location = useLocation();
    let params = useParams();
    let routeMatch = useRouteMatch();

    const [descriptionData, setDescriptionData] = useState(menuList);
    const [showData, setShowData] = useState({
        title: '',
        description: '',
        showOtherButton: false,
    });
    const [isRedirect, setIsRedirect] = useState(false);

    useEffect(() => {
        console.log('history', history);
        console.log('location', location);
        console.log('params', params);
        console.log('routeMatch', routeMatch);
        const findData = descriptionData.find(
            (item) => item.id == props.match.params.id
        );
        if (findData) {
            setShowData(findData);
        } else {
            history.push('/');
            // setIsRedirect(true);
        }
    }, []);

    return isRedirect ? (
        <Redirect to='/' />
    ) : (
        <div className='container-fluid bg-light vh-100'>
            <div className='row justify-content-around'>
                <div className='col-11 shadow-sm p-3 my-5 bg-white rounded text-center'>
                    <h1>{showData.title}</h1>
                    <p>{showData.description}</p>
                    <button className='btn btn-primary'>BUTTON</button>
                    {showData.showOtherButton ? (
                        <button className='btn btn-danger ml-2'>
                            OTHER BUTTON
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
