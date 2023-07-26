'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import Image from 'next/image'

const Dashboard = () => {
	const session = useSession()
	const router = useRouter()

	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session.data?.user.name}`, fetcher)

	console.log(data)

	if (session.status === 'loading') {
		return <p>Loading...</p>
	}

	if (session.status === 'unauthenticated') {
		return router.push('/dashboard/login')
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const title = e.target[0].value
		const desc = e.target[1].value
		const image = e.target[2].value
		const content = e.target[3].value

		try {
			await fetch('/api/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title,
					desc,
					image,
					content,
					username: session.data?.user.name
				})
			})
			mutate()
		} catch (error) {
			console.log(error)
		}
	}

	const handleDelete = async id => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			mutate()
		} catch (error) {
			console.log(error)
		}
	}

	if (session.status === 'authenticated') {
		return (
			<div className='flex gap-24'>
				<div className='flex-1'>
					{isLoading
						? 'Loading...'
						: data?.map(post => (
								<div
									key={post._id}
									className='flex items-center justify-between my-12'
								>
									<div className='w-[200px] h-[100px] relative'>
										<Image
											src={post.image}
											alt=''
											className='object-cover'
											fill
										/>
									</div>
									<h2 className='font-semibold text-xl'>{post.title}</h2>
									<span
										className='cursor-pointer text-red-600'
										onClick={() => handleDelete(post._id)}
									>
										X
									</span>
								</div>
						  ))}
				</div>
				<form
					className='flex-1 flex flex-col gap-5'
					onSubmit={handleSubmit}
				>
					<h1 className='font-semibold text-xl'>Add New Post</h1>
					<input
						type='text'
						placeholder='Title'
						className='p-2 bg-transparent border-2 border-gray outline-none rounded-sm text-gray text-lg font-semibold'
					/>
					<input
						type='text'
						placeholder='Description'
						className='p-2 bg-transparent border-2 border-gray outline-none rounded-sm text-gray text-lg font-semibold'
					/>
					<input
						type='text'
						placeholder='Image'
						className='p-2 bg-transparent border-2 border-gray outline-none rounded-sm text-gray text-lg font-semibold'
					/>
					<textarea
						placeholder='Content'
						cols='30'
						rows='10'
						className='p-2 bg-transparent border-2 border-gray outline-none rounded-sm text-gray text-lg font-semibold'
					></textarea>
					<button className='p-5 cursor-pointer bg-lightGreen border-none rounded-sm text-white'>Create</button>
				</form>
			</div>
		)
	}
}

export default Dashboard
