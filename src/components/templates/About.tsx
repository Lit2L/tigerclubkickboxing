import AvatarComponent from '@/components/AvatarComponent'
import ImageGrid from '@/components/ImagesLayoutGrid'
import { Button } from '@/components/ui/button'
import { CircleCheckIcon } from 'lucide-react'
import Image from 'next/image'

const About = () => {
	return (
		<div>
			<section id='about' className='relative bg-transparent py-12 md:py-24 lg:py-32 mt-24'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-8 md:grid-cols-2 lg:gap-16'>
						<div className='space-y-6'>
							<div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-red-900'>About Us</div>
							<h2 className='text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>
								Discover the Art of Kickboxing
							</h2>
							<p className='text-gray-500'>
								At Tiger Club Kickboxing, we believe in empowering our members to reach their full potential. Our
								expert-led classes combine the best of martial arts, strength training, and cardio to deliver a
								transformative workout experience.
							</p>
							<div className='grid grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<CircleCheckIcon className='h-6 w-6 text-orange-500' />
									<h3 className='text-lg font-semibold'>Expert Instruction</h3>
									<p className='text-gray-500'>
										Learn from our experienced instructors who are dedicated to helping you achieve your fitness goals.
									</p>
								</div>
								<div className='space-y-2'>
									<CircleCheckIcon className='h-6 w-6 text-orange-500' />
									<h3 className='text-lg font-semibold'>Join the Tiger Club and Discover Your Strength.</h3>
									<p className='text-gray-500'>
										Train in our state-of-the-art facility equipped with the latest fitness technology and equipment.
									</p>
								</div>
								<div className='space-y-2'>
									<CircleCheckIcon className='h-6 w-6 text-orange-500' />
									<h3 className='text-lg font-semibold'>Supportive Community</h3>
									<p className='text-gray-500'>
										Join a community of like-minded individuals who motivate and support each other on their fitness
										journey.
									</p>
								</div>
								<div className='space-y-2'>
									<CircleCheckIcon className='h-6 w-6 text-orange-500' />
									<h3 className='text-lg font-semibold'>Cardio Kickboxing: The Art of Powerful Living.</h3>
									<p className='text-gray-500'>
										Fit your workouts into your busy schedule with our diverse class offerings and convenient
										scheduling.
									</p>
								</div>
							</div>
						</div>
						<div className='relative overflow-hidden rounded-xl'>
							<ImageGrid />
							{/* <AvatarComponent /> */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
