import React from 'react'

const Contents = () => {
    return (
        <div className='grid grid-rows-[350px_1fr] h-full w-full bg-fixed bg-center bg-cover custom-img'>
            <div className='flex gap-2 items-center'>
                <div className='flex w-5/12 justify-center'>
                    gas
                </div>
                <div className='grid px-10 w-7/12 justify-start'>
                    <h2 className='text-5xl font-bold'>About</h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
            <div className='grid md:flex mx-2 items-center justify-center text-center'>
                <div className='w-1/3'>
                    suhu
                </div>
                <div className='w-1/3'>
                    tekanan
                </div>
                <div className='w-1/3'>
                    ph
                </div>
            </div>
        </div>
    )
}

export default Contents