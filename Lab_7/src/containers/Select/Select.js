class Sample extends React.Component {
    
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        firstSelection: '',
        textInput: '',
      }
    }
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render() {
      return(
        <div>
          <select value={this.state.firstSelection} name='firstSelection' onChange={this.handleChange}>
            <option disabled value=''>Select an option</option>
            {
              ['option1', 'option2'].map((option, key) => {
                return (
                  <option value={option} key={key}>
                    {option}
                  </option>
                )
              })
            }
          </select>
  
          {
            // render textbox if this.state.firstSelection isn't an empty string anymore, thus meaning it was selected
            this.state.firstSelection.trim() &&
            (
              <input type="text" name='textInput' value={this.state.textInput} onChange={this.handleChange}/>
            )
          }
  
          {
            // render second select if this.state.textInput isn't an empty anymore, thus meaning an input was entered
            this.state.textInput.trim() &&
            (
              <select> ... </select>
            )
          }
        </div>
      )
    }
  }