import { MenuIcon, PawPrint } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { ThemeToggleButton } from './ThemeToggleButton'
import Logo from '../../public/TigerClubLogo.png'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div>
			<header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm transition-all duration-300 data-[scrolled=true]:bg-white p-2 my-3 '>
				<div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6 font-megrim'>
					<Link href='#' className='flex items-center gap-2' prefetch={false}>
						{/* <PawPrint className='h-6 w-6 text-primary-foreground dark:text-orange-400' /> */}
						<Image src={Logo} alt='Tiger Club Kickboxing' width={32} height={32} />
						<span className='text-lg font-semibold dark:text-[#f7f7f7] text-primary-foreground'>
							Tiger Club Kickboxing
						</span>
					</Link>
					<nav className='hidden gap-6 md:flex '>
						<Link
							href='#'
							className="text-sm font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:font-primary-foreground font-['Futura']"
							prefetch={false}
						>
							About
						</Link>
						<Link
							href='#'
							className="text-sm font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
							prefetch={false}
						>
							Schedule
						</Link>
						<Link
							href='#'
							className="text-sm font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
							prefetch={false}
						>
							Testimonials
						</Link>
						<Link
							href='#'
							className="text-sm font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
							prefetch={false}
						>
							Contact
						</Link>
					</nav>
					<ThemeToggleButton />
					<Button className="hidden md:inline-flex font-['Futura']">Join Now</Button>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='outline' size='icon' className='md:hidden'>
								<MenuIcon className='h-6 w-6 text-gray-700 dark:text-gray-300' />
								<span className='sr-only'>Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='right' className='w-full max-w-xs'>
							<div className='flex flex-col items-start gap-6 p-6'>
								<Link
									href='#'
									className="text-lg font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
									prefetch={false}
								>
									About
								</Link>
								<Link
									href='#'
									className="text-lg font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
									prefetch={false}
								>
									Schedule
								</Link>
								<Link
									href='#'
									className="text-lg font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
									prefetch={false}
								>
									Testimonials
								</Link>
								<Link
									href='#'
									className="text-lg font-medium text-gray-700 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-primary-foreground font-['Futura']"
									prefetch={false}
								>
									Contact
								</Link>
								<Button className="w-full font-['Futura']">Join Now</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</header>{' '}
		</div>
	)
}

export default Navbar
