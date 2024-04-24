const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { User, validateUser } = require("../models/user");

exports.postRegister = async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
       return res.status(400).json({ error: error.details[0].message });
    }
    const { firstName, lastName, userName, email, password, userRole, avatar } = req.body;

    console.log(password);
    try {
        const existingUser = await User.findOne({ "email": email });

        if (existingUser) {
          return res.status(400).json({ error: "Email address is already registed." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: hashedPassword,
            userRole: userRole,
            avatar: avatar
        })

        newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
    }
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await User.findOne({ "email": email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password!" })
        }
        console.log(user);
        const isValidPassword = await bcrypt.compare(password, user.password);


        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid email or password1" })
        }

        res.status(200).json(
            {
                id : user.id,
                email : user.email,
                userName : user.userName,
                userRole : user.userRole
            }
        )


    } catch (error) {
        console.log(error);
    }
}