'use client'
import React, { useState, useEffect } from 'react';
import Kartu from './kartu';
import KartuGas from './kartuGas';

const Contents = () => {
    const [sensorData, setSensorData] = useState({
        gas: 0,
        kelembaban: 0,
        suhu: 0,
        tekanan: 0,
        ppm: 0, // Tambahkan PPM untuk menyimpan nilai dari field1
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.thingspeak.com/channels/2819864/fields/1,2,3,4.json?results=1&api_key=CCEZBXFDFGK2AOFE`
                );
                const data = await response.json();
                if (data.feeds && data.feeds.length > 0) {
                    const lastEntry = data.feeds[data.feeds.length - 1];
                    setSensorData({
                        suhu: parseFloat(lastEntry.field2) || 0, // Asumsikan suhu di field2
                        tekanan: parseFloat(lastEntry.field3) || 0, // Tekanan di field3
                        kelembaban: parseFloat(lastEntry.field4) || 0, // Kelembaban di field4
                        gas: parseFloat(lastEntry.field5) || 0, // Gas di field5 (jika ada)
                        ppm: parseFloat(lastEntry.field1) || 0, // Nilai PPM dari field1
                    });
                } else {
                    console.error("Data feeds kosong.");
                }
            } catch (error) {
                console.error("Error fetching data from ThingSpeak:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 15000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const data = [
        {
            label: 'Tanpa EM4',
            value: sensorData.ppm.toFixed(0), // Format ke 2 angka di belakang koma
            unit: ' ppm',
            imgSource: '/Logo Suhu.png',
            imgSize: '120',
        },
        {
            label: 'Pakai EM4',
            value: sensorData.suhu.toFixed(0),
            unit: ' ppm',
            imgSource: '/Logo Tekanan.png',
            imgSize: '110',
        },
        {
            label: 'Kelembaban',
            value: sensorData.kelembaban,
            unit: '%',
            imgSource: '/Logo ph.png',
            imgSize: '120',
        }
    ];

    return (
        <div className='grid grid-rows-[180px_1fr] sm:grid-rows-[250px_1fr] h-full w-full bg-fixed bg-center bg-cover custom-img'>
            <div className='flex gap-2 items-center'>
                <div className='flex w-5/12 justify-center'>
                    <KartuGas percentage={0} />
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
                        className='sm:w-2/3 md:1/3 px-1 md:px-6 lg:px-9 xl:px-12'
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
    );
};

export default Contents;
