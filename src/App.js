import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {input: '', isSaved: false}

  changeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickSave = () => {
    this.setState({isSaved: true})
  }

  onClickEdit = () => {
    this.setState({isSaved: false})
  }

  render() {
    const {input, isSaved} = this.state
    return (
      <div className="app-container">
        <div className="app-content">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <p className="para">{input}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={input}
                onChange={this.changeInput}
              />
            )}
            {isSaved ? (
              <button
                type="button"
                className="edit-button"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="save-button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
