import nodemailer from 'nodemailer';

export const sendMail = async (token: string, email: string, type: string) => {

    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER_MAILER,
            pass: process.env.PASS_MAILER
        }
    })

    const typeMail = type === 'confirm' ? {
        from: '"YT-DOWNLOADER" <rubikson0204@gmail.com>',
        to: email, 
        subject: "Confirm account YT-DOWNLOADER", 
        html: `<a href = "http://localhost:3000/confirm/${token}" >Click this link to confirm account!<a>`,
    } : {
        from: '"YT-DOWNLOADER" <rubikson0204@gmail.com>',
        to: email, 
        subject: "Reset password YT-DOWNLOADER", 
        html: `<a href = "http://localhost:3000/reset-password/${token}" >Click this link to reset password!<a>`,
    }


    let info = await transport.sendMail(typeMail);

    console.log("Message sent: %s", info.messageId);
}