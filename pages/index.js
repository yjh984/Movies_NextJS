// changing a "loading..." to server side rendering
// import NavBar from "../Components/NavBar";
// import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../Components/Seo";
import { useEffect, useState } from "react";
// import Layout from "../../Components/Layout";
// import NavBar from "../Components/NavBar";



export default function Home(){
    const [movies,setMovies] = useState();
    useEffect(()=>{
        (async()=>{
            const {results} = await (
                // await fetch('/api/movies')).json();
                await fetch('https://api.themoviedb.org/3/movie/popular?api_key=86a83c6c1fef5751afd154d66d80258e')).json();
            setMovies(results);
            console.log(results);
        })();
    },[]);

// export default function Home({results}){
    const router = useRouter();
    const onClick = (id, title)=>{
        // router.push({
        //     pathname: `/movies/${id}`,
        //     query:{
        //         title,
        //     },
        // },
        // `/movies/${id}`
        // );
        // router.push(process.env.BACKEND_URL+`/movies/${title}/${id}`);
        router.push(`/movies/${title}/${id}`);
        // router.push(`/movies/${id}`);
    };
    return(
        <>
        <div className="container">
            <Seo title='Home'/>

            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie)=>(
            // {results?.map((movie)=>( 
                // <div className="movie" key={movie.id}>
                <div onClick={()=>onClick(movie.id, movie.original_title)}
                    className="movie"
                    key={movie.id}
                >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    {/* <h4>{movie.original_title}</h4> */}
                    <h4>
                        {/* <Link href={{
                            pathname: `/movies/${movie.id}`,
                            query: {
                                title: movie.original_title,
                            },
                            }}
                            as={`/movies/${movie.id}`} >
                            <a>{movie.original_title}</a>
                        </Link> */}
                        {/* <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                            <a>{movie.original_title}</a>
                        </Link> */}
                        {movie.original_title}
                        <span className="rate"> (Rate:{movie.vote_average})</span>
                    </h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie{
                    cursor : pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
                .movie span{
                    font-size: 14px;
                    font-weight: normal;
                }
            `}</style>
        </div>
        </>
    );
}

// export async function getServerSideProps(){
//     const {results} = await(
//         await fetch(`http://localhost:3000/api/movies`)).json();
//     return{
//         props:{results},
//     };
// }