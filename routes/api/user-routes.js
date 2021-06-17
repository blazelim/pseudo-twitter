const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// Set up Get all and post at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);


    // set up get one, put and delete at /api/users/:id
router
    .route('/:id')
    .get(getUserById) // TODO After adding friend functionality and thought functionality
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;