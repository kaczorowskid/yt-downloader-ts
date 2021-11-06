import nodemailer from 'nodemailer';

export const sendMail = async (token: string, email: string) => {

    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER_MAILER,
            pass: process.env.PASS_MAILER
        }
    })


    let info = await transport.sendMail({
        from: '"YT-DOWNLOADER" <test>', // sender address
        to: email, // list of receivers
        subject: "Confirm account", // Subject line
        text: "Hello world", // plain text body
        html: `<a href = "http://localhost:3000/confirm/${token}" >Confirm account<a>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
}