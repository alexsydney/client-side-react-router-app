import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
{/*import {HashRouter as Router, Route} from 'react-router-dom'; */}
import Home from './components/Home';
import NameForm from './components/prompt/NameForm';
import PropViewer from './components/prompt/PropViewer';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/color/ColorSwatch';

const App = () => {

    return (
      <Router>

        <div>
            <Header/>
            <Sidebar/>
            <div className={'rightContentContainer'}>

            <Switch>
              <Route path='/' component={ Home } exact  />
              <Route path='/prompt' component={ NameForm } />
              <Route path='/props' component={ PropViewer }  />
              <Route path='/color' render={() => {
                  return <ColorSwatch color='#ff0000' text='Red'/>
              }}  />

              <Route component={ PageNotFound }  />
            </Switch>


              {/* <Route path='/' component={ Home } exact />  */}
             {/*  <Route path='/foo' component={ Home } > */}


            </div>
        </div>
      </Router>
    );
};


export default App;
