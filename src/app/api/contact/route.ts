import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation function
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Recipients list
    const recipients = [
      // 'david.rice@snapanalytics.co.uk',
      // 'uzair.patel@snapanalytics.co.uk',
      'nafian.ltd@gmail.com',
      // 'paul.johnson@snapanalytics.co.uk'
    ];

    console.log('Attempting to send email to:', recipients);

    // Send email using Resend
    await resend.emails.send({
      from: 'Snap Labs <onboarding@resend.dev>',
      to: recipients,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .header { background: #1a365d; color: white; padding: 20px; margin-bottom: 20px; }
              .content { padding: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1a365d; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>📬 New Message from Snap Labs Website</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <p>${name}</p>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <p>${email}</p>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <p>${company || 'Not provided'}</p>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <p>${message}</p>
              </div>
              <hr>
              <p style="color: #666; font-size: 0.9em;">
                This message was sent through the contact form on snaplabs.ai
              </p>
            </div>
          </body>
        </html>
      `,
      tags: [
        { name: 'source', value: 'snaplabs-website' },
        { name: 'type', value: 'contact-form' }
      ]
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
