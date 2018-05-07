import { h, Component } from "preact"
import style from "./style.css"

export default class ChurchPlant extends Component {
  state = { church: "", success: false }

  handleLocation = e => {
    this.setState({ church: e.target.value })
  }

  handleSubmit = () => {
    fetch("http://localhost:4000/api", {
      body: JSON.stringify(this.state),
      mode: "no-cors",
      method: "POST"
    }).then(resp => this.setState({ success: true }))

    setTimeout(() => this.setState({ success: false }), 1000)
  }

  render() {
    return (
      <div class="formContainer">
        <div className="formBody">
          <h2>New Church</h2>
          <div class="formGroup">
            <div class="formHeader"> Church Location: </div>
            <input onChange={this.handleLocation} />
          </div>
          <button class="formSubmit" onClick={() => this.handleSubmit()}>
            Submit
          </button>
          <span> {this.state.success ? "Success!" : null} </span>
        </div>
      </div>
    )
  }
}
