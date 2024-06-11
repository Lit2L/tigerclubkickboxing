import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Prices = () => {
	return (
		<div>
			<section id='pricing' className='py-20 '>
				<div className='container px-4 md:px-6 space-y-8'>
					<div className='text-center space-y-4'>
						<h2 className='text-3xl md:text-4xl font-bold'>Pricing</h2>
						<p className='text-gray-600 dark:text-gray-400'>Choose the membership plan that best fits your needs.</p>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						<Card>
							<CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
								<h3 className='text-2xl font-bold'>Basic</h3>
								<p className='text-4xl font-bold'>$49</p>
								<p className='text-gray-600 dark:text-gray-400'>per month</p>
								<ul className='space-y-2 text-gray-600 dark:text-gray-400'>
									<li>2 classes per week</li>
									<li>Access to group classes</li>
									<li>Basic equipment usage</li>
								</ul>
								<Button>Sign Up</Button>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
								<h3 className='text-2xl font-bold'>Premium</h3>
								<p className='text-4xl font-bold'>$79</p>
								<p className='text-gray-600 dark:text-gray-400'>per month</p>
								<ul className='space-y-2 text-gray-600 dark:text-gray-400'>
									<li>Unlimited classes</li>
									<li>Access to private classes</li>
									<li>Full equipment usage</li>
									<li>Personal training sessions</li>
								</ul>
								<Button>Sign Up</Button>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
								<h3 className='text-2xl font-bold'>Elite</h3>
								<p className='text-4xl font-bold'>$99</p>
								<p className='text-gray-600 dark:text-gray-400'>per month</p>
								<ul className='space-y-2 text-gray-600 dark:text-gray-400'>
									<li>Unlimited classes</li>
									<li>Access to private classes</li>
									<li>Full equipment usage</li>
									<li>Personal training sessions</li>
									<li>Exclusive events and workshops</li>
								</ul>
								<Button>Sign Up</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Prices
