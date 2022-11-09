import { createGlobalStyle } from "styled-components"

function Errors({errors}){
  return(<>
    <GlobalStyle />
    <h1>Sorry there was an Error</h1>
    <h1>Please check back later</h1>
    <h1>{errors}</h1>
  </>)
}
export default Errors;

const GlobalStyle = createGlobalStyle`
  background-color:black;
  color:white;
  font-family:sans-serif;`