import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Arun Ingole',
    email: 'ingole@gmail.com',
    password: bcrypt.hashSync('ingole', 10),
  },
  {
    name: 'User',
    email: 'user@user.com',
    password: bcrypt.hashSync('user', 10),
  },
]

export default users
