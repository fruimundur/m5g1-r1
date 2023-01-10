//requiering express and initializing the app:
const app = require('express')();
//requiering the cors middleware:
const cors = require('cors');

const PORT = 5001; //we will use port 5001


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fruimund:kotanerkotan12@cluster0.lkim3qg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors());//telling express to use the cors middleware

app.get('/', (req,res)=>{ //listen to a get request
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        const data = await collection.find().toArray();
        res.send(JSON.stringify(data))
    });
})

app.get('/newcollection', (req,res)=>{ //listen to a get request
    client.connect(async err => {
        const collection2 = client.db("test").collection("newcoll");
        const data2 = await collection2.find().toArray();
        res.send(JSON.stringify(data2))
    });
})


app.listen(PORT, ()=>{ //listen to the port we chose above
    //print to the console that the server is listening
    console.log("listening to port: " + PORT);
})  