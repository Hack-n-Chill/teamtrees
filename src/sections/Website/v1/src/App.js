import React from 'react';
import './App.css';
import "./index.css"
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";


// import Sidebar from './components/sidebar'
import Header from './components/Header'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education';
import Experience from './components/experience'
import Projects from './components/projects'
import Footer from './components/Footer'
import Spinner1 from '../../../../components/Spinner/Spinner1';

const App = ({dataAbout, dataEdu, dataExp, dataProj, dataSocial}) =>  { 
  if(!isLoaded(dataSocial)) return <Spinner1 /> 
  console.log(dataAbout)
    return (
      <div>
        <Header></Header>
        
        <About info={dataAbout}></About>
        {/* <Skills></Skills> */}
        <Education info={dataEdu}></Education>
        <Experience info={dataExp} ></Experience>
        <Projects info={dataProj}></Projects>
        <Footer></Footer>
      </div>
    );  
}

const mapStateToProps = (state) => {
  //   console.log(state);
  const dataAbout = state.firestore.ordered.about;
  const dataEdu  = state.firestore.ordered.edu;
  const dataExp  = state.firestore.ordered.exp;
  const dataProj  = state.firestore.ordered.proj;
  const dataSocial  = state.firestore.ordered.social;

  const uid = state.firebase.auth.uid;
  return {
    dataAbout,
    dataEdu,
    dataExp,
    dataProj,
    dataSocial,
    uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "about",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
    {
      collection: "edu",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },{
      collection: "exp",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
    {
      collection: "proj",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
    {
      collection: "social",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(App);