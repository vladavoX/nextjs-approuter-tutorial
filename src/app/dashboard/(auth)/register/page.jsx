'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
	const router = useRouter()
	const [error, setError] = useState(false)
	const handleSubmit = async e => {
		e.preventDefault()
		const name = e.target[0].value
		const email = e.target[1].value
		const password = e.target[2].value

		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, password })
			})

			res.status === 201 && router.push('/dashboard/login?success=Account has been created')
		} catch (error) {
			setError(true)
		}
	}

	return (
		<div className='flex flex-col gap-5 items-center justify-center'>
			<form
				className='w-[300px] flex flex-col gap-5'
				onSubmit={handleSubmit}
			>
				<input
					placeholder='name'
					type='text'
					required
					className='p-5 bg-transparent border-2 border-gray rounded-md font-semibold outline-none text-gray'
				/>
				<input
					placeholder='email'
					type='email'
					required
					className='p-5 bg-transparent border-2 border-gray rounded-md font-semibold outline-none text-gray'
				/>
				<input
					placeholder='password'
					type='password'
					required
					className='p-5 bg-transparent border-2 border-gray rounded-md font-semibold outline-none text-gray'
				/>
				<button className='p-5 cursor-pointer bg-lightGreen border-none rounded-sm text-white'>Register</button>
			</form>
			{error && <p className='text-red'>Something went wrong.</p>}
			<Link href='/dashboard/login'>Login with existing account.</Link>
		</div>
	)
}

export default Register
