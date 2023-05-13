import HomeAbout from "../../Components/HomeCompo/HomeAbout/HomeAbout";
import HomeBanner from "../../Components/HomeCompo/HomeBanner/HomeBanner";
import HomeServices from "../../Components/HomeCompo/HomeServices/HomeServices";


const Home = () => {
    return (
        <div>
            <h1 className='p-4 text-white bg-indigo-500 rounded-lg'>Home</h1>

            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;