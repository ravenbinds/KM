import SearchIcon from '@material-ui/icons/Search';
import Post from "./Post/index";
import Divider from '@material-ui/core/Divider';
import logo from "../Logo.svg"


const Contents = () => {
    return (
        <div className="Contents">
            <img src={logo} alt="KM" />
            <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />        </div>
    )
}

export default Contents
