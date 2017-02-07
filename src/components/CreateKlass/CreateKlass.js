import React from 'react';
import axios from 'axios';
import './CreateKlass.css';

export default class CreateKlass extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 'SCIENCE'};
    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  create(e){
      e.preventDefault();
      this.setState({error: null});
      const name = this.courseName.value;
      const semester = this.semisterDate.value;
      const credits = this.credits.value;
      const department = this.state.value;
      const fee = this.fees.value;

      //validations
      if(name.length==0){
        this.setState({error: "klass fields or field are too short"});
        return;
      }
      const url = this.props.host + '/klasses';
      const payload = {name, semester, credits, department, fee};
      axios.post(url, payload)
      .then(rsp => {
        const klassData = rsp.data;
        console.log('klass :', klassData);
        this.props.created(klassData); // this is the function passed in the props
      }).catch(e => this.setState({error: e.message}));
  }

  render(){
    return (
      <div className="create-klass">
        <h3>Create Klass</h3>
        <div className={this.state.error ? "error" : ""}>{this.state.error}</div>
        <form>
          <div className="form-group">
            <label>Course Name</label>
            <input placeholder="Enter Course Name" className="form-control" ref={n => this.courseName = n} type="text" />
            <label>Semester Date</label>
            <input placeholder="Enter semester date (dd/mm/yyyy)" className="form-control" ref={n => this.semisterDate = n} type="date" />
            <label>Credits</label>
            <input placeholder="Enter Credits" className="form-control" ref={n => this.credits = n} type="number" />
            <br/>
            <label>Department</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="SCIENCE">Science</option>
              <option value="ENGINEERING">Engineering</option>
              <option value="LITERATURE">Literature</option>
              <option value="PHILOSOPHY">Philosophy</option>
            </select>
            <br/>
            <label>Fees</label>
            <input placeholder="Enter Fees" className="form-control" ref={n => this.fees = n} type="number" />
          </div>
          <button className="btn btn-danger btn-small" onClick={this.create}>Create</button>
        </form>
      </div>
    );
  }
}
