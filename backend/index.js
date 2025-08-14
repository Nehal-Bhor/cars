// const express=require('express');         //dependencies je vaparle te sgle import karun ghetle
// const mongoose=require('mongoose');
// const dotenv=require('dotenv');
// // const cors = require('cors');
// const routes = require('./routes/userRoutes');

// dotenv.config();  //configurations kela

// const app=express();   //exp la call kelaa                 ///////entry point index.js////////

// app.use(express.json());  //data yein json format made
// // app.use(cors());

// app.use('/api/users',routes)  //api madun --->routes la jain

// mongoose.connect(process.env.MONGO_URI).then(()=> //db connect karaicha try karen
// {
//     console.log("mongodb connected");
//     app.listen(process.env.PORT,()=>{
//         console.log(`app listening on port ${process.env.PORT}`); //particular port var run karaichai
//     })

// }).catch((err)=>{
//     console.log(err.message);
// })





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/useRouter', require('./routes/useRouter'));

// mongoose
//     .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
//     .catch((err) => console.log(err));





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');
const carRoutes = require('./routes/carRoutes');
const logRoutes = require('./routes/logRoutes');




dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.use('/api/log', logRoutes);


app.use('/api/forms', formRoutes);

app.use('/api/cars', carRoutes);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));