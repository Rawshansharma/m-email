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
    getAllEmailById: async (req, res) => {
        try {
          // Ensure `userId` is properly retrieved from the request (e.g., req.user.id from a middleware)
          const userId = req.id; // or use `req.user.id` if set by middleware
          if (!userId) {
            return res.status(400).json({ message: 'User ID is missing.' });
          }
      
          // Fetch emails for the specific user, sorted by creation date (newest first)
          const emails = await Email.find({ userId }).sort({ createdAt: -1 });
      
          // Return the emails in the response
          return res.status(200).json({ emails });
        } catch (err) {
          // Log the error for debugging
          console.error(err)
      
          // Send an error response to the client
          return res.status(500).json({
            message: 'An error occurred while retrieving emails.',
            error: err.message // Optionally, you can include this in development
          })
        }
      }
}

module.exports = emailCtrl;