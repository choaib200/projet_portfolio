const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// POST route to handle contact form submissions
router.post("/contact", async (req, res) => {
    let data= req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "please fill all the fiels"})

    }
        let smtTranspoeter=nodemailer.createTransport({
            service:'Gmail',
            port:456,
            auth:{
                user:'choaibwqa@gmail.com',
                pass:'uevd amzf diim bvfz'
            }
        })
        let mailOption={
            from:data.email,
            to:"choaibwqa@gmail.com",
            subject:`message from ${data.name}`,
            text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        }
        smtTranspoeter.sendMail(mailOption,(error)=>{
            try{
                if(error) return res.status(400).json({msg:'please fill all the fiels'})
                res.status(200).json({msg:'thank you for contacting boufariha'})
            }catch(error){
                if(error)return res.status(500).json({msg:'there is server error'})
            }
        })
    
  });

module.exports = router;
