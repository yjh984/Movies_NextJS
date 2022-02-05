import NavBar from "./NavBar";

export default function Layout({children}){
    return <>
        <NavBar/>
        <div>{children}</div>
        {/* <div>Layout~~</div> */}
    </>
}