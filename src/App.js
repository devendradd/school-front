import React, { Component } from 'react';
import Sum from './components/Sum/sum';
import CreateStudent from './components/CreateStudent/CreateStudent';
import CreateKlass from './components/CreateKlass/CreateKlass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Class Front</h1>
        <CreateStudent host='http://localhost:9000'/>
        <CreateKlass host='http://localhost:9000'/>
      </div>
    );
  }
}


{/*<Box text="sara@gmail.com" id="3" css="selected" click={fn1}  >
<Box text="chemistry" id="5" css="empty" click={fn2}  >*/}

/*var students = [
  id:3, text:"bob", css:"selected", click:{fn},
  id:4, text:"sam", css:"empty", click:{fn}
]
<List header="Students" items={students}>*/

export default App;
