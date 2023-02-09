import usersModal from "../modals/usersModal.js";

class UserController {

    getAllUsers = async (req, res) => {
        const allUsers = await usersModal.find() 
        return res.status(200).json({
            message: 'All users',
            users: allUsers
        });
    }

    getUserById = async (req, res) => {
        try {
            const user = await usersModal.findById(req.params.id);
            return res.status(200).json({
                message: 'User found',
                user
            });
        } catch (error) {
            console.log('error', error)
        }
    };

    createNewUser = async (req, res) => {
        try {
            const newUser = await usersModal.create(req.body);
            return res.status(201).json({
                message: 'New user created',
                user: [newUser]
            });
        } catch (error) {
            console.log('error', error)
        }
    };

    deleteUserById = async (req, res) => {
        try {
            const deletedUser = await usersModal.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                message: 'User deleted',
                user: deletedUser
            });
        } catch (error) {
            console.log('error', error)
        }
    };
}

export default new UserController();