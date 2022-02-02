import { useRouter } from "next/router";
import Seo from "../../Components/Seo";

export default function detail({params}){
    const router = useRouter();
    const [title,id]=params || [];
    // console.log(router);
    return (
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({params:{params}}){
    return{
        props:{
            params,
        }
    };
}