import { h, Component } from "preact"
import style from "./style.css"

export default class SmallGroup extends Component {
  state = { type: "" }

  handleGroupChange = e => {
    this.setState({ type: e.target.value })
  }
  render() {
    return (
      <div class="formContainer">
        <div class="formBody">
          <h2>New Small Group</h2>
          <div className={style.formHeader}> Group Type: </div>
          <select onChange={this.handleGroupChange}>
            <option>Come and See</option>
            <option>Follow Me</option>
            <option>Ongoing Accountabilty Group</option>
          </select>
        </div>
      </div>
    )
  }
}
