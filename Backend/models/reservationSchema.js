import mongoose from 'mongoose';
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[3,"First name must contain at least 3 charcters!"],
        maxLength:[30,"First name cannot exceeds 30 charcters!"]
    },
     lastName:{
        type: String,
        required: true,
        minLength:[3,"Last name must contain at least 3 charcters!"],
        maxLength:[30,"Last name cannot exceeds 30 charcters!"]
    },
    email:{
         type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    phone:{
        type: String,
        required: true,
        minLength:[10,"Phone number must contain at least 10 charcters!"],
        maxLength:[10,"Phone number cannot exceeds 10 charcters!"]
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    },

});

export  const  Reservation = mongoose.model("Reservation",reservationSchema);