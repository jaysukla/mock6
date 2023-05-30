const express = require('express');
const {connection,User,Flight,Booking} = require('./model/model')

const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.send({"msg":"Api is Active"})
})






app.post('/api/register', async (req, res) => {
let Data=req.body;

let d= await User.insertMany([Data])

res.sendStatus(201);
  });
  
  // Endpoint to allow users to login
  app.post('/api/login', async (req, res) => {
let d=req.body;

let data = await User.find(d)

res.sendStatus(201)

    
  });



  app.get('/api/flights', async (req, res) => {
    // Implement logic to fetch all flights
let flights = await Flight.find()

res.status(200).json(flights);
  });


  app.get('/api/flights/:id',async (req, res) => {
    const flightId = req.params.id;
    // Implement logic to fetch flight details by ID
 let flight = await Flight.findById(flightId)
 res.status(200).json(flight);
  });




  app.post('/api/flights', async (req, res) => {
    const Data = req.body;
    
    let d= await Flight.insertMany([Data])

    res.sendStatus(201);
  });



  app.put('/api/flights/:id', async (req, res) => {
    const flightId = req.params.id;
    const flightData = req.body;
 console.log(flightData,flightId)
    let d= await Flight.findByIdAndUpdate(flightId,flightData)

console.log(d)
    res.sendStatus(204);
  });



  app.delete('/api/flights/:id',async (req, res) => {
    const flightId = req.params.id;
let d= await Flight.findByIdAndDelete(flightId)
res.sendStatus(202);
  });





  app.post('/api/booking', async (req, res) => {
    const bookingData = req.body;

let d = await Booking.insertMany([bookingData])

res.sendStatus(201);
  });




  app.get('/api/dashboard',async (req, res) => {
    // Implement logic to fetch all bookings with user and flight details
let bookings = await Booking.find()
res.status(200).json(bookings);
  });




app.listen(8000,()=>{
try {
    connection;
    console.log("DB ,connection pass")

} catch (error) {
    console.log("db connection fail ", error)
}

    console.log("Running on port 8000")
})
