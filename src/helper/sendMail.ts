import * as sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function sendEmail(email: string) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: email,
      from: "ganeshdwivedi1783@gmail.com", // Replace with your verified sender email
      subject: "Thank You for Subscribing - Next Invest",
      html: `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Subscribing - Next Invest</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .header {
      background-color: #28a745; /* Green for subscription confirmation */
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .content {
      padding: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white !important;
      text-decoration: none;
      border-radius: 5px;
    }
    
    .footer {
      background-color: #f5f5f5;
      padding: 10px;
      text-align: center;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thank You for Subscribing!</h2>
    </div>
    <div class="content">
      <p>Dear ${email} user,</p>
      <p>Thank you for subscribing to our newsletter at <a href=${process.env.PROD_FRONTEND_URI}>Next Invest</a>! We're excited to have you on board. You'll now receive the latest updates, offers, and insights from our team.</p>
      <p>If you have any questions or need assistance, feel free to <a href=${process.env.PROD_FRONTEND_URI}>contact us</a>.</p>
      <p>We look forward to keeping you informed and involved!</p>
    </div>
    <div class="footer">
      <p>Best Regards, <br> The <a href=${process.env.PROD_FRONTEND_URI}>Next Invest</a> Team</p>
    </div>
  </div>
</body>
</html>
`,
    };
    await sgMail.send(msg);
    console.log("Forget password email sent successfully to:", email);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error:any) {
     return NextResponse.json({ error: error.message}, { status: 400 });
  }
}
