const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds = require('../controllers/campgrounds');
router.get('/', catchAsync(campgrounds.index))
router.get('/new', isLoggedIn, campgrounds.renderNewForm)
    // to save in the index. list 
router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

router.get('/:id', catchAsync(campgrounds.showCampground))
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))
    // for updating through the edit page and save and update the real data 
    // into database
router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.delete))

module.exports = router;