const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const thoughtRoutes = require('./thought-routes.js')

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/users', userRoutes);
//router.use('/thoughts', thoughtRoutes)

module.exports = router;