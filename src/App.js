import React, { Component } from 'react';
import Sum from './components/Sum/sum';
import CreateStudent from './components/CreateStudent/CreateStudent';
import CreateKlass from './components/CreateKlass/CreateKlass';
import List from './components/List/List';

class App extends Component {

  constructor(){
    super();
    this.state = {data : []};
    this.bindKlassDataParent = this.bindKlassDataParent.bind(this);
  }

  bindKlassDataParent(klassData){
    this.setState({data: klassData});
    console.log("klassData is: ",klassData);
    console.log("state data is:", this.state.data);
  }

  render() {
    return (
      <div className="app">
        <div className="container-fluid">
          <div className="row">
            <h1>Class Front</h1>
            <div className="col-lg-6">
              <CreateStudent host='http://localhost:9000'/>
            </div>
            <div className="col-lg-6">
              <CreateKlass host='http://localhost:9000' created={this.bindKlassDataParent}/>
            </div>
          </div>
          <List />
        </div>
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
