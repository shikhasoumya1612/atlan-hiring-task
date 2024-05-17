import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function generateGeminiResponse(chatHistory, newMessage) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const formattedChatHistory = chatHistory.map((message) => ({
      role: message.sentByUser ? "user" : "model",
      parts: [{ text: message.text }],
    }));

    const chat = model.startChat({
      history: formattedChatHistory,
    });

    const msg = newMessage;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.log(error);
    return "Sorry, there was an error.";
  }
}
