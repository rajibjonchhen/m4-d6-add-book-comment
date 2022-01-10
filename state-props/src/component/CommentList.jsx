import React, { Component } from 'react';
import CommentListItem from './CommentListItem'
import {ListGroup} from 'react-bootstrap'

class CommentList extends Component{
    state={
        comments:[]
    }
    componentDidMount =() =>{
        this.fetchComments() 
     }

    //  componentDidUpdate = (prevProps,prevState) => {
    //      if(prevProps.asin !== this.props.asin){
    //          this.fetchComments()
    //      }
    //  }
     fetchComments = async() => {
         try {
             let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
             method:"GET",   
             headers: { 
                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
             }
                 })

            let data = await response.json()
            this.setState({comments:data})  
            this.setState({isLoading:false})  
            
         } catch (error) {
             console.log(error)
         }
     }

    render(){
    return(
        <ListGroup as="ul">
          
            {this.state.comments && this.state.comments.map(comment => <CommentListItem comment={comment}/>)}
        </ListGroup>
    )
    }
}

export default CommentList