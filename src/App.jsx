import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.h1`
  color: #888;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>Hello World</h1>
      </StyledApp>
    </>
  );
}

export default App;
