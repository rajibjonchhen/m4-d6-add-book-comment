
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


class App extends Component {
  state = {
    asin:''
  }


  changeBookAsin = (newAsin) =>{
    this.setState({asin:newAsin})
  }
  render(){

    return (
      
      <div className="App">
      {/* <MyWarning warning="This Book is on High Demand" color="info"/> */}
      {/* <MyBadges Mytext="Buy The Latest Book"  color="danger" /> */}
     <Container>
       <Row>
         <Col xs={12} sm={8} md={8} lg={10}>
            <BookList books={scifiBooks}/>
            {/* <SingleBook className="singlBook" changeBookAsin = {this.ChangeBookAsin} book={scifiBooks[0]}/> */}
         </Col>

         <Col xs={12} sm={4} md={4} lg={2}>
            <CommentList asin={this.state.asin}/>
         </Col>
       </Row>
       </Container> 
      
    </div>
  );
}
}

export default App;
