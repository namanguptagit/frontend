import {Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import { BsGithub, BsYoutube, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./Footer.css"


const Footer = () => {
    return (
        <div className='footer'>
            <div>
            <Typography variant='h5'>About Me</Typography>
            <Typography>
                Hello , my name is naman Gupta and i am a full stack developer and a software
                developer
                <b>NAMAN GUPTA</b>
            </Typography>
            <Link to="/contact" className='footerContactBtn'>
                <Typography>
                    Contact Us
                </Typography>
            </Link>
            </div>
            <div>
               <Typography variant='h6'>Social Media</Typography>
               <a href="https://github.com/namanguptagit" target="blank">
                <BsGithub />
               </a>
               <a href="https://www.youtube.com/channel/UCVyHzxL8B4FNqIAPS-l8rFw" target="blank">
                <BsYoutube />
               </a>
               <a href="https://twitter.com/Namangu39094590" target="blank">
                <BsTwitter />
               </a>
               <a href="https://www.linkedin.com/in/naman-gupta-59191216a" target="blank">
                <BsLinkedin />
               </a>
            </div>
        </div>
    )
}

export default Footer