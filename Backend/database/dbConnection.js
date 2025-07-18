import mongoose from "mongoose";
export  const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTURANT"
    }).then(()=>{
        console.log("Connected to database successfully")
    }).catch((err) => {
    console.error(`Some error occurred: ${err.message}`);
    process.exit(1); // optional: stops the server if DB fails
  });
}