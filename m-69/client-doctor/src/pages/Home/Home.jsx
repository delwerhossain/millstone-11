import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeAbout from '../../Components/HomeAbout/HomeAbout';
import HomeServices from '../../Components/HomeServices/HomeServices';

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