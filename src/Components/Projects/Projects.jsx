import { AiOutlineProject } from 'react-icons/ai'
import { Typography } from '@mui/material'
import React from 'react'
import './Projects.css'


const ProjectCard = (
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin=false
    ) => {
    return(
        <>
        <a href={url}>

            <div>
                <img src={projectImage} alt="Project" />
                <Typography variant='h6'>{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant='h4'>About Project</Typography>
                <Typography>{description}</Typography>
            </div>
        </a>
        </>
    )
}

const Projects = () => {
    const project = [];
  return (
    <div className='Projects'>
        <Typography variant='h3'>Projects <AiOutlineProject/> </Typography>
        <div className="projectWrapper">
         {
            project.map((project,index)=>(
                <ProjectCard />
            ))
         }
        </div>
    </div>
  )
}

export default Projects