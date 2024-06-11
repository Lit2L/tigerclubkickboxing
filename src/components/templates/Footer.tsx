import { PawPrint } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-gray-100 dark:bg-gray-950 py-8'>
			<div className='container px-4 md:px-6 flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<PawPrint size={24} className='text-orange-500' />
					<span className='font-bold text-lg'>Tiger Club Kickboxing</span>
				</div>
				<p className='text-gray-600 dark:text-gray-400 text-sm'>
					&copy; 2024 Tiger Club Kickboxing. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
