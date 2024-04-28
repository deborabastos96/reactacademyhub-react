import styled from "styled-components";
import DarkModeToggle from "./DarkMenuToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
