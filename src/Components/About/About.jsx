import {Typography} from '@mui/material'
import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div className='about'>
            <div className="aboutContainer">
                <Typography>This is a sample quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/86222875?v=4"
                        alt="naman"
                        className='aboutAvatar'/>
                    <Typography
                        variant='h4'
                        style={{
                        margin: "1vmax 0",
                        color: "black"
                    }}>
                        Naman Gupta
                    </Typography>
                    <Typography>Full Stack Developer</Typography>
                    <Typography style={{
                        margin: "1vmax 0",
                    }}>I am a Fresher</Typography>
                </div>
                <div>
                    <Typography
                        style={{
                        wordSpacing: "5px",
                        lineHeight: "50px",
                        letterSpacing: "5px",
                        textAlign: "right"
                    }}>
                        This is Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure perspiciatis dolorem nisi molestias eaque ea, est quidem reprehenderit sunt
                        corrupti in!
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About