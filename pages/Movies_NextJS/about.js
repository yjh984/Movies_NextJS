// import NavBar from "../Components/NavBar";
import NavBar from "../../Components/NavBar";
import Seo from "../../Components/Seo";

export default function About(){
    return (
        <div>
            <NavBar/>
            <Seo title='About'/>
            <div> Made with NextJS..</div>
            <div>
                Movies data come from TMDB. </div>
                <style jsx>{`
                div {
                    max-width: 520px;
                    width: 100%;
                    margin: 0 auto;
                }
            `}</style>
        </div>
    )
}