import { h, Component } from "preact"
import style from "./style.css"

export default class SmallGroup extends Component {
  state = { type: "" }

  handleGroupChange = e => {
    this.setState({ type: e.target.value })
  }
  render() {
    return (
      <div className={style.container}>
        <div className={style.formBody}>
          <h2>New Small Group</h2>
          <div> Group Type: </div>
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
