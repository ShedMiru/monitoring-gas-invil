import React from 'react'
import Kartu from './kartu'

// const data = [
//     {
//         label:'Suhu',
//         value:'45',
//         unit:'°C',
//         imgSource:'/Logo Suhu.png',
//         imgSize:'120',
//     },
//     {
//         label:'Suhu',
//         value:'45',
//         unit:'°C',
//         imgSource:'/Logo Suhu.png',
//         imgSize:'120',
//     },
//     {
//         label:'Suhu',
//         value:'45',
//         unit:'°C',
//         imgSource:'/Logo Suhu.png',
//         imgSize:'120',
//     }
// ]

const Contents = () => {
    return (
        <div className='grid grid-rows-[200px_1fr] md:grid-rows-[250px_1fr] h-full w-full bg-fixed bg-center bg-cover custom-img'>
            <div className='flex gap-2 items-center'>
                <div className='flex w-5/12 justify-center'>
                    gas
                </div>
                <div className='grid px-10 w-7/12 justify-start'>
                    <h2 className='text-3xl md:text-5xl font-bold'>About</h2>
                    <p className='md:text-xl'>
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
            <div className='grid md:flex mx-2 items-center justify-center text-center'>
                <div className='md:w-1/3 px-6 lg:px-9 xl:px-12'>
                    <Kartu label='Suhu' value='45' unit='°C' imgSource='/Logo Suhu.png' imgSize='120' />
                </div>
                <div className='md:w-1/3 px-6 lg:px-9 xl:px-12'>
                    <Kartu label='Tekanan' value='1' unit=' Pa' imgSource='/Logo Tekanan.png' imgSize='100' />
                </div>
                <div className='md:w-1/3 px-6 lg:px-9 xl:px-12'>
                    <Kartu label='pH' value='5.5' unit='' imgSource='/logo ph 2.png' imgSize='80' />
                </div>
            </div>
        </div>
    )
}

export default Contents