import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}

export default Home;