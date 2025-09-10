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

    // Use your existing EmailJS configuration
    const serviceId = 'service_9mb27wl';
    const templateId = 'template_okj37dg'; // You might want to create a separate template for newsletters
    const publicKey = 'PbuPar3oCKYLGGbSh';
    
    const templateParams = {
      from_name: 'Newsletter Subscriber',
      from_email: email,
      company: 'Newsletter Subscription',
      industry: 'Newsletter',
      service_type: 'Newsletter Subscription',
      message: `New newsletter subscription request from: ${email}. Please add this email to the newsletter list for article notifications.`,
      to_email: 'inquiries@axiompartners.ca'
    };

    // Send email using EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams
      })
    });

    if (!response.ok) {
      throw new Error('EmailJS request failed');
    }

    const result = await response.text();
    console.log('Newsletter subscription successful:', result);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
