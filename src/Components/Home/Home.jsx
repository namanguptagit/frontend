import React from 'react'
import {useEffect} from 'react'
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg"
import venusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space.jpg"
import {Typography} from "@mui/material"
import TimeLine from '../TimeLine/TimeLine';
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
const Home = () => {
    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera
            .position
            .set(4, 4, 8);

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({canvas});

        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture});
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus
            .position
            .set(8, 5, 5);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

        pointLight
            .position
            .set(8, 5, 5);
        pointLight2
            .position
            .set(-8, -5, -5);

        scene.add(moon);
        scene.add(venus);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.background = spaceTexture;

        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if (e.clientY <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        });

        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera);
        }

        animate();

    }, [])

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>
            <div className="homeContainer">
                <Typography variant='h3'>TIMELINE</Typography>
                <TimeLine timelines={[1, 2, 3, 4]}/>
            </div>
            <div className="homeSkills">
                <Typography variant='h3'>Skills</Typography>
                <div className="homeCubeSkills">

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src="" alt="face1"/>

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src="" alt="face2"/>

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src="" alt="face3"/>

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src="" alt="face4"/>

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src="" alt="face5"/>

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="face6"/>

                    </div>

                </div>
                <div className="cubeShadow"></div>
                <div className="homeskillsBox">
                    <SiCplusplus/>
                    <SiHtml5/>
                    <SiCss3/>
                    <SiJavascript/>
                    <SiMongodb/>
                    <SiExpress/>
                    <SiReact/>
                    <SiNodedotjs/>
                    <SiThreedotjs/>
                </div>
            </div>
            <div className="homeYoutube">
                <Typography variant="h3">Youtube Videos</Typography>
                <div className="homeYoutubeWrapper">
                    <YoutubeCard
                        image="data:image/jpeg;base64,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"
                        title="sample video" />
                </div>
            </div>
        </div>
    )
}

export default Home