const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./config/database');  // Sequelize config
const User = require('./models/user');  // User model
const Address = require('./models/address');  // Address model

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/register', async (req, res) => {
    const { name, address } = req.body;
    try {
        const user = await User.create({ name });
        await Address.create({ userId: user.id, address });
        res.status(201).json({ message: 'User and address created successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});
