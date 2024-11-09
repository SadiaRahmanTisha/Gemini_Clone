
import {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const API_KEY ="AIzaSyD7puMewSs0JSP51EwfBAZUEocw_pDEQFI"
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "text/plain",
  };
  
  async function run(promt) {
	const chatSession = model.startChat({
	  generationConfig,
	  history: [
	  ],
	});
  
	const result = await chatSession.sendMessage(promt);
	const response = result.response;
	console.log(result.response.text());
	return response.text();
  }
  
  export default run;