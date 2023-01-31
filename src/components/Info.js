import React from "react"
import pic from "../images/profile_pic1.jpg"
import email from "../images/mail.png"
import linkedin from "../images/linkedin_icon.png"
export default function Info(){
    return(
        <div className="info">
            <img src={pic} alt="Image"/>
            <h1 className="name">Mariem Raddaoui</h1>
            <h3 className="job">Software Engineering Student</h3>
            <h4 className="website">www.mariemraddaoui.com</h4>
            <div className="buttons">
                <button className="button-email">
                    <img className="img-button-email" src={email} alt="pic"/>Email
                </button>
                <button className="button-linkedin">
					<img
						className="img-button-linkedin" src={linkedin} alt="pic"/>LinkedIn
				</button>
            </div>
        </div>
    )
}