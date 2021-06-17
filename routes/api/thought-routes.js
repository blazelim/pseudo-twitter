const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thought-controller');




// /api/thoughts/<izzaId>
router.route('/:userId').post(addComment);

// /api/comments/<userId>/<commentId
router
    .route('/:thoughtId/reactions')
    .put(addReaction)
    .delete(removeComment);

module.exports = router;
