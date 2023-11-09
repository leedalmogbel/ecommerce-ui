import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
    </div>
  )
}

export default Home;