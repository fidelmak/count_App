import React, {Component} from 'react'
import laptop from "./laptop.jpg"

const Counter ={
    fontSize:"30px",
    backgroundColor:"#000000",
    borderRadius:"20px",
    padding:"20px",
    width:"20rem"
}
const Button ={
    fontSize:"28px",
    padding:"10px",
    backgroundColor:"white",
    borderRadius:"20px",
    marginTop:"12px",
    borderColor:"white"
}




class LAPTOP extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            x:count
        }

    }
    takeSales(){
        this.setState({
            count:this.state.count + 1
        })
    }
    CancelSales(){ 
             this.setState({
                count:this.state.count - 1
            
                
      
                
            })

        
        
    }
    render(){
        if(this.x)
        return <>
        <img src={laptop} width={"100PX"} />
        <h1>Laptop Sales </h1>
        <h1 style={Counter}>{this.state.count}</h1>
        <button style={Button} onClick={()=>this.takeSales()}>Take Sales</button>
        <button style={Button} onClick={()=>this.CancelSales()}>Cancel Sales</button>
        </>
    }
}
export default LAPTOP