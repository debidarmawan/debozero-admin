import { Product, User } from './models'
import { connectDB } from './utils'

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i')
    const ITEM_PER_PAGE = 10

    console.log(regex, q)

    try {
        connectDB()
        const count = await User.find({ username: { $regex: regex } }).count()
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE)

        return { count, users }
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch users data')
    }
}

export const fetchUser = async (id) => {
    try {
        connectDB()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch user data')
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i')
    const ITEM_PER_PAGE = 10

    try {
        connectDB()
        const count = await Product.find({ title: { $regex: regex } }).count()
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE)
        
        return { count, products }
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch products data')
    }
}

export const fetchProduct = async (id) => {
    try {
        connectDB()
        const product = await Product.findById(id)

        return product
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch product data')
    }
}

// DUMMY DATA
export const cards = [
    {
        id: 1,
        title: "Total Users",
        number: 10.928,
        change: 12,
    },
    {
        id: 2,
        title: "Stock",
        number: 8.236,
        change: -2,
    },
    {
        id: 3,
        title: "Revenue",
        number: 6.642,
        change: 18,
    },
];
