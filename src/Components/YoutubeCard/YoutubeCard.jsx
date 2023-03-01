import { Typography } from '@mui/material';
import React from 'react';
import "./YoutubeCard.css";

const YoutubeCard = ({
    url="https://www.youtube.com/channel/UCVyHzxL8B4FNqIAPS-l8rFw",
    title="title here",
    image
}) => {
  return (
    <div className='youtubeCard'>
        <a href={url} target="blank">
            <img src={image} alt="video" />
            <Typography>
                {title}
            </Typography>
        </a>
    </div>
  )
}

export default YoutubeCard