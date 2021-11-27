const UserController = require('./controllers/USerController')

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listUsers
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserController.getUserById
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: UserController.createUser
    }
]