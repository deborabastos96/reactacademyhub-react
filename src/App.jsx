import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  color: #888;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello World</Heading>
      </StyledApp>
    </>
  );
}

export default App;
