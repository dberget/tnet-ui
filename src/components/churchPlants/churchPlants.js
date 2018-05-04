import { h, Component } from "preact"
import style from "./style.css"

export default class ChurchPlant extends Component {
  state = { location: "" }

  handleLocation = e => {
    this.setState({ date: e.target.value })
  }
  render() {
    return (
      <div className={style.container}>
        <div className={style.formBody}>
          <h2>New Church</h2>
          <div> Church Location: </div>
          <input onChange={this.handleLocation} />
        </div>
      </div>
    )
  }
}
