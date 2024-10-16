const Email = require('../models/emailModel')


const emailCtrl = {
    createEmail : async(req,res)=>{
        try{
           const userId = req.id;
           const {to,message,subject} = req.body;
           if(!to || !message || !subject){
            return res.status(400).json({msg:"Please fill in all fields"})
           }
           const email = await Email.create({
            to,
            subject,
            message,
            userId
           })
           return res.status(201).json({msg:"Email sent successfully",
            email
           })

        }catch(err){
            console.log(err);
        }
    },
    deleteEmail : async(req,res)=>{
        try{
             const emailId = req.params.id;
              if(!emailId) return res.status(400).json({msg:"Email id is required"})
                const email = await Email.findOneAndDelete({_id: emailId})
             if(!email) return res.status(404).json({msg:"Email not found"})
                return res.status(200).json({msg:"Email deleted successfully"})
        }catch(err) {

        }
    },
    getAllEmailById: async(req,res) => {
        try{
           const userId = req.id;
           const emails = await Email.find({userId}).sort({createdAt: -1})
           return  res.status(200).json({
                emails
            
           })
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = emailCtrl;