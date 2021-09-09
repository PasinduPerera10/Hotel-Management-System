import React, { Component } from 'react';
import axios from 'axios';
import img7 from './images/room1.jpg';


export default class RoomsForBooking extends Component{
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


<div style={{marginLeft:"100px",marginTop:"-900px", backgroundImage:"./images/logoco.png",maxWidth:"100%",height:"100px"}}>



{this.state.posts.map((posts,index) =>(
<div className="c1" style={{float:"left",width:"31%"}}>
<div class="card" style={{marginLeft:"100px",marginTop:"100px", backgroundImage:"./images/logoco.png",width:"300px" ,height:"400px"}}>


  <img src={img7} alt="Avatar" style={{width:"100%",height:"280px"}}/>
  <div class="container">
    
<a href={`/room/${posts._id}`} style={{textDecoration:'none'}}>


  <p>Room Title {posts.RoomTitle}</p>



</a>
<p>Description {posts.Description}</p>
<p>Bed Type {posts.BedType}</p>
<p>Numbe rOf Maximum Persons {posts.NumberOfMaximumPersons}</p>
<p>Base Price(Rs.) {posts.BasePrice}</p>
<p>Discount {posts.Discount}</p>
<p>Total Base Price(Rs.) {posts.TotalBasePrice}</p>
<a href=""><input type="button" style={{width:"100px", marginLeft:"120px"}}></input></a>
<br></br>
</div>
</div>
</div>


))}
</div>

)
}
}
