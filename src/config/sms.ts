import twilio from "twilio"

const accountSid = 'AC9d1223165fa11744114017feeccf978f'
const authToken = 'f4f4d012416b7b43b754154fb278d309'

const client =  twilio(accountSid , authToken)

const createSMS = () => {
    client.messages.create({
        body: '',
        //to: process.env.NUMBER_PHONE,
        to: '+573128502119',
        from: '+19283994209'
    }).then((message) => console.log(message.sid))
}

export default (createSMS)