import mongoose from 'mongoose'

// Declare Schema using Mongoose
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

const userTim = {
  name: 'HELLOwORLD',
  email: 'HELLOwORLD@example.com',
  password: '12345',
}

// CREATE  ... Insert One
export const insertUser = async () => {
  console.log('Starting to Insert Element in DB ...')

  // Create
  try {
    await mongoose.connect(process.env.MONGO_URI, () => {
      const user = User.create(userTim)
      if (user) {
        console.log('Success')
      } else {
        console.log('Error')
      }
    })
  } catch (error) {
    console.log('Error ...unable to enter')
  }
}

// READ  .... find specific Item by ID
export const readUser = async () => {
  const user = await User.findById(process.env.ID)
  console.log(`User Found: ${user} \n`)

  const userLists = await User.find()
  console.log('All User list: ' + userLists)
}
