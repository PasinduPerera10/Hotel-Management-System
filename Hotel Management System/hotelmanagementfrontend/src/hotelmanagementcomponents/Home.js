import React, { Component } from 'react';
import axios from 'axios';
import img2 from './assets/hello.svg';


export default class AvailableRooms extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}

componentDidMount(){
this.retrievePosts();
}

retrievePosts(){
axios.get("http://localhost:8070/room").then(res =>{
if(res.data.success){
this.setState({
posts:res.data.existingRoom
});
console.log(this.state.posts)
} 
});
}

onDelete = (id) =>{
axios.delete(`http://localhost:8070/room/delete/${id}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
}

filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.RoomTitle.toLowerCase().includes(searchKey)||
    //post.RoomNumber.includes(searchKey)||
    post.RoomShortCode.toLowerCase().includes(searchKey)||
    post.Description.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
    }
    
    handleSearchArea = (e) =>{
    
        const searchKey=e.currentTarget.value;
    
        axios.get(`http://localhost:8070/room`).then(res =>{
    if(res.data.success){
    
        this.filterData(res.data.existingRoom,searchKey)
    }
    });
    
    
    
    }
    


render() {
return (

<div>

<main style={{marginLeft:"100px", marginTop:"-900px"}}>
        <div class="main__container"> 
          <div class="charts">       
            <div class="charts__right">
    <div class="charts__right__cards">
              <div class="content" style={{width:"1000px"}}>
    <div class="container text-left">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <form action="#" class="row">
            <div class="col-md-12">
              <div id="inline_cal"></div>
            </div>
          </form>
        </div>
      </div>       
    </div>
  </div>


           
              </div>
            </div>
          </div>
  
        </div>
      </main>
 

</div>


)
}
}


