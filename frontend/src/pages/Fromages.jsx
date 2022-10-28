import React from 'react';
import "../components/style/fromages.css";
import image from '../assets/Imagefromage.jpeg'
import Header from '@components/Header';

const Fromages = () => {
    return (
        <div>
            <Header />
        <div className='Card'>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
                <li className='carte'><img className='images' src={image}></img><a>Le fromage</a></li>
        </div>
        </div>
    );
};

export default Fromages;