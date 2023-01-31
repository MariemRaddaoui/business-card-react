import React from "react"

export default function Info(){
    return(
        <div className="info">
            <img scr="" alt="Image"/>
            <h1 className="name">Mariem Raddaoui</h1>
            <h3 className="job">Software Engineering Student</h3>
            <h4 className="website">www.mariemraddaoui.com</h4>
            <div className="buttons">
                <button className="button-email">
                    <img className="img-button-email" src="" alt="pic"/>Email
                </button>
                <button className="button-linkedin">
					<img
						className="img-button-linkedin" src="" alt="pic"/>LinkedIn
				</button>
            </div>
        </div>
    )
}