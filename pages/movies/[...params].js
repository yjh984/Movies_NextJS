// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../Components/Seo";
// import { useEffect } from "react/cjs/react.development";


export default function Detail({params}){
    // const router = useRouter();
    const [title,id]=params || [];
    
    const [picks,setPicks] = useState();
    useEffect(()=>{
        (async()=>{
            const data = await (
                await fetch(`/api/movies/${id}`)).json();
            setPicks(data);
            // console.log(data.vote_average);
        })();
    },[]);


    return (
        <div >
        <div className="container">
            <Seo title={title}/>
            <h4>{title}
                {!picks&&'loading....'}
                {picks&&<div className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500${picks.poster_path}`} />
                </div>}
                {/* {picks?.map((movie)=>(
                    <div key={movie.id}>
                        <h4>{movie.original_title}</h4>
                    </div>
                ))} */}
            </h4>
            <div className="review">
                {picks&& picks.overview}
            </div>
        </div>
        <div className="etc">
            {picks&&<div>
                <div>
                . Genres : {picks.genres.map((genre)=>genre.name+', ') }
                </div><div>
                . Rate : {picks.vote_average}, Language : {picks.original_language}, Release Date : {picks.release_date}
                </div><div>
                . Homepage : <a href={picks.homepage}>{picks.homepage}</a>
                </div>
            </div>}
        </div>

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px, 0px, 20px, 20px;
                    // padding:20px;
                    gap: 20px;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .review{
                    padding-top: 40px;
                    // gap: 20px;
                    font-size: 15px;
                    text-align: left;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps({params:{params}}){
    // const {results} = await(
    //     await fetch(`http://localhost:3000/api/movies`)).json();
    // console.log("2"+results);
    return{
        props:{
            params,
            // results,
        }
    };
}