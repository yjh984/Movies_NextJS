import { useRouter } from "next/router";
import Link from 'next/link';

export default function NavBar(){
    const router = useRouter();
    return(
        <nav>
            <img src='/logo.png'/>
            <div>
                <Link href='/Movies_NextJS/'>
                    <a className={router.pathname==='/Movies_NextJS/'? 'active':''}>Home</a>
                </Link>
                {" "}
                <Link href='/Movies_NextJS/about'>
                    <a className={router.pathname==='/Movies_NextJS/about'? 'active':''}>About</a>
                </Link>
            </div>

            <style jsx>{`
                nav{
                    max-width: 520px;
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img{
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a{
                    font-weight: 600;
                    font-size: 18px;
                }
                .active{
                    color: tomato;
                }
                nav div{
                    display:flex;
                    gap:10px;
                }
            `}</style>
        </nav>
    )
}