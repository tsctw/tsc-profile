import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Seo } from "../components/seo";
import { SideMenu } from "../components/sideMenu";
import { MainPage } from "../components/mainPage";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex h-screen">
      <SideMenu></SideMenu>
      <MainPage></MainPage>
    </div>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home"></Seo>
