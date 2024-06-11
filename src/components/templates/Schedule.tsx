import { Button } from '@/components/ui/button'
import { CalendarIcon, CircleIcon } from 'lucide-react'

const Schedule = () => {
	return (
		<div>
			<section id='schedule' className=' py-12'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='space-y-6 text-center'>
						<div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-500'>
							Class Schedule
						</div>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>Explore Our Class Schedule</h2>
						<p className='text-gray-500'>Find the perfect class to fit your fitness goals and schedule.</p>
					</div>
					<div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						<div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
							<div className='flex items-center gap-4'>
								<CircleIcon className='h-8 w-8 text-orange-500' />
								<h3 className='text-xl font-semibold'>Beginner Kickboxing</h3>
							</div>
							<p className='mt-2 text-gray-500'>Learn the fundamentals of kickboxing in a supportive environment.</p>
							<div className='mt-4 flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<CalendarIcon className='h-5 w-5 text-gray-500' />
									<span className='text-sm text-gray-500'>Mon, Wed, Fri - 6:00 PM</span>
								</div>
								<Button size='sm'>Join Class</Button>
							</div>
						</div>
						<div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
							<div className='flex items-center gap-4'>
								<CircleIcon className='h-8 w-8 text-orange-500' />
								<h3 className='text-xl font-semibold'>Intermediate Kickboxing</h3>
							</div>
							<p className='mt-2 text-gray-500'>
								Take your kickboxing skills to the next level with our intermediate-level classes.
							</p>
							<div className='mt-4 flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<CalendarIcon className='h-5 w-5 text-gray-500' />
									<span className='text-sm text-gray-500'>Tue, Thu - 7:00 PM</span>
								</div>
								<Button size='sm'>Join Class</Button>
							</div>
						</div>
						<div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
							<div className='flex items-center gap-4'>
								<CircleIcon className='h-8 w-8 text-orange-500' />
								<h3 className='text-xl font-semibold'>Advanced Kickboxing</h3>
							</div>
							<p className='mt-2 text-gray-500'>
								Challenge yourself with our advanced kickboxing classes designed for experienced practitioners.
							</p>
							<div className='mt-4 flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<CalendarIcon className='h-5 w-5 text-gray-500' />
									<span className='text-sm text-gray-500'>Sat - 9:00 AM</span>
								</div>
								<Button size='sm'>Join Class</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Schedule
