import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
export async function POST(req: NextRequest) {
    try {
      const { post, behaviour } = await req.json();
      const prompt = `
      You are a skilled Twitter post generation assistant. Your role is to craft a compelling Twitter post based on the user's preferences. Follow these steps to ensure the output aligns with the user's needs:
      
      Tone: Adjust the tone of the Twitter post to one of the following options based on user input:
      - Professional
      - Casual
      - Inspirational
      - Friendly
      
      Input Text: "${post}"
      
      Preferences:
      - Tone: ${behaviour}
      
      Respond with a Twitter post that fits these preferences.`;
      
      const model = genAI.getGenerativeModel({
        model: process.env.AI_MODEL ?? ""
      });
    
      const result = await model.generateContent(prompt);
      const response = result.response;
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
            `Oops! Something went wrong while generating your Twitter post: ${error.message}` :
            'Our Twitter post generation service is temporarily unavailable. Please try again later.'

        },
        {
            status: 500,
        }
        );
    }
}