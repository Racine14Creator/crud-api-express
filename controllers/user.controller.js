const getAllUsers = async (req, res) => {
    try {
        // Simulate fetching users from a database
        const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        ];
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        // Simulate fetching a user by ID from a database
        const user = { id, name: 'John Doe' };
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
}
const createUser = async (req, res) => {
    const { name } = req.body;
    try {
        // Simulate creating a user in a database
        const newUser = { id: Date.now(), name };
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
}
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        // Simulate updating a user in a database
        const updatedUser = { id, name };
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
}
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        // Simulate deleting a user from a database
        res.status(200).json({ message: `User with ID ${id} deleted` });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
}
export { getAllUsers, getUserById, createUser, updateUser, deleteUser }