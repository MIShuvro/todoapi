const router=require('express').Router()
const {deletetodo,newtodo,list,singletodo,upadtetodo,donestatus,todayTodo}=require('../controllers/user')


//create
router.post('/create',newtodo)
//alllist
//router.get('/',list)

//delete
router.delete('/:_id',deletetodo)

//single list
router.get('/:_id',singletodo);

//update
router.put('/:_id',upadtetodo)

//true or False
router.get('/',donestatus)

//today
router.get('/today',());








module.exports=router