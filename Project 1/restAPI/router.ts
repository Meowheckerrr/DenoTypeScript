import {Router} from 'https://deno.land/x/oak/mod.ts'
import {getGuns,getGun,addGun,updateGun,deleteGun} from './controller/guns.ts'

const router = new Router()

//Router
router.get('/api/Guns', getGuns)
router.get('/api/Guns/:id', getGun)
router.post('/api/Guns', addGun)
router.put('/api/Guns/:id', updateGun)
router.delete('/api/Guns/:id', deleteGun)


export default router //pass router 