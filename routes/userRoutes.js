import {Router} from "express"
import { createUser,fetchUsers,updateUser,showUser,deleteUser } from "../Controller/UserController.js"

const router = Router()


router.post('/',createUser)
router.get('/',fetchUsers)
router.put('/:id',updateUser)
router.get('/:id',showUser)
router.delete('/:id',deleteUser)

export default router