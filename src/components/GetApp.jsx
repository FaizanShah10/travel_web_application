import Image from 'next/image'
import Button from './Button'

const GetApp = () => {
  return (
    <div className="relative max-w-[100vw] overflow-hidden h-[100vh] lg:h-[80vh] bg-[#1a1a1a] mt-10 px-1 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
        {/* 📌 Background Pattern */}
        <Image
          src='/pattern.png'
          alt='Pattern'
          width={1000}
          height={5}
          className='absolute top-0 left-0 w-full h-full object-cover opacity-20'
        />

        <div className="relative z-10 flex-1 text-white pt-14 flex flex-col gap-6 items-start text-left">
            <h2 className="text-4xl lg:text-5xl font-bold">Get For Free Now!</h2>
            <p className="text-sm lg:text-lg">
                Available on iOS and Android, download now!
            </p>
            <div className='flex flex-col lg:flex-row gap-4 w-full mt-4'>
                <Button
                    type='button'
                    title='Download App'
                    icon='/apple.svg'
                    variant='bg-white text-green-600 px-6 py-3 rounded-full flex items-center gap-2 shadow-lg'
                />
                <Button
                    type='button'
                    title='Download App'
                    icon='/android.svg'
                    variant='border border-white text-white px-6 py-3 rounded-full flex items-center gap-2'
                />
            </div>
        </div>

        {/* 📱 Right Section - App Mockup */}
        <div className="relative z-10 flex-1 flex justify-end mt-14">
            <Image
                src='/phones.png'
                alt='Phones'
                width={500}
                height={800}
                className="max-w-full h-auto"
            />
        </div>
    </div>
  )
}

export default GetApp
