import React from "react";
import type { HeadFC } from "gatsby";
import { Seo } from "../components/seo";

const About = () => {
    return (
        <div>about me</div>
    );
}

export default About;

export const Head: HeadFC = () => <Seo title="About Me"></Seo>