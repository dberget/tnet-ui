import { h, Component } from "preact"

export default class ChurchPlant extends Component {
  state = { location: "" }

  handleLocation = e => {
    this.setState({ date: e.target.value })
  }
  render() {
    return (
      <div>
        <h2>New Church</h2>
        <div> Church Location: </div>
        <input onChange={this.handleLocation} />
      </div>
    )
  }
}
