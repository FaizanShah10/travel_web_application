import Image from 'next/image'

import { FEATURES } from '@/constants'

const FeatureSection = () => {
  return (
    <div className='max-w-[100vw] px-6 lg:px-44 md:px-32 flex flex-col gap-2 lg:gap-12 mt-14'>
        {/* Heading Section */}
        <div className='flex flex-col gap-0'>
            <Image
              src='/camp.svg'
              width={22}
              height={22}
              alt='Camp'
            />
            <h2 className='text-[5vh] lg:text-[5vw] md:text-[6vw] tracking-tight font-bold leading-10 lg:leading-[72px] md:leading-[50px]  mb-10'>
              Our Features
            </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {
                FEATURES.map((feature, index) => (
                    <div 
                      key={index} 
                      className='w-full h-auto bg-gray-100 flex flex-col justify-between p-6 gap-4 rounded-lg'
                    >
                        <div className='w-10 h-10 bg-green-500 rounded-full flex justify-center items-center'>
                            <Image
                              src={feature.icon}
                              alt={feature.title}
                              width={26}
                              height={26}                
                            />
                        </div>
                        <h2 className='font-semibold text-lg'>{feature.title}</h2>
                        <p className='text-sm'>{feature.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeatureSection
