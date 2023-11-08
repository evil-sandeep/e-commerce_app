import bcrypt from 'bcryptjs';
// Data for users

const users = [
    {
        name: 'Admin user ',
        email: 'chandansandeep@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }

]
export default users;