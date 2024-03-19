import React from 'react';

const Thegame = () => {
    const images = [
        {
            url: "https://demo.bagisto.com/bagisto-common/storage/theme/5/3XL8cmo8sM0K8wuJm9wz6csE3rMXBe9pfYG9IlHW.webp",
        },
        {
            url: "https://demo.bagisto.com/bagisto-common/storage/theme/5/d6GYuRe8cV9pby9uxfKmhRItjnJ48wVOAFJemptv.webp",

        },
        {
            url: "https://demo.bagisto.com/bagisto-common/storage/theme/5/7ngJKLLNxpwAegtDwhfuVUnrTKS8fSFDUVOdUokB.webp",

        },
        {
            url: "https://demo.bagisto.com/bagisto-common/storage/theme/5/DoopG1tsDX3zYNhbz0IvwkRegqxqvdLSCO1BGlbf.webp",

        },
        {
            url: "https://demo.bagisto.com/bagisto-common/storage/theme/5/KrdvSvksB2A9Zi9nIfcEMaRFxTaeXUUY7a1R8r1K.webp",

        },
        {
            url: "https://demo.bagisto.com/bagisto-common/storage/theme/5/qKtsz80jsMSm2hcyrHoyg6c13e8nWyUG7yzayfji.webp",

        },
    ];

    return (
        <div className='md:mt-{3rem] mt-[1rem]'>
            <p className=' sm:text-6xl text-5xl font-bold text-center  py-5' style={{fontFamily:" DM Serif Display"}}>
            The game with our <br/>new additions!</p>
        <div className='flex gap-7 flex-wrap items-center justify-center mt-12'>
            {images.map((item, index) => (
                <div key={index} className="rounded-[16px] flex items-end justify-center" style={{ background: `url(${item.url})`, width: '400px',height:"400px", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <p className=' sm:text-3xl font-bold text-center py-5' style={{fontFamily:" DM Serif Display"}}>
            Our Collections</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Thegame;
