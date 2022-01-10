import React from 'react';
import {Component} from "react"
import { Form,Col,Button, InputGroup} from 'react-bootstrap';


class  AddComment extends Component {
    state = { 
        comments:{
            comment : "",
            rate : "",
            elementId : this.props.asin
          },

          array:['1','2','3','4','5']
     }

     handleInput = (property,value) => {
        this.setState({ 
           comments:{
            ...this.state.comments,
            [property]: value,
            elementId : this.props.asin
           }
        })
        
        
     }

     handleSubmit = async(event) => {
        console.log('comment is ',this.state.comments)
        
        event.preventDefault()
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments" ,{
        method:"POST",   
        body: JSON.stringify(this.state.comments), 
        headers: {
            "Content-Type" : "application/JSON",  
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2NDE4Mjc1NzYsImV4cCI6MTY0MzAzNzE3Nn0.jwiNMWRpg2y2Ole2--KiD0VnvoMTRx8BcxRRPXSl84A"
        }
    })
    let data = await response.json()
    if(response.ok){
       this.setState({comments:{
            comment : "",
            rate : "",
            elementId : ""
          }})
    }
    } catch (error) {
        console.log(error)
    }
}



    render() { 
        console.log(this.state.elementId)
        return ( 
            <Form className="w-100 p-2 my-2 rounded-lg text-white" onSubmit={this.handleSubmit} style={{ backgroundColor:'grey'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a comment</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.comments.comment} 
                    onChange={e =>this.handleInput("comment",e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Rate the book</Form.Label>
                
                    {
                    this.state.array.map(i => (<span className="m-1">
                        <label for='rate'>{i} </label>
                        <input type='radio' name='rate' value={i} id='rate'  onChange={e =>this.handleInput("rate",e.target.value)} required></input>
                    </span>
                     ) )
                }
                </Form.Group>
                {/* <input type='radio' name='rate' value='2'></input>
                <input type='radio' name='rate' value='3'></input>
                <input type='radio' name='rate' value='4'></input>
                <input type='radio' name='rate' value='5'></input> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button type='submit' variant="primary" className="m-2"> Submit</Button>
                </Form.Group>
            </Form>
         );
    }
}
 
export default AddComment;