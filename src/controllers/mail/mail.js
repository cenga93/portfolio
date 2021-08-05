const nodemailer = require("nodemailer");
const {google} = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

async function sendMail(user) {
    try {
        const accessToken = oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            },
        });

        const mailOptions = {
            from: `Portfolio contact: `,
            to: `<${process.env.EMAIL}>,<dev.cenga@gmail.com>`,
            subject: "Portfolio contact:",
            text: `<h1>Hello from new ${user.email} !!!</h1>`
        }

        const result = await transporter.sendMail(mailOptions);
        return result;

    } catch (err) {
        return err
    }
}

module.exports = sendMail;

// const sendEmail = async (data) => {
//     const mailOptions = {
//         from: "CENGA93 <cenga93@gmail.com>",
//         to: `dev.cenga@gmail.com, ${process.env.EMAIL}`,
//         subject: "Portfolio contact:",
//         html: `<!doctype html>
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport"
//                           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//                     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//                     <title>Document</title>
//                     <style>
//                         table {
//                           font-family: arial, sans-serif;
//                           border-collapse: collapse;
//                         }
//
//                         td, th {
//                           border: 1px solid #dddddd;
//                           text-align: left;
//                           padding: 8px;
//                         }
//
//                         tr:nth-child(even) {
//                           background-color: #dddddd;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <table>
//                         <tr>
//                             <th>First name</th>
//                             <th>Last name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                         </tr>
//                         <tr>
//                             <td>${data.firstname}</td>
//                             <td>${data.lastname}</td>
//                             <td>${data.email}</td>
//                             <td>${data.phone}</td>
//                         </tr>
//                     </table>
//                     <p>Description:</p>
//                     <p>${data.description}</p>
//                 </body>
//                 </html>`,
//     };
//     await transporter.sendMail(mailOptions);
// };
//

