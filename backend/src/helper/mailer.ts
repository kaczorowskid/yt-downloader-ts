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
        from: '"YT-DOWNLOADER" <rubikson0204@gmail.com>',
        to: email, 
        subject: "Confirm account in YT-DOWNLOADER", 
        html: `<a href = "http://localhost:3000/confirm/${token}" >Confirm account<a>`,
    });

    console.log("Message sent: %s", info.messageId);
}