import { h, Component } from "preact"
import style from "./style.css"

export default class Believers extends Component {
  state = { newBelievers: 0 }

  handleNewBeliever = () => {
    this.setState({ newBelievers: this.state.newBelievers + 1 })
  }
  handleLessBeliever = () => {
    this.setState({ newBelievers: this.state.newBelievers - 1 })
  }
  render() {
    return (
      <div class="formContainer">
        <div class="formBody">
          <div> Record New Believers: {this.state.newBelievers} </div>
          <button onClick={this.handleNewBeliever}> + </button>
          <button onClick={this.handleLessBeliever}> - </button>
        </div>
      </div>
    )
  }
}
