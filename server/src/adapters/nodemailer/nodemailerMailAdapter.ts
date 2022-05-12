import {MailAdapter, SendMailData} from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4da4b5b2d8a172",
        pass: "ee09601c2ad4bc"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mateus Vinícius da Silva <mateusviniciusdasilva@outlook.com>',
            subject,
            html: body
        });
    }
}