const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { User, validateUser } = require("../models/user");
const crypto = require("crypto");
const sendMailer = require("../helpers/sendmail");
const mailFrom = (process.env.MAIL_USER)
const CLIENT_DOMAIN = (process.env.CLIENT_DOMAIN);


exports.postRegister = async (req, res) => {
    const { error } = validateUser(req.body);
    const validationToken = crypto.randomBytes(32).toString("hex");

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const { userName, email, password, userRole, avatar } = req.body;

    try {
        const existingUser = await User.findOne({ "email": email });

        if (existingUser) {
            return res.status(400).json({ "error": "Email address is already registed." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            userName: userName,
            email: email,
            password: hashedPassword,
            userRole: userRole,
            avatar: avatar,
            token: validationToken,
            tokenExpiration: Date.now() + (1000 * 60 * 60),
            inActive: true
        })
        const token = newUser.createAuthToken();

        await sendMailer.sendMail({
            from: mailFrom,
            to: email,
            subject: "Confirm Your Account",
            html: `
                <div style="max-width: 600px; margin: 0 auto;">
                    <h1>Welcome to Zephyra!</h1>
                    <p>To complete your registration, please click the button below to confirm your account:</p>
                    <p style="text-align: center;">
                    <a href=${CLIENT_DOMAIN}/account/confirm/${validationToken}?q=email${email}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Confirm Account</a>
                    </p>
                    <p>If you did not sign up for this account, you can safely ignore this email.</p>
                <p>Thank you for choosing Blog Apps!</p>
                </div>
            `
        })

        newUser.save();
        res.header("x-auth-token", token).status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ "email": email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password!" })
        }
        const isValidPassword = await bcrypt.compare(password, user.password);


        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid email or password!" })
        }
        if (user.inActive) {
            return res.status(403).json({ error: "Your account is inactive, please confirm your account!" });
        }

        const token = user.createAuthToken();

        res.setHeader("Access-Control-Expose-Headers", "x-auth-token");

        res.status(201).header({ "x-auth-token": token }).json(
            { _id: user._id, email: user.email, userName: user.userName, role: user.userRole }
        )

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.confirmUser = async (req, res) => {

    const token = req.params.id;
    const email = req.body.email;

    try {
        const user = await User.findOne({ email: email, token: token });

        if (!user) {
            return res.status(401).json({ error: "Invalid token or email!" });
        }

        if (user.tokenExpiration < Date.now() || !user.inActive) {
            return res.status(400).json({ error: "Invalid token!" });
        }

        if (!user.inActive) {
            return res.status(400).json({ error: "User is already active!" })
        }

        user.inActive = false;
        user.token = "";
        user.tokenExpiration = null;
        await user.save();
        res.status(200).json();
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

exports.resetPaswordRequest = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: "There is no such user!" });
        }

        const resetToken = crypto.randomBytes(32).toString("hex");

        user.token = resetToken;
        user.tokenExpiration = Date.now() + (1000 * 60 * 60);

        await user.save();

        await sendMailer.sendMail({
            from: mailFrom,
            to: email,
            subject: "Reset Your Password",
            html: `
                <div style="max-width: 600px; margin: 0 auto;">
                    <h1>Hello!</h1>
                    <p>To reset your password, please click the button below:</p>
                    <p style="text-align: center;">
                        <a href=${CLIENT_DOMAIN}/account/reset_password/${resetToken}?q=email=${email}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
                    </p>
                    <p>If you did not request a password reset, you can safely ignore this email.</p>
                    <p>Best regards!</p>
                </div>
            `
        })
        res.status(200).json({ email: email })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}


exports.resetPassword = async (req, res) => {
    const token = req.params.token;
    const email = req.body.email;
    const password = req.body.password;
    const password_again = req.body.password_again;

    try {
        const user = await User.findOne({ email: email, token: token });

        if (!user) {
            return res.status(401).json({ error: "Invalid token or email!" })
        }

        if (user.tokenExpiration < Date.now()) {
            return res.status(400).json({ error: "Invalid token!" });
        }

        if (password !== password_again) {
            return res.status(400).json({ error: "Passwords do not match!" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user.password = hashedPassword;
        user.token = "";
        user.tokenExpiration = "";

        const updatedUser = await user.save();
        console.log(updatedUser);

        res.status(200).json({email : updatedUser.email});

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}