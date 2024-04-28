import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useToggleMenu } from "../context/ToggleMenuContext";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "26rem 1fr" : "8.3rem 1fr"};
  grid-template-rows: auto 1fr;
  height: 100vh;
  transition: all 0.3s;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  const { isMenuOpen } = useToggleMenu();

  return (
    <StyledApp $isMenuOpen={isMenuOpen}>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledApp>
  );
}

export default AppLayout;
