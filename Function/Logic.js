const User = require("../Collection/User");

let main_function = {
    home:async function(req,res){
        res.send("Home Page")
        res.end();
    },

    register_user: async function (req,res){
        try {
            let User_data = new User(req.body)
            let create = await User_data.save();
            res.status(200).json({ msg: "user regsiter succesfully"})
        } catch (error){
            res.status(501).json({ msg: error.message})
        }
    }
}


module.exports = main_function
