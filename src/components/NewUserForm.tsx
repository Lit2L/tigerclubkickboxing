'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewUser } from '@prisma/client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { newUserSchema } from '@/lib/validations/newUser'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { Disc3Icon } from 'lucide-react'
import { Input, Label, SubmitButton, Textarea } from '@/components/input'
import { useState } from 'react'
// import { ContactFormData, contactSchema } from '@/side-projects/schemas'
// import { send } from '@/actions'

interface NewUserFormProps extends React.HTMLAttributes<HTMLFormElement> {
	newUser: Pick<NewUser, 'id' | 'name' | 'email'>
}

type FormData = z.infer<typeof newUserSchema>

export default function NewUserForm() {
	const router = useRouter()
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(newUserSchema),
		defaultValues: {
			name: ''
		}
	})
	const [isSaving, setIsSaving] = React.useState<boolean>(false)

	async function onSubmit(data: FormData) {
		setIsSaving(true)

		// 	const response = await fetch(`/api/users/${newUser.id}`, {
		// 		method: 'PATCH',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			name: data.name
		// 		})
		// 	})

		// 	setIsSaving(false)

		// 	if (!response?.ok) {
		// 		return toast({
		// 			title: 'Something went wrong.',
		// 			description: 'Your name was not updated. Please try again.',
		// 			variant: 'destructive'
		// 		})
		// 	}

		// 	toast({
		// 		description: 'Your name has been updated.'
		// 	})

		// 	router.refresh()
	}

	return (
		<form className='' onSubmit={handleSubmit(onSubmit)}>
			<Card className='bg-transparent'>
				<CardHeader>
					<CardTitle className='text-center '>Get Your 2-Day Pass for Free!</CardTitle>
					<CardDescription className='text-center translate-y-6'>
						No pressure and no commitment. At Tiger Club Kickboxing we have a culture of health, respect and support and
						we would love to have you join the family..
					</CardDescription>
				</CardHeader>
				<div className='flex justify-center items-center'>
					<div className='flex justify-center'>
						<Input id='email' className='w-full placeholder' placeholder='Email' size={32} {...register('name')} />
						{errors?.name && <p className='px-1 text-xs text-red-600'>{errors.name.message}</p>}
					</div>

					<button
						type='submit'
						className={cn(
							buttonVariants({
								variant: 'default',
								className: 'rounded-r-full cursor-pointer'
							})
						)}
						disabled={isSaving}
					>
						{isSaving && <Disc3Icon className='mr-2 h-4 w-4 animate-spin border-4 text-pink-500 bg-blue-500' />}
						<span>Send it</span>
					</button>
				</div>
			</Card>
		</form>
	)
}
