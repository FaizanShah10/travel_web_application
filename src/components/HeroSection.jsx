import React from 'react'
import Image from 'next/image'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className='max-w-[100vw] px-6 lg:px-44 md:px-32 flex flex-col lg:flex-row gap-2 lg:gap-44'>
            <div className='flex flex-col gap-10'>
                <div>
                    <Image
                    src='./camp.svg'
                    width={22}
                    height={22}
                    />
                    <h2 className='text-[5vh] lg:text-[5vw] md:text-[6vw]  tracking-tight font-bold leading-10 lg:leading-[72px] md:leading-[50px]  mb-10 '>Putuk Truno <br /> Camp Area</h2>
                    <p className='text-sm text-gray-600 w-[85vw] lg:w-[26vw] md:w-[50vw]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
                </div>

                <div className='flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {
                            Array(5).fill(1).map((_, index) => (
                                <Image
                                src="./star.svg"
                                width={22}
                                height={22}
                                alt='star'
                                key={index}

                                />
                            ))
                        }
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='font-semibold'>400</p>
                        <p className='underline text-sm text-gray-500'>Reviews</p>
                    </div>
                </div>

                <div className='w-full flex flex-col sm:flex-row gap-3'>
                    <Button
                    type='button'
                    title='Download'
                    variant='bg-green-600 text-white'
                    />

                    <Button
                    type='button'
                    title='How we work'
                    icon='./play.svg'
                    variant='bg-gray-100 text-black'
                    />
                </div>
            </div>

            {/* black box */}

            <div className='flex flex-col gap-5 justify-center w-[268px] lg:w-[250px] lg:h-[150px] mt-16  px-5 py-8 bg-zinc-800 rounded-2xl shadow-lg'>
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <p className='text-zinc-300'>Location</p>
                        <Image src="./close.svg" alt="close" width={24} height={24}/>
                    </div>
                    <div>
                        <p className="font-bold text-white">Aguas Calientes</p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-zinc-300 text-sm'>Distance</p>
                        <p className='text-white font-bold'>173.28 mi</p>
                    </div>
                    <div>
                        <p className='text-zinc-300 text-sm'>Elevation</p>
                        <p className='text-white font-bold'>2.040 km</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeroSection