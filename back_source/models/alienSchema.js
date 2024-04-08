const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },

    dateOfBirth:{
        type:Date,
        required: true
    },

    address:{
        type:String,
        required: true
    },

    contactNo:{
        type:Number,
        required: true
    },

    email:{
        type:String,
        required: true
    },

    occupation:{
        type:String, 
        enum: ['Student', 'Business', 'Professional', 'Household']
    },

    guardianName:{
        type:String,
    },

    guardianOccupation:{
        type:String,
    },

    education:{
        type:String, 
        enum: ['post-graduate', 'graduate', 'under-graduate', 'engineer'] 
    },

    stillStudying:{
        type:String
    },

    careerOptions: {
        type: [String], // Array of values
    },

    courseDuration:{
        type:String, 
        enum: ['3-mon-<', '3-6-mon', '6-12-mon', '1-1.5-year', '1.5-2-year', '>-2-years']
        },

    publicity:{
        type:String,
        enum: ['news', 'tv', 'banner', 'relatives', 'social', 'others'] 
    }    
});

module.exports = mongoose.model('Alien', alienSchema)

/*
{
  "name": "John Doe",
  "dateOfBirth": "1990-01-01",
  "address": "123 Main Street, Anytown, CA 12345",
  "contactNo": 1234567890,
  "email": "john.doe@example.com",
  "occupation": "Student", 
  "guardianName": "Jane Doe",
  "guardianOccupation": "Teacher",
  "education": "graduate",
  "stillStudying": "Yes",
  "careerOptions": ["Business", "Professional"
  ],
  "courseDuration": "1-1.5-year",
  "publicity": "social" 
}
*/
