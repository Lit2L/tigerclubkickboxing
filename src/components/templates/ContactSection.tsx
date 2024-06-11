import NewUserForm from '@/components/NewUserForm'
import Image from 'next/image'

function ContactSection() {
	return (
		<div>
			<section id='contact' className='py-20 bg-transparent relative'>
				<Image src='/11.png' alt='Tiger Illustration' fill className='absolute opacity-70 object-center -z-10 w-full' />
				{/* <div className='container px-4 md:px-6 grid md:grid-cols-2 gap-8'> */}
				<div className='container z-10'>
					<NewUserForm />
				</div>
			</section>
		</div>
	)
}

export default ContactSection
