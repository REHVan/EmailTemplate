import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { TemplateRequest, TemplateResponse } from '@/types/template';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body: TemplateRequest = await request.json();
    
    // Validate required fields
    if (!body.recipientName || !body.companyName || !body.position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Construct the prompt based on template type
    let prompt = '';
    if (body.type === 'email') {
      if (body.subtype === 'recruiter') {
        prompt = `Write a professional email to ${body.recipientName} at ${body.companyName} applying for the ${body.position} position. 
        I have ${body.experience} years of experience with ${body.skills}. 
        The email should be concise, professional, and highlight my relevant skills and experience.`;
      } else if (body.subtype === 'engineer') {
        prompt = `Write a professional email to ${body.recipientName} at ${body.companyName} requesting a referral for the ${body.position} position. 
        I have ${body.experience} years of experience with ${body.skills}. 
        The email should be polite, professional, and explain why I'm interested in the position.`;
      }
    } else if (body.type === 'linkedin') {
      const connectionType = body.connectionType === 'existing' ? 'existing connection' : 'new connection';
      if (body.subtype === 'referral') {
        prompt = `Write a LinkedIn message to ${body.recipientName} at ${body.companyName} requesting a referral for the ${body.position} position. 
        We are ${connectionType}s. I have ${body.experience} years of experience with ${body.skills}. 
        The message should be professional and concise.`;
      } else if (body.subtype === 'networking') {
        prompt = `Write a LinkedIn message to ${body.recipientName} at ${body.companyName} for networking purposes. 
        We are ${connectionType}s. I have ${body.experience} years of experience with ${body.skills}. 
        The message should be professional and focused on building a connection.`;
      } else if (body.subtype === 'job') {
        prompt = `Write a LinkedIn message to ${body.recipientName} at ${body.companyName} expressing interest in the ${body.position} position. 
        We are ${connectionType}s. I have ${body.experience} years of experience with ${body.skills}. 
        The message should be professional and highlight my relevant experience.`;
      }
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a professional communication assistant that helps write emails and LinkedIn messages."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    });

    const response: TemplateResponse = {
      content: completion.choices[0].message.content || '',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error generating template:', error);
    return NextResponse.json(
      { error: 'Failed to generate template' },
      { status: 500 }
    );
  }
} 