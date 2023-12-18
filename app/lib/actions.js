'use server'

import { revalidatePath } from 'next/cache';
import { Product, User } from './models'
import { connectDB } from './utils'
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { signIn } from '../auth';

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error('Error deleting user')
    }
}

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectDB()
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive
        })

        await newUser.save()
    } catch (error) {
        console.log(error)
        throw new error('Error adding user')
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try{
        connectDB()

        // let salt = await bcrypt.genSalt(10)
        // let hashedPassword = await bcrypt.hash(password, salt)

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
        }

        Object.keys(updateFields).forEach((key) => updateFields[key] === '' || undefined && delete updateFields[key])

        await User.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        console.log(error)
        throw new Error('Error updating user')
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const addProduct = async (formData) => {
    const { title, description, price, stock, color, size } = Object.fromEntries(formData)

    try {
        connectDB()
        const newProduct = new Product({
            title,
            description,
            price,
            stock,
            color,
            size
        })

        await newProduct.save()
    } catch (error) {
        console.log(error)
        throw new Error('Error adding product')
    }

    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const updateProduct = async (formData) => {
    const { id, title, description, price, stock, color, size } = Object.fromEntries(formData)

    try {
        connectDB()
        const updateFields = {
            title,
            description,
            price,
            stock,
            color,
            size
        }

        Object.keys(updateFields).forEach((key) => updateFields[key] === '' || undefined && delete updateFields[key])

        await Product.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        console.log(error)
        throw new Error('Error updating product')
    }

    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error('Error deleting product')
    }

    revalidatePath('/dashboard/products')
}

export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData)

    try {
        await signIn('credentials', { username, password })
    } catch (error) {
        console.log(error)
        return 'Error logging in'
    }
}