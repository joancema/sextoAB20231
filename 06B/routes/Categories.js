const { Router } = require('express')

const { 
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
    getCategory,
  } = require('../controllers').Category;


  const router = Router();


router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

module.exports = router;