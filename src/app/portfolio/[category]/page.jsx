import Image from 'next/image'
import { notFound } from 'next/navigation'

import Button from '@/components/Button/Button'

import { items } from './data'

const getData = cat => {
	const data = items[cat]

	if (data) return data

	return notFound()
}

const Category = ({ params }) => {
	const data = getData(params.category)
	return (
		<div>
			<h1 className='text-lightGreen text-3xl font-semibold'>{params.category}</h1>
			<div className='[&>*:nth-child(2n+1)]:flex-row-reverse'>
				{data.map(item => (
					<div
						className='flex gap-12 mt-12 mb-24'
						key={item.id}
					>
						<div className='flex-1 flex flex-col gap-5 justify-center'>
							<h2 className='text-2xl font-semibold'>{item.title}</h2>
							<p>{item.desc}</p>
							<Button
								text='See More'
								url='#'
							/>
						</div>
						<div className='flex-1 h-[500px] relative'>
							<Image
								src={item.image}
								alt=''
								fill
								className='object-cover'
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Category
