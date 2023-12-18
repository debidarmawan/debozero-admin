import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import Credentials from 'next-auth/providers/credentials';
import { connectDB } from './lib/utils';
import { User } from './lib/models';
import bcrypt from 'bcrypt';

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null
                }
            }
        })
    ],

    // ADD ADDITIONAL INFORMATION TO SESSION
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username
                token.isAdmin = user.isAdmin
                token.image = user.image
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username
                session.user.isAdmin = token.isAdmin
                session.user.image = token.image
            }
            return session
        }
    }
})

const login = async (credentials) => {
    try {
        connectDB()
        const user = await User.findOne({ username: credentials.username })

        if (!user || !user.isAdmin) throw new Error('User not found')

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordCorrect) throw new Error('Incorrect password')

        return user
    } catch (error) {
        console.log(error)
        throw new Error('Error logging In')
    }
}