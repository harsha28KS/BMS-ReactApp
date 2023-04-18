import React from 'react';
// import './App.css';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
import CardsSlider from './components/CardsSlider';
import Footer from './components/Footer';
import Header from './components/Header';
import Premieres from './components/Premieres';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import SliderImages from './components/SliderImages';
import Registration from './components/Registration';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          
          <Route path='/' element={
            <React.Fragment>
              <SliderImages />
              <CardsSlider /> 
              <Premieres />
            </React.Fragment>
          }>   
          </Route>
          
          <Route path='/movies' element={<AllMoviesFetch />}>
          </Route>

          <Route path='/movies/:movid' element={<SingleMovieFetch />}>
          </Route>

          <Route path='/register' element={<Registration />}>
          </Route>
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
