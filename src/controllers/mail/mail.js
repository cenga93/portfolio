const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const sendEmail = async (data) => {
    const mailOptions = {
        from: data.email,
        to: `dev.cenga@gmail.com, ${process.env.EMAIL}`,
        subject: "Portfolio contact:",
        html: `<!doctype html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                    <style>
                        table {
                          font-family: arial, sans-serif;
                          border-collapse: collapse;
                        }
                        
                        td, th {
                          border: 1px solid #dddddd;
                          text-align: left;
                          padding: 8px;
                        }
                        
                        tr:nth-child(even) {
                          background-color: #dddddd;
                        }
                    </style>
                </head>
                <body>
                    <table>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        <tr>
                            <td>${data.firstname}</td>
                            <td>${data.lastname}</td>
                            <td>${data.email}</td>
                            <td>${data.phone}</td>
                        </tr>
                    </table>
                    <p>Description:</p>
                    <p>${data.description}</p>
                </body>
                </html>`,
    };
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
