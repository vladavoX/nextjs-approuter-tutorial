'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
	const handleSubmit = async e => {
		e.preventDefault()

		const email = e.target[0].value
		const password = e.target[1].value

		signIn('credentials', {
			email,
			password
		})
	}

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
			<button onClick={() => signIn('google')}>Login with Google</button>
		</div>
	)
}

export default Login
