const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully')        
    } catch (error) {
        console.log('Failed')        
    }
}

module.exports = { connect };