'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
	const session = useSession()
	const router = useRouter()

	const handleSubmit = async e => {
		e.preventDefault()

		const email = e.target[0].value
		const password = e.target[1].value

		signIn('credentials', {
			email,
			password
		})
	}

	if (session.status === 'loading') {
		return <p>Loading...</p>
	}

	if (session.status === 'authenticated') {
		return router.push('/dashboard')
	}

	if (session.status === 'unauthenticated') {
		return (
			<div className='flex flex-col gap-5 items-center justify-center'>
				<form
					className='w-[300px] flex flex-col gap-5'
					onSubmit={handleSubmit}
				>
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
					<button className='p-5 cursor-pointer bg-lightGreen border-none rounded-sm text-white'>Login</button>
				</form>
				<button
					className='p-5 cursor-pointer bg-red-500 border-none rounded-sm text-white w-[300px]'
					onClick={() => signIn('google')}
				>
					Login with Google
				</button>
			</div>
		)
	}
}

export default Login
