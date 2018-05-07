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
  handleSubmit = () => {
    fetch("http://localhost:4000/api", {
      body: JSON.stringify(this.state),
      method: "POST"
    })
  }
  render() {
    const newBelievers = this.state.newBelievers
    return (
      <div class="formContainer">
        <div class="formBody">
          <h2> New Believers </h2>
          <div class="formHeader">Record New Believers: {newBelievers}</div>
          <div className={style.buttonGroup}>
            <button
              className={style.counterButton}
              onClick={this.handleNewBeliever}
            >
              +
            </button>
            <button
              className={style.counterButton}
              disabled={!newBelievers}
              onClick={this.handleLessBeliever}
            >
              -
            </button>
          </div>
          <button
            class="formSubmit"
            disabled={!newBelievers}
            onClick={() => this.handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}
