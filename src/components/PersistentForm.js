import React from "react";

class PersistentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { inputValue: localStorage.getItem('inputValue') };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    render() {
      const { inputValue } = this.state;
      return (
        <div>
          <div className="main">
            <h3>
              Click the button to save to storage
            </h3>
            <div id="root"></div>
          </div>
          <input type="text" value={inputValue} 
            onChange={this.handleChange}/> 
          <button onClick={this.handleClick}>Save to storage</button>
        </div>
      )
    }
  
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
  
    handleClick() {
      localStorage.setItem('inputValue', this.state.inputValue);
    }
  }
  
 export default PersistentForm;