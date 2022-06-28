"use strict";
// import jwt from 'jsonwebtoken'
// import config from '../config'
// import Users from '../models/Users'
// //verifica los tokens 
// export const verifyToken = async (req, res, next) => {
//     try {
//         const token = req.headers['x-access-token']
//         if (!token) return res.status(403).json({ message: 'No token provied' })
//         const decoded = jwt.verify(token, config.SECRET)
//         req.userId = decoded.id
//         const users = await Users.findById(req.userId, { password: 0 })
//         if (!users) return res.status(404).json({ message: 'No user found' })
//         next()
//     } catch (error) {
//         return res.status(401).json({ message: 'Unauthorized' })
//     }
// }
//# sourceMappingURL=authJwt.js.map