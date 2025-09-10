// app/api/newsletter/subscribe/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store the email in your database
    // 2. Add to your email service (Mailchimp, ConvertKit, etc.)
    // 3. Send a confirmation email
    
    // Option 1: Simple file storage (for development)
    // You could store emails in a JSON file or database
    
    // Option 2: Integration with email services
    // Example with Mailchimp API:
    /*
    const response = await fetch(`https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['newsletter', 'insights']
      }),
    });
    */

    // Option 3: Send email using EmailJS or similar service
    // Example with a simple email notification:
    /*
    const emailData = {
      to_email: process.env.ADMIN_EMAIL,
      subject: 'New Newsletter Subscription',
      message: `New subscription from: ${email}`,
      reply_to: email
    };

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: emailData
      })
    });
    */

    // For now, we'll just log it and return success
    console.log(`New newsletter subscription: ${email}`);
    
    // You might want to store this in a simple way for now:
    // - Add to a Supabase table
    // - Store in a Google Sheet
    // - Send to your existing contact form endpoint
    
    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
