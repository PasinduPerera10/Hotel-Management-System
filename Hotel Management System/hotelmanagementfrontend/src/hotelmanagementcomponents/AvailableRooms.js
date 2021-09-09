import React, { Component } from 'react';
import axios from 'axios';
import "./styles.css";




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
posts:res.data.existingRoom,



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





<div className="container" style={{marginLeft:"100px", marginTop:"-900px",backgroundImage:"./images/logoco.png",maxWidth:"100%"}}>
<div className="row">
<div className="col-lg-9 mt-2 mb-2">



      

<button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>








<h4>All Rooms</h4>
</div>
<div className="col-lg-3 mt-2 mb-2" >
    <input
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchQuery"
    onChange={this.handleSearchArea}>
    </input>
    </div>
 </div>
<table className="table table-hover">

<tbody>
<th Scope="col" style={{border:"1px", width:"200px"}}>
<tr>#</tr>
<tr>Room Title</tr>
<tr>Room Number</tr>
<tr>Room Short Code</tr>
<tr>BedType</tr>
<tr style={{height:"100px"}}>Description</tr>
<tr>No Of Maximum Persons</tr>
<tr>Extra Bed</tr>
<tr>Cleanning Status</tr>
<tr>Base Price</tr>
<tr>Additional Person Price</tr>
<tr>Extra Bed Price</tr>
<tr>Discount</tr>
<tr>Total Base Price</tr>
</th>

{this.state.posts.map((posts,index) =>(
  
<th scope="col" key={index} style={{border:"1px", width:"200px"}}>
    <tr>{index+1}</tr> 
<tr>
<a href={`/room/${posts._id}`} style={{textDecoration:'none'}}>
{posts.RoomTitle}
</a>
</tr>
<tr>{posts.RoomNumber}</tr>
<tr>{posts.RoomShortCode}</tr>
<tr>{posts.BedType}</tr>
<tr style={{height:"100px"}}>{posts.Description}</tr>
<tr>{posts.NumberOfMaximumPersons}</tr>
<tr>{posts.ExtraBed}</tr>
<tr>{posts.CleanningStatus}</tr>
<tr>{posts.BasePrice}</tr>
<tr>{posts.AdditionalPersonPrice}</tr>
<tr>{posts.ExtraBedPrice}</tr>
<tr>{posts.Discount}</tr>
<tr>{posts.TotalBasePrice}</tr>
<td>
<a className="btn btn-warning"  href={`/edit/${posts._id}`} style={{height:"60px",width:"80px",marginLeft:"-16px"}}>
<i className="fas fa-edit" style={{marginLeft:"0px"}}></i>&nbsp;Edit
</a>
&nbsp;
<a className="btn btn-danger" href="/a" onClick={() =>this.onDelete(posts._id)} style={{height:"60px",width:"80px",marginLeft:"12px"}}>
<i className="fas fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</th>
))}
</tbody>
</table>
<br/>
<a href="/RoomMonthlyReport"><input type="button" value="Generate Monthly Report" style={{background:"yellow", width:"200px", height:"40px", borderRadius:"20px", align:"center"}}></input></a>
</div>
)
}
}
