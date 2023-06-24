//live
import * as dotenv from 'dotenv';
dotenv.config()

var accountSid = process.env.TWILIO_ACCOUNT_SID
var authToken = process.env.TWILIO_AUTH_TOKEN
const verificationServiceID = process.env.TWILIO_VERIFY_SERVICEID;
import { getToken } from './getToken';


// second
// var accountSid = 'AC66c70b4b8ba1af32f550d6ccea00633b';
// var authToken = '7c5eb07c8d46a151902b26a9b09d2012';
// const verificationServiceID = 'VA6db51e645b22bd0c867f91ff2cc83c9e'
const twilioClient = require('twilio')(accountSid, authToken);



export async function sendVerificationCode(mobile) {
    try {
        let verification = await twilioClient.verify
            .services(verificationServiceID)
            .verifications.create({ to: `${mobile}`, channel: "sms" })
        // console.log("THis is the verification Response " , verification);
        if (verification.status.toUpperCase() == "PENDING") {
            return { status: 200, message: "pending" }
        } else {
            return { status: 200, message: "Problem Occured While Sending Verification Code!" }
        }
    } catch (err) {
        console.log('[Twilio Service] Error while sending Verification Code!', err.message)
        return { status: 500, message: "Problem Occured!" }
    }
}


export async function verifyVerificationCode(mobile, code) {
    try {

        let verification_check = await twilioClient.verify
            .services(`${verificationServiceID}`)
            .verificationChecks.create({ to: mobile, code: code })

         

     let token = await getToken(mobile)

    if (verification_check.status.toUpperCase() == "APPROVED") {
            return { status: 200, message: "approved", token  }
        } else {
            return { status: 200, message: "disapproved" }
        }

    } catch (err) {
        console.log(' Error while Verifying Verification Code!', err.message)
        return { status: 500, message: "Problem Occured!" }
    }
}  