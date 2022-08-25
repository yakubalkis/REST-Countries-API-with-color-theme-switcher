import React from "react";
import Header from "./Header";
import Main from "./components/pages/Main";
import CartDetail from "./components/pages/CartDetail";
import { Routes,Route } from "react-router-dom";
import { connect } from "react-redux";
import { toggle } from "./components/actions";


function App(props){
  const mode = props.isToggle ? 'dark' : 'light'
  return(
    <div className={`container ${mode}-theme`}>
      <Header/>
      <Routes>
         <Route path='/*' element = {<Main />} /> 
         <Route path="/cartDetail" element={<CartDetail />} />
      </Routes>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isToggle: state.isToggle
  }
}
export default connect(mapStateToProps, {toggle})(App)