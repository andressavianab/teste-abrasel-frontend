import { useState } from "react";
import { Layout, Content, ContentWrapper, ArrowIcon } from "./Styles.js";
import { Sidebar } from "../components/Sidebar/Index";
import Arrow from "../assets/arrow.svg";
import { Outlet } from "react-router-dom";


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
            <Outlet />
          </ContentWrapper>
          <ArrowIcon sidebarOpen={sidebarOpen} onClick={toggleSidebar}>
            <img src={Arrow} alt="" />
          </ArrowIcon>
        </Content>
      </Layout>
    </>
  );
};
