const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up Get all and post at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

    // set up get one, put and delete at /api/users/:id
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

router
    .route('/:id')
    .get(getUserById) 
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;