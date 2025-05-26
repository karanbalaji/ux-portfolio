import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const attachment = formData.get('attachment') as File | null

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate attachment if provided
    if (attachment) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
      
      const maxSize = 10 * 1024 * 1024 // 10MB limit
      
      if (!allowedTypes.includes(attachment.type)) {
        return NextResponse.json(
          { error: 'Only PDF, DOC, and DOCX files are allowed' },
          { status: 400 }
        )
      }
      
      if (attachment.size > maxSize) {
        return NextResponse.json(
          { error: 'File size must be less than 10MB' },
          { status: 400 }
        )
      }
    }

    // Prepare email data
    interface EmailData {
      from: string
      to: string[]
      subject: string
      html: string
      replyTo: string
      attachments?: Array<{
        filename: string
        content: Buffer
      }>
    }

    const emailData: EmailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>', // This will be the sender
      to: ['karanarjunb@gmail.com'], // Your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
            ${attachment ? `<p style="margin: 0 0 10px 0;"><strong>Attachment:</strong> ${attachment.name} (${(attachment.size / 1024 / 1024).toFixed(2)} MB)</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; white-space: pre-wrap;">
${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name} at ${email}</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    }

    // Add attachment if provided
    if (attachment) {
      const buffer = await attachment.arrayBuffer()
      emailData.attachments = [
        {
          filename: attachment.name,
          content: Buffer.from(buffer),
        },
      ]
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send(emailData)

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 