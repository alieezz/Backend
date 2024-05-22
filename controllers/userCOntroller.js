module.exports = {
    

    userName: (req, res) => {
        try{
        return res.send({
            message: "UserName Controller",
           
        }
           
        )}
        catch(error){
            console.log(error);
        }
        ;
    },

    userAdd: (req, res) => {
        return res.send({
            message: "User Add Api",
        });
    },

    userDelete: (req, res) =>{
        return res.send({
            message: "User Deletion Api"
        })
    }
};