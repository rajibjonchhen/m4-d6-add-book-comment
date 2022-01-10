
import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import scifiBooks from "../src/scifi.json"
import MyWarning from './component/WarningSign';
import MyBadges from './component/MyBadges';
import BookList from './component/BookList';
import SingleBook from './component/SingleBook';



function App() {
  return (
    <div className="App">
      
      <MyWarning warning="This Book is on High Demand" color="info"/>
      <MyBadges Mytext="Buy The Latest Book"  color="danger" />
      
      <BookList books={scifiBooks}/>
      <SingleBook className="singlBook" book={scifiBooks[0]}/>
      
    </div>
  );
}

export default App;
