import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

import User from '@/models/User'
import connect from '@/utils/db'

export const POST = async req => {
	const { name, email, password } = await req.json()

	await connect()

	const hashedPassword = await bcrypt.hash(password, 5)

	const newUser = new User({
		name,
		email,
		password: hashedPassword
	})

	console.log(newUser)

	try {
		await newUser.save()
		return new NextResponse('User has been created', { status: 201 })
	} catch (error) {
		return new NextResponse(error.message, { status: 500 })
	}
}
