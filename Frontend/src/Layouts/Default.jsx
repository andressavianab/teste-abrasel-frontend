import { useState } from "react";
import { Layout, Content, ContentWrapper, ArrowIcon } from "./Styles.js";
import { Sidebar } from "../components/Sidebar/Index";
import Arrow from "../assets/arrow.svg";


export const Default = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Layout sidebarOpen={sidebarOpen}>
        {sidebarOpen && <Sidebar />}

        <Content sidebarOpen={sidebarOpen}>
          <ContentWrapper>
            <h1>hello</h1>
          </ContentWrapper>
          <ArrowIcon sidebarOpen={sidebarOpen} onClick={toggleSidebar}>
            <img src={Arrow} alt="" />
          </ArrowIcon>
        </Content>
      </Layout>
    </>
  );
};
