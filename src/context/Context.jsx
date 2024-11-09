import { createContext, useState } from "react";
import run from "../confing/gimini";

export const Context = createContext();

const ContextProvider = (props) => {

	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPromt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");
	const delaypara = (index, nextWord) =>{
		setTimeout(function(){
			setResultData(prev =>prev+nextWord);
		},75*index)
	}

	const newChat = () => {
		setLoading(false)
		setShowResult(false)

	}

	
	const onSent = async (prompt) =>{
		setResultData("")
		setLoading(true)
		setShowResult(true)
		let response;
		if(prompt !== undefined){
			response = await run(prompt)
			setRecentPromt(prompt)
		}
		else{
			setPrevPrompts(prev=>[...prev,input])
			setRecentPromt(input)
			response = await run(input)
		}




		let responseArray = response.split("**")
		let newResponse="" ;
		for(let i =0 ; i < responseArray.length; i++)
		{
			if (i === 0 || i%2 !==1 ){
				newResponse += responseArray[i];
			}
			else{
				newResponse += "<i>" + responseArray[i]+"<i>";
			}
		}

		let newResponse2 = newResponse.split("*").join("</br>")




		let newResponseArray =  newResponse2.split(" ");
		for(let i=0; i<responseArray.length; i++)
		{
			const nextWord = newResponseArray[i];
			delaypara(i, nextWord+ " ")
		}
		setLoading(false)
		setInput("")

	}

	const contextValue = {
		prevPrompts,
		setPrevPrompts,
		onSent,
		setRecentPromt,
		recentPrompt,
		showResult,
		loading,
		resultData,
		input,
		setInput,
		newChat



	}

	return(
		<Context.Provider value={contextValue}>
			{props.children }
		</Context.Provider>
	)
}

export default ContextProvider