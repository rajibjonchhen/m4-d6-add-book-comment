import React from 'react';
import{Component} from "react"
import{Card, Button, Container, Row, Col, Spinner} from "react-bootstrap"
import AddComment from './AddComent';
import CommentList from './CommentList';


class SingleBook extends Component{
    state={
        selected:false,
        isLoading:true,
        asin:''
    }

 
    

    render(){
        return(
            (
               <Container key={this.props.book.asin}>
                   <Row className="d-flex justify-content-center">
                       <Col>
                       <Card onClick={()=>this.setState({selected: !this.state.selected})}
                        style={{border:this.state.selected? "5px solid red":"none", width:"15rem"}} className="text-center m-3">
                <Card.Img  variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <span>Category : {this.props.book.category.toUpperCase()}</span>
                    
                    </Card.Text>
                    <Button variant="primary" onClick={(e)=> this.setState({asin:this.props.book.asin})}>Comment </Button>
                </Card.Body>
            </Card>
                       <div style={{display:this.state.selected? "block":"none"}}>

                 <div style={{display:this.state.isLoading? "block":"none"}}>
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="dark" />
                </div>    
                       {this.state.asin && (<div><CommentList asin = {this.state.asin} />
                       <AddComment asin = {this.state.asin}/> </div>)}
                       </div>
                     
                       </Col>
                   </Row>
                   
               </Container>
            ))
        
    }



}

export default SingleBook