import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Css/Shape.css';
import TopHeader from "./MyComponents/TopHeader";
import BackIcon from "./MyComponents/BackIcon";
import SearchBar from "./MyComponents/SearchBar";
import BackSearchBar from "./MyComponents/BackSearchBar";
import SearchBarButton from "./MyComponents/SearchBarButton";
import { StartWriting } from "./MyComponents/StartWriting";
import { StartWritingButton } from "./MyComponents/StartWritingButton";
import { Create } from "./MyComponents/Create";
import PageHeader from "./MyComponents/PageHeader";
import Education from "./MyComponents/Education";
import Family from "./MyComponents/Family";
import Fiction from "./MyComponents/Fiction";
import Friends from "./MyComponents/Friends";
import Health from "./MyComponents/Health";
import Job from "./MyComponents/Job";
import Love from "./MyComponents/Love";
import Money from "./MyComponents/Money";
import Others from "./MyComponents/Others";
import Power from "./MyComponents/Power";
import Social from "./MyComponents/Social";
import Vacation from "./MyComponents/Vacation";
import AllPost from "./MyComponents/AllPost";
import { SinglePost } from './MyComponents/SinglePost';
import { Footer } from "./MyComponents/Footer";
import About from "./MyComponents/About";
import Terms from "./MyComponents/Terms";
import { Suggestion } from "./MyComponents/Suggestion";
import ToBottomScroll from "./MyComponents/Utils/ToBottomScroll";
import { Fragment } from 'react';



const App = () => {


  return (
    <>

      <Router>
        <TopHeader title="liveyourwish" />
        <ToBottomScroll />

        <Switch>
          <Route exact path='/' render={() => {
            return (
              <Fragment>
               
                <SearchBarButton />
                <StartWriting />
                <StartWritingButton />
                <PageHeader />
                <AllPost />
              </Fragment>)
          }}></Route>


          <Route exact path='/post/:slug' exact component={SinglePost} />

          <Route exact path='/SearchBar' render={() => {
            return (
              <>
                <SearchBar />

              </>)
          }}></Route>



          <Route exact path='/Create' render={() => {
            return (
              <>
                <BackIcon />
                <Create Create={Create} />
                <AllPost AllPost={AllPost} />


              </>)
          }}></Route>


          <Route exact path='/AllPosts' render={() => {
            return (
              <>

                <BackSearchBar />
                {/* <StartWritingButton /> */}
                <AllPost />


              </>)
          }}></Route>



          <Route exact path='/Education' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Education Education={Education} />

              </>)
          }}></Route>

          <Route exact path='/Family' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Family Family={Family} />

              </>)
          }}></Route>

          <Route exact path='/Fiction' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Fiction Fiction={Fiction} />

              </>)
          }}></Route>

          <Route exact path='/Friends' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Friends Friends={Friends} />

              </>)
          }}></Route>

          <Route exact path='/Health' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Health Health={Health} />

              </>)
          }}></Route>

          <Route exact path='/Job' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Job Job={Job} />

              </>)
          }}></Route>

          <Route exact path='/Love' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Love Love={Love} />

              </>)
          }}></Route>

          <Route exact path='/Money' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Money Money={Money} />

              </>)
          }}></Route>

          <Route exact path='/Others' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Others Others={Others} />

              </>)
          }}></Route>

          <Route exact path='/Power' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Power Power={Power} />

              </>)
          }}></Route>

          <Route exact path='/Social' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Social Social={Social} />

              </>)
          }}></Route>

          <Route exact path='/Vacation' render={() => {
            return (
              <>

                <BackIcon />
                <StartWritingButton />
                <Vacation Vacation={Vacation} />

              </>)
          }}></Route>


          <Route exact path='/Suggestion' render={() => {
            return (
              <>
                <BackIcon />
                <Suggestion Suggestion={Suggestion} />

              </>)
          }}></Route>

          <Route exact path='/About' render={() => {
            return (
              <>
                <BackIcon />
                <About About={About} />

              </>)
          }}></Route>

          <Route exact path='/Terms' render={() => {
            return (
              <>
                <BackIcon />
                <Terms Terms={Terms} />

              </>)
          }}></Route>















        </Switch>

        <Footer />


      </Router>



    </>

  );

}
export default App;
