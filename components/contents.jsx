'use client'
import React, { useState, useEffect } from 'react';
import Kartu from './kartu';
import KartuGas from './kartuGas';

const Contents = () => {
    const [sensorData, setSensorData] = useState({
        mq4: 0,
        mq41: 0,
        ultrasonik: 0,
        suhu: 0,
        kelembaban: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://api.thingspeak.com/channels/2833246/fields/1,2,3,4.json?results=1&api_key=HFAKF5ZH7XCRL4VO'
                );
                const data = await response.json();
                if (data.feeds && data.feeds.length > 0) {
                    const lastEntry = data.feeds[data.feeds.length - 1];
                    setSensorData({
                        mq4: isNaN(parseFloat(lastEntry.field1)) ? 0 : parseFloat(lastEntry.field1),
                        mq41: isNaN(parseFloat(lastEntry.field2)) ? 0 : parseFloat(lastEntry.field2),
                        ultrasonik: isNaN(parseFloat(lastEntry.field3)) ? 0 : parseFloat(lastEntry.field3),
                        suhu: isNaN(parseFloat(lastEntry.field4)) ? 0 : parseFloat(lastEntry.field4),
                        kelembaban: isNaN(parseFloat(lastEntry.field5)) ? 0 : parseFloat(lastEntry.field5),
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

    const total_mq4 = (sensorData.mq4 + sensorData.mq41) / 2;

    const data = [
        {
            label: 'Suhu',
            value: sensorData.suhu.toFixed(0),
            unit: ' °C',
            imgSource: '/Logo Suhu.png',
            imgSize: '120',
        },
        {
            label: 'Gas',
            value: total_mq4.toFixed(0),
            unit: ' ppm',
            imgSource: '/logo.png',
            imgSize: '110',
        },
        {
            label: 'Tekanan',
            value: sensorData.kelembaban.toFixed(0),
            unit: '%',
            imgSource: '/Logo Tekanan.png',
            imgSize: '120',
        },
        {
            label: 'Jawa',
            value: sensorData.kelembaban.toFixed(0),
            unit: '%',
            imgSource: '/Logo Tekanan.png',
            imgSize: '120',
        }
    ];

    return (
        <div className='grid grid-rows-[180px_1fr] sm:grid-rows-[250px_1fr] h-full w-full bg-fixed bg-center bg-cover custom-img overflow-x-hidden scroll-hidden'>
            <div className='flex gap-2 items-center'>
                <div className='flex w-5/12 justify-center'>
                    <KartuGas percentage={sensorData.ultrasonik} />
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
