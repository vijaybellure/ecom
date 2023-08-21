import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./carousel.module.css";
import { useRouter } from "next/router";

function Slider({ data }) {
  const router = useRouter();
  return (
    <div className={style.c}>
      <Carousel>
        {data["carouselItems"].map((item,index) => (
          <div key={index} className={style.scarousel}>
            <ul className={style.cul}>
              
              <li>
                <Image
                  className={style.img1}
                  src={item.imageSrc}
                  alt={item.title}
                  width={500}
                  height={400}
                />
              </li>
              <li className={style.content}>
                <h2>{item.title}</h2>
                <span>{item.summary}</span>
                <button
                  className={style.btnbuy}
                  onClick={() => router.push(`/products/${item.id}`)}
                >
                  buy now
                </button>
              </li>
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
