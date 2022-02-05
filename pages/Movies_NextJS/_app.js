// import NavBar from "../Components/NavBar";
import st from "../../styles/globals.css";  //can be imported in _app.js.
import Layout from "../../Components/Layout";

export default function App({Component, pageProps}){
    return(
        <>
            {/* <NavBar/>
            <Component{...pageProps}/> */}
            {/* <Component/> */}
            {/* {console.log(Component)} {console.log(pageProps)} */}
            <Layout>
                <Component {...pageProps}/>
            </Layout>
            {/* <Component {...pageProps}/> */}
            
            <style jsx global>{`
                a {
                    color : blue;
                }
            `}</style>
        </>
    )
}