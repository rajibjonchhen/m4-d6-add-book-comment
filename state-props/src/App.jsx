
import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import scifiBooks from "../src/scifi.json"
import MyWarning from './component/WarningSign';
import MyBadges from './component/MyBadges';
import BookList from './component/BookList';
import SingleBook from './component/SingleBook';
import CommentList from './component/CommentList';
import AddComment from './component/AddComent';

class App extends Component {
  state = {
    asin:'',
    showComment:false
  }

  
  changeBookAsin = (newAsin,condition) =>{
    
      this.setState({asin:newAsin})
      this.setState({showComment:true})
    
  }
  render(){
    
    return (
      
      <div className="App">
      {/* <MyWarning warning="This Book is on High Demand" color="info"/> */}
      {/* <MyBadges Mytext="Buy The Latest Book"  color="danger" /> */}
     <Container fluid>
       <Row>
         <Col xs={12} sm={8} md={8} lg={this.state.showComment?95:12}>
            <BookList books={scifiBooks} changeBookAsin = {this.changeBookAsin} />
            {/* <SingleBook className="singlBook" changeBookAsin = {this.changeBookAsin} book={scifiBooks[0]}/> */}
         </Col>

         <Col className="pt-5 text-center bg-dark" xs={12} sm={4} md={4} lg={3} style={{display:this.state.showComment? 'block':'none',position:'fixed', right:'0', height:'100vh'}}>
               
                {
                  scifiBooks.filter(book=>book.asin.includes(this.state.asin)).map((book)=>(
                    <div key={book.asin} style={{maxWidth:'100px',width:'100%',display:'flex', fontSize:'18px',color:'white'}}>
                    <img className="w-100"src={book.img}/>
                  
                      <span className="w-100" style={{width:'200px'}}>{book.title} </span>
                    
                </div>))
            }
            <AddComment asin = {this.state.asin}/>
            <CommentList asin={this.state.asin}/>
         </Col>
       </Row>
       </Container> 
      
    </div>
  );
}
}

export default App;
