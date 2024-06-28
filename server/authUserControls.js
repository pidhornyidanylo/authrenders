const {
    authUser
} = require("./authUserModel");
const {
    hashPassword,
    comparePasswords
} = require("./utils/hashPassword");

const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    try {
        const userExists = await authUser.findOne({
            email
        });
        if (!userExists) throw new Error("Wrong credentials.");
        const passwordsMatch = comparePasswords(password, userExists.password);
        if (userExists && !passwordsMatch) throw new Error("Wrong credentials.");
        if (userExists && passwordsMatch) {
            req.session.user = {
                id: userExists._id,
                email: userExists.email
            };
            console.log(req.session);
            res.status(200).json({
                success: "User has been authenticated.",
                user: {
                    id: userExists._id,
                    email: userExists.email
                }
            })
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

const registerUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    try {
        const userExists = await authUser.findOne({
            email
        });
        if (userExists) throw new Error("Email already is use.")
        const hashedPassword = hashPassword(password);
        const newUser = new authUser({
            email,
            password: hashedPassword
        })
        await newUser.save();
        res.status(200).json({
            success: "User has been created.",
            user: newUser
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

const logoutUser = (req, res) => {
    if (req.session.user) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({
                    error: "Logout failed"
                });
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({
                success: "logout success"
            });
        });
    } else {
        return res.status(401).json({
            error: "User not logged in"
        });
    }
}

const checkAuth = (req, res) => {
    if (req.session.user) {
        res.status(200).json({
            authenticated: true,
            user: req.session.user
        });
    } else {
        res.status(200).json({
            authenticated: false
        });
    }
}

module.exports = {
    loginUser,
    registerUser,
    logoutUser,
    checkAuth
}