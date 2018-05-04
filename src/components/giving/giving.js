import { h, Component } from "preact"
import style from "./style.css"

export default class Giving extends Component {
  state = { date: "", attendance: 0 }

  handleDate = e => {
    this.setState({ date: e.target.value })
  }

  handleAttendance = e => {
    this.setState({ attendance: e.target.value })
  }

  render() {
    return (
      <div class="formContainer">
        <div class="formBody">
          <h2>Giving Form</h2>
          <div class="formGroup">
            <div class="formHeader"> Church Service Date: </div>
            <input onChange={this.handleDate} type="date" />
          </div>
          <div class="formGroup">
            <div class="formHeader"> Giving Amount: </div>
            <input onChange={this.handleAttendance} type="number" />
          </div>
        </div>
      </div>
    )
  }
}
