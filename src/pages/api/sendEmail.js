// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, mobile, subject, message } = req.body;

    // Create a transporter object using your SMTP settings
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email
        pass: process.env.EMAIL_PASS, // Replace with your email password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'dhaneshkaushan@gmail.com', // Your email where you want to receive messages
      subject: `Contact form submission from ${fullName}`,
      text: `You have a new contact form submission.\n\nName: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
