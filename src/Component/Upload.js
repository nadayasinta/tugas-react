import React, { useRef } from 'react';

function Upload() {
    const file = useRef(null);
    const handleUpload = () => {
        //file.current.files
        console.log(file.current.files);
        const formData = new FormData();
        Object.values(file.current.files).forEach((item) => {
            formData.append('file', item);
        });
        fetch(
            `https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka/upload`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer token...',
                },
                body: formData,
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result.name);
                return result.fullName;
            })
            .catch((error) => {
                return 'gagal';
            });
    };
    return (
        <div className='App'>
            <div>
                <input type='file' ref={file} multiple />
            </div>
            <button onClick={() => handleUpload()}>Upload</button>
        </div>
    );
}

export default Upload;
