import Image from "next/image";
import style from "./Products.module.css";
import { useRouter } from "next/router";
import { Lazy } from "react-lazy";
function Products({ data }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={style.products}>
      {data.map((item, index) => (
        <>
          <div
            key={index}
            onClick={() => router.push(`/products/${item.id}`)}
            className={style.pprod}
          >
            <Image
              className={style.img}
              src={item["imageSrc"]}
              width={100}
              height={100}
            />
            <h3>{item.title}</h3>
            <h3 className={style.price}>$699.99</h3>
            <span className={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              nulla consequuntur ratione facilis facere deleniti laudantium
              neque nesciunt nihil ea fugiat, aliquid repellendus est cumque,
              repellat a laboriosam atque culpa.
              <h1 className={style.rating}>*****</h1>
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
export default Products;
