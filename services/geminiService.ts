import { GoogleGenAI } from "@google/genai";
import { MBTIProfile } from '../types';

export const generatePersonalityTip = async (profile: MBTIProfile) => {
  if (!process.env.API_KEY) {
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a fun and witty career/life coach. 
    The user has just taken an MBTI test and got: ${profile.code} (${profile.name}).
    Their slogan is: "${profile.slogan}".
    
    Please provide a one-sentence "Fortune Cookie" style piece of advice for them for today. 
    Make it insightful but short and punchy. 
    Don't use markdown. Just plain text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching tip:", error);
    return null;
  }
};