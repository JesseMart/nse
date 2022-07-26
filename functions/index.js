// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
    origin: true
})

const gmail_email = functions.config().gmail.email
const gmail_password = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmail_email,
        pass: gmail_password,
    },
})

exports.submit = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')

    if (req.method === 'OPTIONS') {
        res.end()
    } else {
        cors(req, res, () => {
            if(req.method !== 'POST') {
                return
            }
            const mailOptions = {
                from: req.body.email,
                replyTo: req.body.email,
                to: gmail_email,
                subject: `${req.body.name} just messages me from my website`,
                text: req.body.message,
                html: `<p>${req.body.message}</p>`,
            }

            return mailTransport.sendMail(mailOptions).then(() => {
                console.log('New Email sent to :', gmail_email)
                res.status(200).send({
                    isEmailSend: true
                })
                return
            })
        })
    }
})