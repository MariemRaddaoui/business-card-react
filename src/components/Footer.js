import React from "react"
import facebook from "../images/facebook_icon.png"
import instagram from "../images/instagram_icon.png"
import twitter from "../images/twitter_icon.png"
import github from "../images/github_icon.png"

export default function Footer(){
    return(
        <footer>
            <img src={twitter} alt="Twitter" />
			<img src={facebook} alt="Facebook" />
			<img src={instagram} alt="Instagram" />
			<img src={github} alt="GitHub" />
        </footer>
    )
}