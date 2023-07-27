import { NextResponse } from 'next/server'

import connect from '@/utils/db'
import Post from '@/models/Post'

export const GET = async (req, { params }) => {
	const { id } = params
	try {
		await connect()
		const post = await Post.findById(id)
		return new NextResponse(JSON.stringify(post), { status: 200 })
	} catch (error) {
		return new NextResponse('Database Error', { status: 500 })
	}
}

export const DELETE = async (req, { params }) => {
	const { id } = params

	try {
		await connect()
		await Post.findByIdAndDelete(id)
		return new NextResponse('Post has been deleted', { status: 200 })
	} catch (error) {
		return new NextResponse('Database error', { status: 500 })
	}
}
