import mongoose from 'mongoose'

export const connectDB = async () => {
    const dbConnection = {}

    try {
        if (dbConnection.isConnected) return

        const db = await mongoose.connect(process.env.MONGO)
        dbConnection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        console.log('database connection failed, error => ', error)
    }
}