import React from 'react'
import Image from 'next/image'

const GuideSection = () => {
  return (
    <div className="max-w-[100vw] px-4 lg:px-44 flex flex-col items-start gap-10 lg:gap-20 mt-10 lg:mt-24">
      {/* Left Content */}
      <div className="lg:w-full flex flex-col justify-between lg:flex-row">
        <div>
          {/* Icon */}
          <div className="flex items-center gap-2">
            <Image src='/camp.svg' width={22} height={22} alt='Camp' />
            <p className="text-green-600 text-sm uppercase tracking-wide">
              We are here for you
            </p>
          </div>
          {/* Heading */}
          <h2 className="text-4xl lg:text-[2.5vw] font-bold leading-tight mt-4">
            Guide You to Easy Path
          </h2>
        </div>

        {/* Description */}
        <div className='lg:w-[40%] justify-end'>
          <p className="text-gray-500 text-sm mt-4 lg:w-[80%]">
            Only with the Hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain.
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex justify-center items-center w-full lg:w-[100%]">
        {/* Background Image */}
        <Image
          src="/boat.png"
          width={1440}
          height={800}
          alt="Boat"
          className="w-full rounded-2xl object-cover"
        />

        <div className="absolute flex lg:left-10 bg-white border shadow-lg p-4 rounded-xl w-[70%] lg:w-[20vw]">
          <Image
          src='/meter.svg'
          width={16}
          height={158}
          alt='meter'
          />
          <div className='pl-5'>
            <div className="text-sm">
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Destination</p>
                <p className="text-green-600 font-semibold">48 min</p>
              </div>
              <p className="font-bold text-black text-lg">Aguas Calientes</p>
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-sm">Start track</p>
              <p className="font-bold text-black">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideSection;
