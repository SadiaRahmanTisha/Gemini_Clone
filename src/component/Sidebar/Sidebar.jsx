import React, { useContext, useState } from "react";
import './Sidebar.css'
import { Context } from "../../context/Context";




const Sidebar = () => {

	const [extended, setExtended] = useState(false)
	const{onSent, prevPrompts, setRecentPrompt,newChat} = useContext(Context)
	const loadPrompt = async (prompt) => {
		setRecentPrompt
		await onSent(prompt)
	}


	return(
		<div className="sidebar">
			<div className="top">
				<img className="menu" onClick={()=>setExtended(prev=>!prev)} src="https://cdn.icon-icons.com/icons2/2518/PNG/512/menu_icon_151204.png" alt="" />

				<div onClick={()=>newChat()} className="new-chat">
					<p>+</p>
					{extended?<h6>New Chat</h6>: null}
				</div>
				{extended?
				<div className="recent">
					<p className="recent-title">Recent</p>
					{prevPrompts.map ((item, index)=>{
						return(
							<div onClick={()=>loadPrompt(item)} className="recent-entry">
								<img src="https://cdn-icons-png.flaticon.com/512/641/641306.png" alt="" />
								<p>{item.slice(0, 19)}...</p>
							</div>
						)
					})}
				</div>:null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src="https://static-00.iconduck.com/assets.00/question-mark-circle-icon-512x512-3ysq58ug.png" alt="" />
					{extended?<p>Help</p>:null}
				</div>
				<div className="bottom-item recent-entry">
					<img src="https://icons-for-free.com/iff/png/512/history-1324760586902020941.png" alt="" />
					{extended?<p>Activity</p>:null}
				</div>
				<div className="bottom-item recent-entry">
					<img src="https://cdn-icons-png.flaticon.com/512/561/561135.png" alt="" />
					{extended?<p>Settings</p>:null}
				</div>
			</div>
		</div>
	)
}

export default Sidebar