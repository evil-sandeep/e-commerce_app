import jwt from 'jsonwebtoken'

// export const generateAccessToken = (user) => {
//     return jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
// }  

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
} 

export default generateToken



