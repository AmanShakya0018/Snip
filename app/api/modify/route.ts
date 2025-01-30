import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
export async function POST(req: Request) {
  try {
    const { post, result, behaviour, modifyPrompt } = await req.json();
    const prompt = `System Instruction:
    "You are an AI assistant helping users modify LinkedIn posts to better suit their needs. Always ensure the post aligns with the user's selected tone, style, and action preferences. Maintain clarity and stay consistent with the original message while improving readability and engagement."
    User Prompt:
    ${modifyPrompt}
    Original Requested Post:
    ${post}
    Previously Generated Post:
    ${result}
    Mode of Modification: ${behaviour}.
    Instructions: Adjust the post to make it more engaging, conversational, and suited for LinkedIn. Add a professional yet friendly tone, simplify complex sentences, and ensure the content remains concise for better readability.
    Output Expectations:
    The revised post should:
    1. Retain the core idea of the original message.
    2. Reflect a polished and engaging style.
    3. Be concise, professional, and suitable for LinkedIn's audience."
    `;

    
    const model = genAI.getGenerativeModel({
      model: process.env.AI_MODEL ?? ""
    });

    const result2 = await model.generateContent(prompt);
    const response = result2.response;
      const text = response.text();
      return NextResponse.json(
        { success: true, message: text },
          {
              status: 200,
          }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
          success: false,
          message: error instanceof Error ?
          `Oops! Something went wrong while generating your LinkedIn post: ${error.message}` :
          'Our LinkedIn post generation service is temporarily unavailable. Please try again later.'

      },
      {
          status: 500,
      }
      );
  }
}