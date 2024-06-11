import About from '@/components/templates/About'
import Hero from '@/components/templates/Hero'
import Schedule from '@/components/templates/Schedule'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex min-h-screen overflow-x-hidden flex-col w-full items-center justify-between'>
			<Hero />
			<About />
			<Schedule />
		</main>
	)
}
