const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thought-controller');

// all thoughts and add thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)

// id specific routes
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
