import React from "react";
import { StaticImage } from "gatsby-plugin-image"

export const SideMenu = () => {
    return (
        <div className="basis-1/4 flex flex-col">
            <div className="h-1/2 flex flex-col justify-center items-center m-3 mt-5">
                <div className="border-2 rounded-full border-black border-solid relative">
                    <StaticImage className="rounded-full" src="../images/frenchie01.jpeg" alt="profile img" width={200} height={200}></StaticImage>
                </div>
                <div className="mt-5">Tao-Sen Chang</div>
            </div>
            <div className="h-1/2 m-3 flex flex-col justify-between items-center">
                <div>Home</div>
                <div>About Me</div>
                <div>Resume</div>
                <div>Projects</div>
                <div className="flex gap-4">
                    <div>LinkedIn</div>
                    <div>GitHub</div>
                    <div>Email</div>
                </div>
            </div>
        </div>
    )
}