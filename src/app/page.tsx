import About from '@/components/templates/About'
import ContactSection from '@/components/templates/ContactSection'
import Hero from '@/components/templates/Hero'
import Prices from '@/components/templates/Prices'
import Schedule from '@/components/templates/Schedule'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex min-h-screen overflow-x-hidden flex-col w-full items-center justify-between mb-16'>
			<Hero />
			<About />
			<Schedule />
			<Prices />
			<ContactSection />
		</main>
	)
}
