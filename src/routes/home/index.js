import { h, Component } from "preact"
import Attendance from "../../components/attendance/attendance"
import Giving from "../../components/giving/giving"
import ChurchPlant from "../../components/churchPlants/churchPlants"
import SmallGroup from "../../components/smallGroups/smallGroups"
import Believers from "../../components/followers/followers"
import style from "./style"

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <Attendance />
        <ChurchPlant />
        <SmallGroup />
        <Believers />
      </div>
    )
  }
}
