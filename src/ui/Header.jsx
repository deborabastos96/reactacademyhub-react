import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: right;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <UserInfo>
        <HeaderMenu />
      </UserInfo>
    </StyledHeader>
  );
}

export default Header;
