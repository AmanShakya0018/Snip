import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
export async function POST(req: NextRequest) {
    try {
      const { post, behaviour, words } = await req.json();
      const prompt = `
ROLE & OBJECTIVE:
You are a Twitter post generator. Your role is to create professional, impactful, and well-structured Twitter posts based on the user’s input while strictly adhering to the specified tone, style, and word count constraints.

USER INPUT PARAMETERS:
1. **Post Content**: The raw text provided by the user, which serves as the foundation of the Twitter post.
2. **Behaviour (Tone)**: Defines the tone of the post. The available options are:
   - Formal
   - Inspirational
   - Casual
   - Friendly
   - Humorous (**NO EMOJIS ALLOWED, HUMOR IS PURELY TEXTUAL**)
3. **Word Limit**: The desired word count range, either **50-100** or **100-200** words.

STRICT GUIDELINES FOR OUTPUT:
1. **STRICT WORD COUNT COMPLIANCE**:  
   - **MUST STRICTLY ADHERE** to the word limit range.  
   - **50-100 words means it MUST NOT be below 50 or above 100.**  
   - **100-200 words means it MUST NOT be below 100 or above 200.**  
   - **THE AI MUST COUNT WORDS BEFORE OUTPUTTING.** If the word count is incorrect, **IT MUST REGENERATE THE POST** before finalizing the output.  

2. **STRICT CONTENT RULES**:  
   - **NO emojis, hashtags, markdown, bullet points, or additional content.**  
   - **NO promotional additions or calls to action unless explicitly provided.**  

3. **STRICT TONE APPLICATION**:  
   - The post **MUST** adhere to the exact tone specified.  
   - **Humorous tone DOES NOT mean emojis or informal slang—it is purely textual wit.**  

4. **Clarity and Precision**: The post must be clear, impactful, and concise while maintaining readability and a professional format for Twitter.

5. **HANDLING VERY SHORT INPUTS**:  
   - If the provided content is too short to generate a meaningful Twitter post, the AI **MUST PROMPT THE USER TO ADD MORE DETAILS** instead of generating an inadequate post.

INPUT DETAILS:
- **Content**: "${post}"
- **Style**: "${behaviour}"
- **Word Count**: ${words}

OUTPUT EXPECTATIONS:
1. **THE OUTPUT MUST BE A REFINED, Twitter-READY POST**.  
2. **STRICTLY NO** emojis, hashtags, markdown, or excessive informality in any tone, including "Humorous."  
3. **STRICTLY MAINTAIN** the requested word limit **BY COUNTING WORDS BEFORE FINAL OUTPUT**.  

---

### EXAMPLES FOR REFERENCE:

#### **Example 1: Word Limit 50-100**
**Input**: "Building a new project in AI to predict trends."
- Style: **Inspirational**
- Word Count: **50-100**

**Output (STRICTLY within 50-100 words, No Emojis/Hashtags):**  
"Excited to dive into my new AI project focused on predicting trends! Exploring cutting-edge technology is both challenging and rewarding, and I’m eager to see how this can shape the future. AI’s potential is limitless, and I’m committed to driving innovation through this project. By leveraging advanced algorithms and data insights, I aim to uncover emerging patterns, push boundaries, and make meaningful contributions to the field, helping businesses and industries stay ahead of the curve."

---

#### **Example 2: Word Limit 100-200**
**Input**: "Developing a machine learning model to analyze sales data for better predictions."
- Style: **Professional**
- Word Count: **100-200**

**Output (STRICTLY within 100-200 words, No Emojis/Hashtags, Correct Word Count Applied):**  
"I’m currently developing a machine learning model aimed at analyzing sales data to provide more accurate predictions. By leveraging advanced algorithms and data insights, this project will help businesses make informed decisions that drive growth and improve operational efficiency. The ability to predict trends and consumer behavior with precision can significantly enhance marketing strategies, inventory management, and overall business performance.  

This project is particularly exciting because it allows me to explore real-world applications of AI while working with a diverse dataset. The challenge lies in fine-tuning the model to ensure accuracy and efficiency. However, the potential impact on business intelligence makes the effort worthwhile. I look forward to seeing how this model evolves and the insights it can generate, ultimately making businesses more data-driven, agile, and competitive in an ever-changing market."  

---

#### **Example 3: Word Limit 100-200 (Humorous, NO EMOJIS, Correct Length)**  
**Input**: "Navigating remote work challenges as a software engineer."  
- Style: **Humorous**  
- Word Count: **100-200**  

**Output (STRICTLY within 100-200 words, No Emojis/Hashtags, Correct Word Count Applied):**  
"Working remotely as a software engineer is a dream—until your Wi-Fi decides it's Monday too. Between sudden video calls, the never-ending 'Can you hear me?' moments, and trying to sound professional while a dog barks in the background, it's an adventure.  

I’ve mastered the art of nodding thoughtfully while frantically Googling a solution. My keyboard is now my best friend, and my chair has become a second home. The mute button? A lifesaver. And let’s not even get started on the internal struggle of whether to change out of pajamas for a 9 AM meeting.  

But despite the chaos, remote work has given me flexibility, uninterrupted deep focus (when Slack isn't buzzing), and the ability to work alongside my cat—who now believes he's part of the development team. It’s a challenge, but one I wouldn’t trade for anything (except maybe better Wi-Fi)."  

---

#### **Example 4: Word Limit 100-200 (Formal Tone, Correct Length)**  
**Input**: "Completed a cybersecurity certification."  
- Style: **Formal**  
- Word Count: **100-200**  

**Output (STRICTLY within 100-200 words, No Emojis/Hashtags, Correct Word Count Applied):**  
"I am pleased to share that I have successfully completed a cybersecurity certification, further strengthening my expertise in securing digital infrastructures. This program provided in-depth insights into risk assessment, threat mitigation, and industry best practices.  

With cybersecurity threats evolving rapidly, it has become crucial to stay updated with advanced security measures. The certification covered critical topics such as network security, ethical hacking, and penetration testing, equipping me with a comprehensive understanding of modern cybersecurity challenges. I look forward to applying these skills to real-world scenarios, enhancing digital security for organizations and individuals alike.  

Cybersecurity is a field that requires continuous learning, and I am eager to explore further specializations in areas such as cloud security and threat intelligence. By staying proactive and engaged with the latest security advancements, I aim to contribute meaningfully to the industry and support efforts in building a more secure digital environment."  

---

### **FINAL INSTRUCTIONS:**  
1. **STRICTLY APPLY the selected tone (${behaviour}) and ENSURE the post adheres to the exact word limit (${words}).**  
2. **STRICTLY PROHIBITED**: Emojis, hashtags, markdown, or any additional informal elements.  
3. **STRICTLY ENSURE WORD LIMIT COMPLIANCE BY COUNTING WORDS BEFORE FINALIZING OUTPUT.**  
4. **IF THE USER INPUT IS TOO SHORT TO CREATE A MEANINGFUL TWITTER POST, PROMPT THEM TO PROVIDE MORE DETAILS RATHER THAN GENERATING AN INADEQUATE POST.**  
5. **FINAL OUTPUT MUST BE A REFINED, TWITTER-READY POST WITH PERFECT WORD COUNT (do not show the word count in the output, just keep it to yourself).**  

Now, based on the provided input details, generate the refined post accordingly.
`;

      
      const model = genAI.getGenerativeModel({
        model: process.env.AI_MODEL ?? ""
      });
    console.log(behaviour)
    console.log(words)
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