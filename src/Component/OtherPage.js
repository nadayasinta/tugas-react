import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OtherPage(props) {
    const [text, setText] = useState('');
    let params = useParams();

    useEffect(() => {
        setText('hi saya params ' + params.id);
    }, []);

    return (
        <div>
            OtherPage
            <br />
            {text}
        </div>
    );
}
export default OtherPage;
