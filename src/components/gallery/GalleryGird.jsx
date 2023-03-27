import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Img } from '@chakra-ui/react';

export default function GalleryGird(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/images/${props}`)
                setImages(response.data.imageUrls)
                console.log(setImages(response.data.imageUrls));
            } catch (error) {
                console.error('Error fetching images', error);
            }
        };

        fetchImages();

    }, 0);


    return (
        <div>

            <h2>{props} Images</h2>
            <div>
                {images.map((image, index) => (
                    <Img
                        key={index}
                        src={image}
                        alt={props} />
                ))}
            </div>
        </div>
    );
}
