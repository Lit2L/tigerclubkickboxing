'use client'

import { AnimatedShinyTextButton } from '@/components/ShinyButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FlipWordsComponent } from '@/components/FlipWordsComponent'

const Hero = () => {
	return (
		<section className='relative w-full h-[70dvh] mt-12 '>
			<div className='absolute inset-0 overflow-x-hidden w-full z-0 zoom-effect'>
				<Image src='/gym.png' alt='Siberian Tiger' className='dark:opacity-50 opacity-80 bg-transparent w-full' fill />
			</div>
			<div className='relative w-full h-full flex flex-col justify-evenly translate-y-16'>
				<h1 className='text-balance text-3xl md:text-6xl text-center text-white  drop-shadow-lg dark:shadow-gray-500 font-serif translate-y-6'>
					Tiger Club Kickboxing{' '}
				</h1>
				{/* <p className=' text-lg md:text-xl text-white drop-shadow-lg'>Be different, Be You</p> */}
				<div className='translate-y-12'>
					<FlipWordsComponent />
				</div>
				<div className='flex flex-col items-center w-full justify-center'>
					<AnimatedShinyTextButton />
				</div>
			</div>
		</section>
	)
}

export default Hero
