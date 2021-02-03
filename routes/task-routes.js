const express = require('express')
var router = express()
const create = require('../controllers/task-controller')
const view = require('../controllers/task-controller')
const update = require('../controllers/task-controller')
const remove = require('../controllers/task-controller')
const viewRecord = require('../controllers/task-controller')

const bodyparser = require('body-parser');

router.use(bodyparser.json())

router.post('/create',create.create)
router.get('/',view.view)
router.get('/view/:id',viewRecord.viewRecord)
router.patch('/update-task/:id',update.update)
router.delete('/delete/:id',remove.remove)


module.exports = router