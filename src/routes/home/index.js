import { h, Component } from "preact"
import ChurchService from "../../components/churchService/churchService"
import ChurchPlant from "../../components/churchPlants/churchPlants"
import SmallGroup from "../../components/smallGroups/smallGroups"
import Believers from "../../components/followers/followers"
import style from "./style"

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <ChurchService />
        <ChurchPlant />
        <SmallGroup />
        <Believers />
      </div>
    )
  }
}
