import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartList from './pages/cardList';
import OnboardingForm from './pages/onboardingForm';

 const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<CartList />} /> 
        <Route path={"/login"} element={<OnboardingForm />} />
    </Routes>
   </BrowserRouter>
  )
}

export default Router;