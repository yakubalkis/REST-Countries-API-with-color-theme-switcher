import React from "react";
import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import { connect } from "react-redux";
import { toggle } from "./components/actions";


function App(props){
  const mode = props.isToggle ? 'dark' : 'light'
  return(
    <div className={`container ${mode}-theme`}>
      <Header/>
      <Main/>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isToggle: state.isToggle
  }
}
export default connect(mapStateToProps, {toggle})(App)