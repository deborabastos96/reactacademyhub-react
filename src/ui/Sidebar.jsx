import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";
import MainNav from "./MainNav";
import { useToggleMenu } from "../context/ToggleMenuContext";

const StyledToggle = styled.div`
  font-size: 0;
  cursor: pointer;
  padding: 1.2rem;
  display: block;
  width: 4.8rem;
  position: relative;
  z-index: 5;
  margin-bottom: 1rem;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-600);
    transition: all 0.3s;
  }
`;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.8rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
`;

function Sidebar() {
  const { toggleMenu } = useToggleMenu();

  return (
    <StyledSidebar>
      <StyledToggle onClick={toggleMenu}>
        <HiBars3 />
      </StyledToggle>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
