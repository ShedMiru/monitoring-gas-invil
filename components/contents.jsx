import React from 'react'
import Kartu from './kartu'
import KartuGas from './kartuGas'

// const data = [
//     {
//         label:'Suhu',
//         value:'45',
//         unit:'°C',
//         imgSource:'/Logo Suhu.png',
//         imgSize:'120',
//     },
//     {
//         label:'Tekanan',
//         value:'1',
//         unit:' Pa',
//         imgSource:'/Logo Tekanan.png',
//         imgSize:'110',
//     },
//     {
//         label:'pH',
//         value:'45',
//         unit:'',
//         imgSource:'/Logo ph.png',
//         imgSize:'120',
//     }
// ]

const Contents = () => {
    return (
        <div className='grid grid-rows-[180px_1fr] sm:grid-rows-[250px_1fr] h-full w-full bg-fixed bg-center bg-cover custom-img'>
            <div className='flex gap-2 items-center'>
                <div className='flex w-5/12 justify-center'>
                    <KartuGas percentage='76'/>
                </div>
                <div className='grid px-10 w-7/12 justify-start'>
                    <h2 className='text-3xl sm:text-5xl font-bold'>S-Bio-S</h2>
                    <p className='sm:text-xl'>
                        Smart Biogas System
                    </p>
                </div>
            </div>
            <div className='grid gap-1 items-center sm:gap-0 sm:flex mx-2 sm:items-center sm:justify-center text-center'>
                <div className='sm:w-2/3 md:1/3 px-3 md:px-6 lg:px-9 xl:px-12'>
                    <Kartu label='Suhu' value='45' unit='°C' imgSource='/Logo Suhu.png' imgSize='120' />
                </div>
                <div className='sm:w-2/3 md:1/3 px-3 md:px-6 lg:px-9 xl:px-12'>
                    <Kartu label='Tekanan' value='1' unit=' Pa' imgSource='/Logo Tekanan.png' imgSize='110' />
                </div>
                <div className='sm:w-2/3 md:1/3 px-3 md:px-6 lg:px-9 xl:px-12'>
                    <Kartu label='pH' value='5.5' unit='' imgSource='/Logo ph.png' imgSize='120' />
                </div>
            </div>
        </div>
    )
}

export default Contents