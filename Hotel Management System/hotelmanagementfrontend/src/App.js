/*import Header from './roommanagementcomponents/Header';
import AddRoom from './roommanagementcomponents/AddRoom';

import{BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      
    <Header/>
    <div class="content">

<Route path="/add" exact component={AddRoom}/>
</div>
        
    </div>
    </Router>
  );
}



export default App;*/



import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import AddRoom from './roommanagementcomponents/AddRoom';
import EditRoom from './roommanagementcomponents/EditRoom';
import AvailableRooms from './roommanagementcomponents/AvailableRooms';
import RoomsForBooking from './roommanagementcomponents/RoomsForBooking';
import Home from './roommanagementcomponents/Home';
import Header from './roommanagementcomponents/Header';
import backgroundimage from './roommanagementcomponents/backgroundimage';
import PostDetails from './roommanagementcomponents/PostDetails';
import RoomsCategory from './roommanagementcomponents/RoomsCategory';
import Clock from './roommanagementcomponents/Clock';
import AvailableLuxuryRooms from './roommanagementcomponents/AvailableLuxuryRooms';
import footer from './roommanagementcomponents/footer';
import RoomMonthlyReport from './roommanagementcomponents/RoomMonthlyReport';
import 'antd/dist/antd.css';
export default class App extends Component {

  
render() {
return (
<Router>
<Header/>
<footer/>
<div className="container">
<backgroundimage/>
<Route path="/b" exact component={Home}></Route>
<Route path="/a" exact component={AvailableRooms}></Route>
<Route path="/c" exact component={RoomsForBooking}></Route>
<Route path="/add" exact component={AddRoom}></Route>
<Route path="/edit/:id" exact component={EditRoom}></Route>
  <Route path="/room/:id" exact component={PostDetails}></Route>
  <Route path="/clock" exact component={Clock}></Route>
  <Route path="/category" exact component={RoomsCategory}></Route>
    <Route path="/AvailableLuxuryRooms" exact component={AvailableLuxuryRooms}></Route>
    <Route path="/RoomMonthlyReport" exact component={RoomMonthlyReport}></Route>
</div>
<footer/>
</Router>
)
}
}


