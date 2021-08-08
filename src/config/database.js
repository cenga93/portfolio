const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@portfolio.6wgnz.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true,
        });
        console.log('Database connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connection;
