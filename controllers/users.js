import User from "../models/User.js";

// Read
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) return res.status(404).send("The user with the provided ID was not found.");

        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}


export const getUserConnections = async (req, res)=> {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const connections = await Promise.all(
            user.connections.map(id => User.findById(id))
        );

        const formattedConnections = connections.map(
            ({
                _id,
                firstName,
                lastName,
                occupation,
                worksAt,
                location,
                picturePath
            }) => {
                return { _id, firstName, lastName, occupation, worksAt, location, picturePath };
            })

        res.status(200).json(formattedConnections);

    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

// Update
export const addRemoveConnections = async (req, res) => {
    try {
        const{ id, connId } = req.params;
        const user = await User.findByIdAndUpdate(id);
        const connection = await User.findById(connId);

        if(user.connections.includes(connId)) {
            user.connections = user.connections.filter((id) => id !== connId);
            user.connections = connection.connections.filter((id) => id !== id);
        } else {
            user.connections.push(connId);
            connection.connections.push(id);
        }

        await user.save();
        await connection.save();

        const connections = await Promise.all(
            user.connections.map(id => User.findById(id))
        );

        const formattedConnections = connections.map(
            ({
                _id,
                firstName,
                lastName,
                occupation,
                worksAt,
                location,
                picturePath
            }) => {
                return { _id, firstName, lastName, occupation, worksAt, location, picturePath };
            })

        res.status(200).json(formattedConnections);

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const userUpdate = async (req, res) => {
    try {
        const { id } = req.params;

        // Find user by id
        const user = await User.findById(id);

        // Return 404 if user not found
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user information based on request body
        const updateFields = [
            'firstName', 'lastName', 'email', 'password', 'connections',
            'sex', 'worksAt', 'phone', 'location', 'occupation',
            'viewedProfile', 'impressions'
        ];

        updateFields.forEach(field => {
            if (req.body[field] !== undefined) {
                user[field] = req.body[field];
            }
        });

        // Update picturePath if a file is uploaded
        if (req.file) {
            user.picturePath = req.file.path;
        }

        // Save the updated user
        await user.save();

        // Respond with the updated user
        return res.json({ message: 'User information updated successfully', user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};




