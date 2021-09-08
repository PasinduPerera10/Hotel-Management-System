import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import AddRoom from './hotelmanagementcomponents/AddRoom';
import EditRoom from './hotelmanagementcomponents/EditRoom';
import AvailableRooms from './hotelmanagementcomponents/AvailableRooms';
import RoomsForBooking from './hotelmanagementcomponents/RoomsForBooking';
import Home from './hotelmanagementcomponents/Home';
import Header from './hotelmanagementcomponents/Header';
import backgroundimage from './hotelmanagementcomponents/backgroundimage';
import PostRoomDetails from './hotelmanagementcomponents/PostRoomDetails';
import RoomsCategory from './hotelmanagementcomponents/RoomsCategory';
import Clock from './hotelmanagementcomponents/Clock';
import AvailableLuxuryRooms from './hotelmanagementcomponents/AvailableLuxuryRooms';
import footer from './hotelmanagementcomponents/footer';
import RoomMonthlyReport from './hotelmanagementcomponents/RoomMonthlyReport';
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
  <Route path="/room/:id" exact component={PostRoomDetails}></Route>
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


