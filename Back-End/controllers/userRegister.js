const User = require('../models/user');



const verifiedotpupload = [];

const register = async (req, res) => {
 try{
    const { firstname, email, password, confirm, city, dob, phone, question, Zipcode, address,state,country} = req.body;

     verifiedotpupload.push(email);
  
    // Add validation and error handling as needed

    const newUser = new User({ firstname, country,email, password ,confirm, city, dob, phone, question, Zipcode,address,state});
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
 } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};


const profile = async (req, res) => {
// Assuming you're passing the email ID as a URL parameter

  try {
    // Retrieve the user data document from the database based on the email
    const user = await User.findOne({ email: verifiedotpupload });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
}



module.exports = {
  register,
  profile
};
