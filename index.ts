import OpenAI from 'openai';
import { Model } from './types/model.type';

const createSQLQuery = async (OPENAI_API_KEY: string, model: Model, message: string) => {
  try {
    const configuration = {
      apiKey: OPENAI_API_KEY || '',
    };
    const openai = new OpenAI(configuration);
    const completions = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'user',
          content: 'Create a SQL request to ' + message,
        },
      ],
    });
    return completions.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Something Went Wrong!');
    }
  }
};

export { createSQLQuery };
