import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Context'

function Main() {


	const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
	<div className="container main">
		<div className="nav gemini_icon">
			<p>Gemini</p>
			<img src="https://cdn.openart.ai/published/SHsFC7RezIOFQ4NmmGTh/aLgqS4rP_Srjv_1024.webp" alt="" />
		</div>
		<div className="container main-container">
			{!showResult
			?<>
				<div className="greet">
					<p><span>Hello, Dev.</span></p>
					<p>How can I help you?</p>
				</div>
					<div className="cards">
						<div className="card">
							<p>Suggest beautiful places to see on an upcoming road trip</p>
							<img src="https://static-00.iconduck.com/assets.00/compass-icon-512x512-s9cq2sum.png" alt="" />
			
						</div>
						<div className="card">
							<p>Brifely summarize this concept: urban planning</p>
							<img src="https://static-00.iconduck.com/assets.00/lightbulb-icon-2048x1947-78rv89nu.png" alt="" />
			
						</div>
						<div className="card">
							<p>Brainstom team bonding activities for our work retreat</p>
							<img src="https://cdn-icons-png.flaticon.com/512/685/685887.png" alt="" />
			
						</div>
						<div className="card">
							<p>Improve the readability of the following code</p>
							<img src="https://static.thenounproject.com/png/344132-200.png" alt="" />
			
						</div>
					</div>
			</>
			: <div className="result">
				<div className="result-title">
					<img src="https://cdn.openart.ai/published/SHsFC7RezIOFQ4NmmGTh/aLgqS4rP_Srjv_1024.webp" alt="" />
					<p>{recentPrompt}</p>
				</div>
				<div className="result-data">
					<img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Google_Bard_logo.svg" alt="" />
					{loading
					? 
					<div className='loader'>
						<hr />
						<hr />
						<hr />
					</div>
					:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
					}
				</div>
			</div>
			}
			<div className="container  main-bottom">
				<div className="serch-box">
					<input onChange={(e) =>setInput(e.target.value)} value={input}  type="text" placeholder='Enter a prompt here'/>
					<div>
						<img src="https://cdn-icons-png.flaticon.com/512/1082/1082810.png" alt="" />
						<img onClick={()=>onSent()} src="https://static-00.iconduck.com/assets.00/send-icon-1024x1011-38wtwa0n.png" alt="" />
					</div>
				</div>

				<div className="bottom-info">
					<p>Gemini display inaccurate info, including about people, so double-check its reponse. Your Privacy and Gemini apps.</p>
					<h5>Gemini made <img src="https://static.vecteezy.com/system/resources/previews/018/843/065/non_2x/love-heart-icon-pink-love-logo-heart-free-png.png" alt="" /> by Sadia Rahman Tisha..</h5>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Main
