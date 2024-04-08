const express = require('express')
const router = express.Router()
const AlienD = require('../models/alienSchema')
const alienSchema = require('../models/alienSchema')

router.get('/', async (req, res) => {
    try {
        const aliens = await AlienD.find();
        res.json(aliens);
    } catch (err) {
        res.send("ERR", err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const alien = await AlienD.findById(req.params.id); 
        res.json(alien);
    } catch (err) {
        res.send("ERR", err);
    }
});


router.post('/submit-enquiry', async (req, res) => {
  try {
    const { 
      name, 
      dateOfBirth, 
      address, 
      contactNo, 
      email, 
      occupation, 
      guardianName, 
      guardianOccupation, 
      education, 
      stillStudying, 
      careerOptions, // Array of selected options
      courseDuration, 
      publicity 
    } = req.body;

    // Optional: Validate data based on schema types and validation rules

    const newEnquiry = new AlienD({
      name,
      dateOfBirth,
      address,
      contactNo,
      email,
      occupation,
      guardianName,
      guardianOccupation,
      education,
      stillStudying,
      careerOptions,
      courseDuration,
      publicity
    });

    res.render('form.ejs', { successMessage: 'Enquiry submitted successfully!' }); 


    const savedEnquiry = await newEnquiry.save();
    res.redirect('/enquiry-details/' + savedEnquiry._id); // Redirect to details page

  } catch (err) {

    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router


// router.post('/', async (req, res) => {
    
//     const alien = new AlienD({
//         name:req.body.name,
//         dateOfBirth:req.body.dateOfBirth,
//         address:req.body.address,
//         contactNo:req.body.contactNo,
//         email:req.body.email,
//         occupation:req.body.occupation,
//         guardianName:req.body.guardianName,
//         guardianOccupation:req.body.guardianOccupation,
//         education:req.body.education,
//         stillStudying:req.body.stillStudying,
//         careerOptions:req.body.careerOptions,
//         courseDuration:req.body.courseDuration,
//         publicity:req.body.publicity,

//     })

  
//     try{
//         const a1 = await alien.save()
//         res.json(a1)
//     }catch(err){
//         if (err.name === 'ValidationError') {
//             // Handle Mongoose validation errors here
//             console.error(err.message);
//             res.status(400).send("Validation Error: " + err.message);
//             console.error(err);
//             res.status(500).send("Internal Server Error"); 
//         }

//     }
// }

// )
//   module.exports = router