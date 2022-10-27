import React from 'react';

import 'animate.css/animate.min.css';

const MiddleA = ({ title, images, paragraph }) => {
    return (
        <section className='flex flex-col justify-center items-center gap-20 h-middle-a'>
            <p className='font-black text-35 leading-35'>{title}</p>
            <div className='flex flex-row gap-96'>
                {images &&
                    images.map((image, i) => {
                        return (
                            <img
                                key={i}
                                src={image.url}
                                alt='resource'
                                width={image.size}
                            />
                        );
                    })}
                {paragraph && (
                    <p className='mx-auto text-justify text-25 w-1/2 leading-25'>{paragraph}</p>
                )}
            </div>
        </section>
    );
};

export default MiddleA;
