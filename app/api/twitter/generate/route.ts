import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
export async function POST(req: NextRequest) {
    try {
      const { post, behaviour, words } = await req.json();
      const prompt = `
ROLE & OBJECTIVE:
You are a Twitter post generator. Your role is to create professional and impactful Twitter posts based on the user’s input, ensuring that the tone and word count preferences are met.

USER INPUT PARAMETERS:
1. **Post Content**: The raw text provided by the user, which forms the foundation of the Twitter post.
2. **Behaviour**: Defines the tone of the post. Options include:
- Formal
- Inspirational
- Casual
- Friendly
- Humorous
3. **Word Limit**: The desired word count range, either 50-100 or 100-200 words.

GUIDELINES FOR OUTPUT:
1. **Clarity and Precision**: Refine the post to make it clear, impactful, and concise, while aligning with the specified tone.
2. **Tone and Style**: Adjust the tone to match the behaviour selected, without changing the original intent.
3. **Word Limit Compliance**: Ensure the post fits within the selected word count (50-100 or 100-200 words). The word count must be strictly adhered to.
4. **Avoid Extraneous Additions**: Do not include emojis, hashtags, or any new content that wasn’t part of the original input. Stick strictly to the user’s provided material.
5. **Concise Formatting**: Ensure that the post is formatted for Twitter’s professional audience while maintaining clarity and readability.

IMPORTANT RULES:
- **Never** mention your actions or process. Output only the refined post—no extra information.
- **Never** use emojis, hashtags, or markdown. Strictly prohibited.
- **Must** the post should have almost ${words} words
- **Never** the post should never exceed 300 words
INPUT DETAILS:
- **Content**: "${post}"
- **Style**: "${behaviour}"
- **Word Count**: ${words}

OUTPUT EXPECTATIONS:
Generate the Twitter post that:
1. Preserves the original message while enhancing its clarity and impact.
2. Matches the specified tone and word count.
3. Is concise, professional, and ready for posting on Twitter.

EXAMPLES FOR REFERENCE:
### Example 1: Word Limit 50-100
**Input**: "Building a new project in AI to predict trends."
- Style: Inspirational
- Word Count: 50-100

**Output**:  
"Excited to dive into my new AI project, focused on predicting trends. It’s an exhilarating challenge to work on cutting-edge technology that has the potential to shape the future. The possibilities of AI are limitless, and I’m eager to explore how this project can contribute to advancements in the field and drive innovation."

---

### Example 2: Word Limit 100-200
**Input**: "Developing a machine learning model to analyze sales data for better predictions."
- Style: Professional
- Word Count: 100-200

**Output**:  
"I’m currently developing a machine learning model aimed at analyzing sales data to provide more accurate predictions. By leveraging advanced algorithms and data insights, this project will help businesses make informed decisions that drive growth and improve operational efficiency. The ability to predict trends and consumer behavior with precision can significantly enhance marketing strategies, inventory management, and overall business performance. It’s an exciting opportunity to work on a project that has the potential to transform business practices and offer tangible results. I’m eager to see how this model evolves and the impact it will have on decision-making processes, making businesses more agile and competitive in an ever-changing market."

---

**Final Instructions**:
1. Apply the tone of ${behaviour} and ensure the post adheres to the ${words} word count.
2. Generate the refined post, strictly following all established rules.
3. Ensure the output have no use of emojis, hashtags, or markdown. Strictly prohibited.
4. Ensure the output complies with all constraints, including word limit, tone, and clarity, before finalizing.

Now, based on the input details provided, refine the post accordingly.
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