import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props){
        super(props);
        
        this.state={
        post:{}
        };
        }

componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/room/${id}`).then((res) =>{
if(res.data.success){
this.setState({
post:res.data.post
});
console.log(this.state.post);


}
    });


}

render() {
const {RoomTitle,RoomNumber,RoomShortCode,BedType,Description,NumberOfMaximumPersons,ExtraBed,CleanningStatus,BasePrice,AdditionalPersonPrice,ExtraBedPrice,Discount,TotalBasePrice} = this.state.post;

return (




    
    <div style={{marginLeft:"100px", marginTop:"-900px"}}>
    <h1>{RoomNumber}</h1>
    <hr/>

    <div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px', color:"blue"}}>RoomTitle</label>
</div>


<dl className="colm2">

<label>RoomTitle</label>
    <label style={{marginLeft:"120px"}}>{RoomTitle}</label>
<br></br>

    <label>RoomNumber</label>
    <label style={{marginLeft:"95px"}}>{RoomNumber}</label>
    <br></br>

    <label>RoomShortCode</label>
    <label style={{marginLeft:"80px"}}>{RoomShortCode}</label>
    <br></br>

    <label>BedType</label>
    <label style={{marginLeft:"130px"}}>{BedType}</label>
    <br></br>

    
    <label>NumberOfMaximumPersons</label>
    <label style={{marginLeft:"8px"}}>{NumberOfMaximumPersons}</label>
    <br></br>

    <label>Description</label>
    <label style={{marginLeft:"116px"}}>{Description}</label>
    <br></br>

</dl>

<dl className="colm2">


    <label>ExtraBed</label>
    <label style={{marginLeft:"134px"}}>{ExtraBed}</label>
    <br></br>

    <label>CleanningStatus</label>
    <label style={{marginLeft:"89px"}}>{CleanningStatus}</label>
    <br></br>

    <label>BasePrice</label>
    <label style={{marginLeft:"130px"}}>{BasePrice}</label>
    <br></br>

    <label>AdditionalPersonPrice</label>
    <label style={{marginLeft:"40px"}}>{AdditionalPersonPrice}</label>
    <br></br>

    <label>ExtraBedPrice</label>
    <label style={{marginLeft:"90px"}}>{ExtraBedPrice}</label>
    <br></br>

    </dl>

    <dl className="colm2">
  

    <label>Discount</label>
    <label style={{marginLeft:"125px"}}>{Discount}</label>
    <br></br>

    <label>TotalBasePrice</label>
    <label style={{marginLeft:"90px"}}>{TotalBasePrice}</label>
    <br></br>



    
</dl>


</div>
)
}
}
