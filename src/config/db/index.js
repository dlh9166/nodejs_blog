const mongoose = require('mongoose');

const uri =
    'mongodb+srv://dlh9166:admin@cluster0.nh4ubeu.mongodb.net/education_dev?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } catch (error) {
        console.log('Connect failure!!');
    }
}

module.exports = { connect };

// ---------------
// const MongoClient = require('mongodb').MongoClient;

//  const uri = 'mongodb+srv://dlh9166:admin@cluster0.nh4ubeu.mongodb.net/education_dev?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// module.exports = { connect }

//const uri = 'mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority';
