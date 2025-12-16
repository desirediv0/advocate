import nodemailer from 'nodemailer';

// Create transporter with SMTP configuration
const createTransporter = () => {
  const smtpUser = process.env.NEXT_PUBLIC_SMTP_USER;
  const smtpPassword = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
  const smtpHost = process.env.NEXT_PUBLIC_SMTP_HOST || 'smtp-relay.brevo.com';
  const smtpPort = parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || '587');

  if (!smtpUser || !smtpPassword) {
    throw new Error('SMTP credentials are missing. Please check your environment variables.');
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
};

// Admin email template - Inquiry notification
export const getAdminEmailTemplate = (data) => {
  const { name, email, phone, message, subject } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Inquiry</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #0b1526 0%, #1a2a3a 100%); padding: 30px 20px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">New Contact Form Inquiry</h1>
                  <p style="margin: 10px 0 0 0; color: #C5A25A; font-size: 16px;">You have received a new message</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 30px 20px;">
                  <div style="background-color: #f8f9fa; border-left: 4px solid #C5A25A; padding: 20px; margin-bottom: 20px; border-radius: 4px;">
                    <h2 style="margin: 0 0 15px 0; color: #0b1526; font-size: 20px; font-weight: 600;">Contact Details</h2>
                    
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #333; font-weight: 600; width: 120px;">Name:</td>
                        <td style="padding: 8px 0; color: #555;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #333; font-weight: 600;">Email:</td>
                        <td style="padding: 8px 0; color: #555;">
                          <a href="mailto:${email}" style="color: #C5A25A; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      ${phone ? `
                      <tr>
                        <td style="padding: 8px 0; color: #333; font-weight: 600;">Phone:</td>
                        <td style="padding: 8px 0; color: #555;">
                          <a href="tel:${phone}" style="color: #C5A25A; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${subject ? `
                      <tr>
                        <td style="padding: 8px 0; color: #333; font-weight: 600;">Subject:</td>
                        <td style="padding: 8px 0; color: #555;">${subject}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </div>
                  
                  <div style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 20px; border-radius: 4px;">
                    <h3 style="margin: 0 0 15px 0; color: #0b1526; font-size: 18px; font-weight: 600;">Message:</h3>
                    <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                  <p style="margin: 0; color: #666; font-size: 14px;">
                    This email was sent from your website contact form.<br>
                    <span style="color: #C5A25A;">Please respond to the user at: <a href="mailto:${email}" style="color: #C5A25A; text-decoration: none;">${email}</a></span>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// User email template - Thank you message
export const getUserThankYouTemplate = (data) => {
  const { name } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #0b1526 0%, #1a2a3a 100%); padding: 40px 20px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 600;">Thank You!</h1>
                  <p style="margin: 10px 0 0 0; color: #C5A25A; font-size: 18px;">We appreciate your inquiry</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 20px; text-align: center;">
                  <div style="margin-bottom: 30px;">
                 
                    <h2 style="margin: 0 0 15px 0; color: #0b1526; font-size: 24px; font-weight: 600;">Dear ${name},</h2>
                    <p style="margin: 0 0 20px 0; color: #555; line-height: 1.8; font-size: 16px;">
                      Thank you for reaching out to us! We have successfully received your message and our team will review it shortly.
                    </p>
                    <p style="margin: 0; color: #555; line-height: 1.8; font-size: 16px;">
                      We understand the importance of your legal inquiry and will get back to you as soon as possible, typically within 24-48 hours.
                    </p>
                  </div>
                  
                  <div style="background-color: #f8f9fa; border-left: 4px solid #C5A25A; padding: 20px; margin: 30px 0; border-radius: 4px; text-align: left;">
                    <h3 style="margin: 0 0 15px 0; color: #0b1526; font-size: 18px; font-weight: 600;">What happens next?</h3>
                    <ul style="margin: 0; padding-left: 20px; color: #555; line-height: 1.8;">
                      <li>Our legal team will review your inquiry</li>
                      <li>We'll assess your case and requirements</li>
                      <li>You'll receive a detailed response via email or phone</li>
                    </ul>
                  </div>
                  
                  <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 4px;">
                    <p style="margin: 0 0 10px 0; color: #333; font-weight: 600;">Need immediate assistance?</p>
                    <p style="margin: 0; color: #555;">
                      Call us at: <a href="tel:+919871722270" style="color: #C5A25A; text-decoration: none; font-weight: 600;">+91 98717 22270</a>
                    </p>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #0b1526; padding: 30px 20px; text-align: center;">
                  <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 16px; font-weight: 600;">Legal Services</p>
                  <p style="margin: 0 0 15px 0; color: #C5A25A; font-size: 14px;">
                    Ch.No.856, Lawyers Chambers, Dwarka Courts, New Delhi-75
                  </p>
                  <p style="margin: 0; color: #999; font-size: 12px;">
                    This is an automated confirmation email. Please do not reply to this message.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// Send email function
export const sendOtpEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = createTransporter();

    const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || 'codeshorts007@gmail.com';

    const mailOptions = {
      from: `"Legal Services" <${fromEmail}>`,
      to,
      subject,
      text,
      html,
    };

    console.log('Attempting to send email to:', to);
    console.log('SMTP Host:', process.env.NEXT_PUBLIC_SMTP_HOST);
    console.log('SMTP User:', process.env.NEXT_PUBLIC_SMTP_USER ? 'Set' : 'Missing');

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    throw error;
  }
};

