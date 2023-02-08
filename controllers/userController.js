class UserController {

    getAllUsers(req, res) {
        return res.status(200).json({
            message: 'All users',
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'kenaa@example.com',
                    password: '123456'
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    email: 'kenaa@example.com',
                    password: '123456'
                }
            ]
        });
    }

    getUserById(req, res) {
        return res.status(200).json({
            message: 'User has requested data for ' + req.params.id,
            user: {
                id: 1,
                name: 'John Doe',
                email: 'kenaa@example.com',
                password: '123456'
            }
        });
    }
}

export default new UserController();