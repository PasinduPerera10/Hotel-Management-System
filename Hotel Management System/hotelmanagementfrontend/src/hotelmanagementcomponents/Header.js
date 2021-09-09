import React from "react";
import img1 from './images/logoco.png';

function Header(){

return (



<div>




<title>CSS GRID DASHBOARD</title>
  <tbody id="body">
    <div class="container1">
      <nav class="navbar">
        <div class="nav_icon" onclick="toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left">
          <a href="/AvailableLuxuryRooms">Room Booking</a>
          <a href="#/">Event Booking</a>
          
          <a class="active_link" href="#/">Food Order</a>
        </div>
        <div class="navbar__right">
          <a href="/RoomMonthlyReport">
            <i class="fa fa-search" aria-hidden="true"></i>
          </a>
         
      
          <a href="/a" className="profile">
            <img width="30" src="assets/avatar.svg" alt=""/>
             <i class="far fa-user-circle" aria-hidden="true"></i> 
          </a>
        </div>
      </nav>

     

      <div id="sidebar">
        <div class="sidebar__title">
          <div class="sidebar__img">
            <img src={img1} alt="logo" style={{height:"150px",width:"150px"}} />
          </div>
          <i
            onclick="closeSidebar()"
            class="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div class="sidebar__menu">
          <div class="sidebar__link active_menu_link">
            <i class="fa fa-home"></i>
            <a href="/b">Dashboard</a>
          </div>
          <h2>System Management</h2>
          <div class="sidebar__link">
            <i class="	fas fa-bed" aria-hidden="true"></i>
            <a href="/a">Room Management</a>
          </div>
          <div class="sidebar__link">
            <i class="	fas fa-door-open"></i>
            <a href="#/">Event Management</a>
          </div>
          <div class="sidebar__link">
            <i class="fas fa-hand-holding-usd"></i>
            <a href="#/">Financial Management</a>
          </div>
          <div class="sidebar__link">
            <i class="fas fa-car"></i>
            <a href="#/">Transport Management</a>
          </div>
          <div class="sidebar__link">
            <i class="fas fa-suitcase-rolling"></i>
            <a href="/a">Reservation Management</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-archive"></i>
            <a href="#/">Inventory Management</a>
          </div>
          <div class="sidebar__link">
            <i class="fas fa-utensils"></i>
            <a href="#/">Restuarant Management</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-handshake-o"></i>
            <a href="#/">Employee Management</a>
          </div>
          <h2>LEAVE</h2>
          <div class="sidebar__link">
            <i class="fa fa-files-o"></i>
            <a href="#/">Apply for leave</a>
          </div>
          <div class="sidebar__logout">
            <i class="fa fa-power-off"></i>
            <a href="#/">LogOut</a>
          </div>   
        </div>
      </div>
    </div>
    
 </tbody>
 

</div>

)


}

export default Header;


