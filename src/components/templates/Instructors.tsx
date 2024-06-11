import AvatarComponent from '@/components/AvatarComponent'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const Instructors = () => {
	return (
		<div>
			<section id='instructors' className='py-20 '>
				<div className='container px-4 md:px-6 space-y-8'>
					<div className='text-center space-y-4'>
						<h2 className='text-3xl md:text-4xl font-bold'>Meet Our Instructors</h2>
						<p className='text-gray-600 dark:text-gray-400'>
							Our team of experienced instructors are dedicated to helping you reach your goals.
						</p>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						<Card>
							<CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
								<AvatarComponent />
								<h3 className='text-xl font-bold'>John Doe</h3>
								<p className='text-gray-600 dark:text-gray-400 text-center'>Head Instructor, 10+ years of experience</p>
								<p className='text-gray-600 dark:text-gray-400 text-center'>
									John is a seasoned martial artist with a passion for empowering students to reach their full
									potential.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
								<AvatarComponent />
								<h3 className='text-xl font-bold'>Jane Lee</h3>
								<p className='text-gray-600 dark:text-gray-400 text-center'>
									Assistant Instructor, 5+ years of experience
								</p>
								<p className='text-gray-600 dark:text-gray-400 text-center'>
									Jane is a dedicated instructor who specializes in helping students develop their technique and
									confidence.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
								<AvatarComponent />
								<h3 className='text-xl font-bold'>Sarah Miller</h3>
								<p className='text-gray-600 dark:text-gray-400 text-center'>
									Kickboxing Specialist, 7+ years of experience
								</p>
								<p className='text-gray-600 dark:text-gray-400 text-center'>
									Sarah is an expert in Siberian Tiger-style kickboxing and is passionate about helping students reach
									their full potential.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Instructors
