import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  methods: ['POST'],
  credentials: true,
}));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // Create Nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Compose the email
  const mailOptions = {
    from: `"Eagle Info Global Website" <${process.env.EMAIL_USER}>`,
    to: 'eagleinfoglobal@gmail.com, info@eagleinfoglobal.com',
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding: 30px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 24px; letter-spacing: 1px;">Eagle Info Global</h1>
          <p style="color: #a0a0b0; margin: 8px 0 0; font-size: 14px;">New Contact Form Submission</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: 600; width: 140px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${name}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: 600;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;"><a href="mailto:${email}" style="color: #0f3460;">${email}</a></td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: 600;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: 600;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${company || 'Not provided'}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: 600;">Service</td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${service || 'Not specified'}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #d4af37;">
            <h3 style="margin: 0 0 10px; color: #333; font-size: 16px;">Message</h3>
            <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
          <p style="margin: 0; color: #999; font-size: 12px;">This email was sent from the Eagle Info Global website contact form.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully from ${email}`);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
});
