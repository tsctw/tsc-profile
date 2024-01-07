import React from "react";
import type { HeadFC } from "gatsby";
import { Seo } from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
    return (
        <div className="leading-8 p-5">
            <div className="flex justify-center mb-5">
                <div className="border-2 rounded-full border-black border-solid relative" style={{ width: '300px', height: '300px'}}>
                    <StaticImage className="rounded-full" src="../images/profile03.png" alt="profile img" width={300} height={300}></StaticImage>
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <div className="w-2/3">
                    <p className="pb-5">My name is Tao-Sen Chang. A software engineer with solid experience specializing in web application development, DevOps, cloud solutions and database. About 3 years experiences of developing platforms to enhence data-driven decision making. Adept at identifying innovative solutions in collaboration with diverse teams and project stakeholders.</p>
                    <p>Fascinated with travel and sharing knowledge. Live well, love lots, and laugh often. </p>
                </div>
            </div>
        </div>
    );
}

export default About;

export const Head: HeadFC = () => <Seo title="About Me"></Seo>