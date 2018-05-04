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

  render() {
    return (
      <div>
        <h2>Attendance Form</h2>
        <div> Church Service Date: </div>
        <input onChange={this.handleDate} type="date" />
        <div> Attendance: </div>
        <input onChange={this.handleAttendance} type="number" />
      </div>
    )
  }
}
