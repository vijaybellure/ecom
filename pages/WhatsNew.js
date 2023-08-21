
import Image from 'next/image';
import style from '../styles/Whatsnew.module.css'
import { useRouter } from 'next/router';
function WhatsNew({data}){
    const router= useRouter()
    return(
        <>
        {data.map(item=>(
            <>

        <div onClick={()=>router.push(`/products/${item.id}`)} className={style.whatsnew}>
            <ul className={style.wnul}>
                <li className={`${style.wnli} ${"center"}`}>
                    <h1 className={style.h1}>
                        {item.title}
                        </h1> 
                </li>
                <li className={style.wnli}>
            <Image className={style.wnimg} src={item.imageSrc} width={350} height={400}/>
                </li>
            </ul>
                <span className={`${style.wnspn} ${"center"}`}> {item.summary}
</span>
        </div>
            </>
        ))}
        </>

    )
}
export async function getStaticProps(){
    const res= await fetch("http://localhost:3000/data.json")
    const data= await res.json();
    return{
      props:{
        data:data["whatsnew"]
      }
    }
  }
export default  WhatsNew;