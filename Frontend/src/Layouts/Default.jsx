import { useState } from "react";
import { Layout, Content, ContentWrapper, ArrowIcon } from "./Styles.js";
import { Sidebar } from "../components/Sidebar/Index";
import Arrow from "../assets/arrow.svg";
import { Outlet, useLocation } from "react-router-dom";

export const Default = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const routes = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Layout sidebarOpen={sidebarOpen} route={routes.pathname} >
        {sidebarOpen && <Sidebar route={routes.pathname} />}

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
