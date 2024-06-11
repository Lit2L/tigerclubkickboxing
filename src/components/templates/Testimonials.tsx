import AvatarComponent from '@/components/AvatarComponent'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'

const Testimonials = () => {
	return (
		<section id='testimonials' className='py-12 md:py-24 lg:py-32'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='space-y-6 text-center'>
					<div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-500'>Testimonials</div>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>What Our Members Say</h2>
					<p className='text-gray-500'>
						Hear from our satisfied members about their experiences at Tiger Club Kickboxing.
					</p>
				</div>
				<div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					<div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
						<div className='flex items-center gap-4'>
							<AvatarComponent />
							<div>
								<h3 className='text-lg font-semibold'>John Doe</h3>
								<p className='text-sm text-gray-500'>Member since 2021</p>
							</div>
						</div>
						<p className='mt-4 text-gray-500'>
							&quot;I&apos;ve been a member of Tiger Club Kickboxing for over a\n year, and it&apos;s been a
							game-changer for my fitness and\n overall well-being. The instructors are knowledgeable and\n motivating,
							and the community is incredibly supportive.&quot;
						</p>
					</div>
					<div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
						<div className='flex items-center gap-4'>
							<AvatarComponent />

							<div>
								<h3 className='text-lg font-semibold'>Sarah Miller</h3>
								<p className='text-sm text-gray-500'>Member since 2020</p>
							</div>
						</div>
						<p className='mt-4 text-gray-500'>
							&quot;I was hesitant to try kickboxing at first, but the team\n at Tiger Club made me feel so welcome and
							supported. The\n classes are challenging but incredibly rewarding, and I&apos;ve\n seen such a positive
							transformation in my strength and\n confidence.&quot;
						</p>
					</div>
					<div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
						<div className='flex items-center gap-4'>
							<AvatarComponent />
							<div>
								<h3 className='text-lg font-semibold'>Michael Johnson</h3>
								<p className='text-sm text-gray-500'>Member since 2019</p>
							</div>
						</div>
						<p className='mt-4 text-gray-500'>
							&quot;Tiger Club Kickboxing has become an integral part of my weekly routine. The classes are always
							engaging and challenging, and the instructors are top-notch. I&apos;ve made great friends and achieved
							fitness goals.&quot;
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
