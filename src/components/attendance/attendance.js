import { h, Component } from "preact"
import style from "./style.css"

export default class Attendance extends Component {
  state = { date: "", attendance: 0 }

  handleDate = e => {
    this.setState({ date: e.target.value })
  }

  handleAttendance = e => {
    this.setState({ attendance: e.target.value })
  }

  handleGiving = e => {
    this.setState({ offering: e.target.value })
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
          <h2>Record Church Service</h2>
          <div class="formHeader"> Church Service Date: </div>
          <input onChange={this.handleDate} type="date" />
          <div class="formGroup">
            <div class="formHeader"> Attendance: </div>
            <input onChange={this.handleAttendance} type="number" />
            <div class="formGroup">
              <div class="formHeader"> Offering Amount: </div>
              <input onChange={this.handleGiving} type="number" />
            </div>
            <button onClick={() => this.handleSubmit(this.state)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
