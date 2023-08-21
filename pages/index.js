// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/carousel'
import Sidebar from '@/components/Sidebar'
import Products from '@/components/Products'


export default function Home({data}) {
  return (
    <div className={styles.index}>
      <Slider data={data}/>
      <Sidebar data={data["SideBar"]}/>
      <Products data={data["Products"]}/>
    </div>
  )
}
export async function getStaticProps(){
  const res= await fetch("http://localhost:3000/data.json")
  const data= await res.json();
  return{
    props:{
      data:data
    }
  }
}
