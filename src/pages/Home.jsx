import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <Outlet/>

            {/* this react router component will help. when route is been changed  the scroll will become zero from top*/}
            <ScrollRestoration onBeforeRestore={() => window.scrollTo(0, 0)}/>
        </>
    );
};

export default Home;
