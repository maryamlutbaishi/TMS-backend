const express=require('express')
const router = express.Router()
const reviewController=require('./controllers/reviews')

router.post('/', reviewController.creatreview)
router.get('/',reviewController.reviewIndex)
router.get('/:id',reviewController.showreview)
router.delete('/:id',reviewController.deletreview)
router.put('/:id',reviewController.updatereview)

module.exports=router