import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { insertUser, readUser } from './crud.js'

// Initialize DotEnv File
dotenv.config()

// Initialize Express
const app = express()

// Initialize MongoDB
let conn
const connectDB = async () => {
  try {
    conn = await mongoose
      .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then((result) => {
        console.log(`MongoDB isConnected`)
      })
  } catch (error) {
    console.log('Error when connecting MongoDB')
    process.exit(1)
  }
}

// Connect MongoDB
connectDB()

// Make upload folder static
const __dirname = path.resolve()

// Initialize Routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API IS RUNNING ....')
  })
}

// Set app to liste to PORT 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on Port: ${PORT}`))

// CREATE
insertUser()

// READ
// readUser()
