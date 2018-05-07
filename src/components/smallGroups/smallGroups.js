import { h, Component } from "preact"
import style from "./style.css"

export default class SmallGroup extends Component {
  state = { type: "" }

  handleGroupChange = e => {
    this.setState({ type: e.target.value })
  }

  handleSubmit = value => {
    fetch("http://localhost:4000/api", {
      body: JSON.stringify(value),
      method: "POST"
    })
  }

  render() {
    return (
      <div class="formContainer">
        <div class="formBody">
          <h2>New Small Group</h2>
          <div class="formGroup">
            <div class="formHeader"> Group Type: </div>
            <select onChange={this.handleGroupChange}>
              <option value="Come and See">Come and See</option>
              <option value="Follow Me">Follow Me</option>
              <option value="Ongoing Accountabilty Group">
                Ongoing Accountabilty Group
              </option>
            </select>
          </div>
          <button
            class="formSubmit"
            onClick={() => this.handleSubmit(this.state)}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}
