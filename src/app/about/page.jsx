import Image from 'next/image'

import Button from '@/components/Button/Button'

const About = () => {
	return (
		<div>
			<div className='w-full h-[300px] relative'>
				<Image
					src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					fill
					alt=''
					className='object-cover grayscale'
				/>
				<div className='absolute bottom-5 left-5 bg-lightGreen p-2 text-white rounded-sm'>
					<h1 className='text-4xl font-semibold'>Digital Storytellers</h1>
					<h2 className='text-xl'>Handcrafting award winning digital experiences</h2>
				</div>
			</div>
			<div className='flex gap-24'>
				<div className='flex-1 mt-12 flex flex-col gap-7'>
					<h1 className='text-2xl font-semibold'>Who We Are?</h1>
					<p className='text-lg text-justify font-light'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque dolor ea officiis itaque eaque iusto
						dicta enim nisi, sed odit porro ratione corporis quisquam vero quidem asperiores ducimus facilis. Lorem
						ipsum dolor sit amet consectetur adipisicing elit.
						<br />
						<br />
						Esse cumque dolor ea officiis itaque eaque iusto dicta enim nisi, sed odit porro ratione corporis quisquam
						vero quidem asperiores ducimus facilis.
					</p>
				</div>
				<div className='flex-1 mt-12 flex flex-col gap-7'>
					<h1 className='text-2xl font-semibold'>What We Do?</h1>
					<p className='text-justify font-light'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos, officiis ullam velit facilis delectus
						est ipsam distinctio necessitatibus ex dolores natus tempore fugit totam, atque qui doloremque, repellendus
						aspernatur perferendis? Perspiciatis incidunt explicabo iste aliquam ipsa molestiae rerum.
						<br />
						<br />
						Facilis quisquam asperiores tenetur, quam nulla adipisci, veritatis quidem in illo explicabo rem aliquam!
						Fuga, voluptas non doloremque earum deserunt voluptatum officia velit commodi eum sit soluta enim saepe aut
						possimus sint! Pariatur molestias ducimus, voluptatum ad aliquam sed!
					</p>
					<Button
						url='/contact'
						text='Contact'
					/>
				</div>
			</div>
		</div>
	)
}

export default About
