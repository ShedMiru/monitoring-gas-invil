'use client'
import React, { useState, useEffect } from 'react';
import { database } from './firebaseauth';
import { ref, onValue } from 'firebase/database';
import Kartu from './kartu'
import KartuGas from './kartuGas'

const Contents = () => {
    const [sensorData, setSensorData] = useState({
        gas: 0,
        kelembaban: 0,
        suhu: 0,
        tekanan: 0
    });

    useEffect(() => {
        const sensorRef = ref(database, 'sensor');
        const unsubscribe = onValue(sensorRef, (snapshot) => {
            const data = snapshot.val();
            setSensorData(data);
        });

        return () => unsubscribe(); // Cleanup saat komponen unmount
    }, []);

    const data = [
        {
            label: 'Suhu',
            value: sensorData.suhu,
            unit: '°C',
            imgSource: '/Logo Suhu.png',
            imgSize: '120',
        },
        {
            label: 'Tekanan',
            value: sensorData.tekanan,
            unit: ' Pa',
            imgSource: '/Logo Tekanan.png',
            imgSize: '110',
        },
        {
            label: 'Kelembaban',
            value: sensorData.kelembaban,
            unit: '%',
            imgSource: '/awan_black.png',
            imgSize: '200',
        }
    ]
    return (
        <div className='grid grid-rows-[180px_1fr] sm:grid-rows-[250px_1fr] h-full w-full bg-fixed bg-center bg-cover custom-img'>
            <div className='flex gap-2 items-center'>
                <div className='flex w-5/12 justify-center'>
                    <KartuGas percentage={sensorData.gas} />
                </div>
                <div className='grid px-10 w-7/12 justify-start text-black'>
                    <h2 className='text-3xl sm:text-5xl font-bold'>S-Bio-S</h2>
                    <p className='sm:text-xl'>
                        Smart Biogas System
                    </p>
                </div>
            </div>
            <div className='grid gap-2 pt-5 items-center h-44 sm:h-full sm:gap-0 sm:pt-0 sm:flex mx-2 sm:items-center sm:justify-center text-center'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='sm:w-2/3 md:1/3 px-3 md:px-6 lg:px-9 xl:px-12'
                    >
                        <Kartu
                            label={item.label}
                            value={item.value}
                            unit={item.unit}
                            imgSource={item.imgSource}
                            imgSize={item.imgSize}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Contents