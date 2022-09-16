
import { useRef } from "react";
import useAlan from "./Alan";
import { CssBaseline } from "@mui/material";
import { Main , StyledToolbar , Content } from "./styles";
import {
  Routes,
  Route,
} from "react-router-dom";
import { NavBar , Movies , MovieInformation , Actors , Profile} from "./";


const App = () => {
  useAlan();
  const alanBtnContainer = useRef()
  return (
    <Main >
      <CssBaseline />
      <NavBar />
        <Content >
          <StyledToolbar />
        <Routes>
          <Route exact path='/' element={<Movies />} />
          <Route exact path='/approved' element={<Movies />} />
          <Route exact path='/movie/:id' element={<MovieInformation />} />
          <Route exact path='/actors/:id' element={<Actors />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
        </Content>
        <StyledToolbar ref={alanBtnContainer} />
    </Main>
  );
}

export default App;
