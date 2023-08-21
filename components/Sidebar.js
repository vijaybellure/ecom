import style from "./Sidebar.module.css";
import { useState } from "react";
import Image from "next/image";
import image1 from "../public/images/iphone 13 pro max.png";
import image2 from "../public/images/realme8.webp";
import image3 from "../public/images/onplus 9.png";
import image4 from "../public/images/redminote6.png";
import image5 from "../public/images/Apple-iPhone-11-PNG-Pic.png";
import { useRouter } from "next/router";
function Sidebar({ data }) {
  const [isOpen, setIsOpen] = useState(true);
  const [content, setContent] = useState("");
  const menuItems = [
    "Featured Item",
    "Best Seller",
    "Summer Discount",
    "Premium Product",
    "Gift Idea",
  ];
  const router = useRouter();
  const handleMenuItemClick = (item) => {
    setIsOpen(false);
    data.map((bar,index) => {
      setContent(bar[item]);
    });
  };
  return (
    <>
      <ul className={style.ul}>
        <li className={style.li}>
          <div className={`${style.sidebar} ${style.open}`}>
            <ul className={style.sidebarmenu}>
              {menuItems.map((item, index) => (
              
                  <li key={item.id} onClick={() => handleMenuItemClick(item)}>
                    {item}{" "}
                  </li>
              ))}
            </ul>
          </div>
        </li>
        <li className={style.li}>
          {content && (
            <ul className={style.cont}>
              <li className={style.imli}>
                <Image
                  onClick={() => router.push(`/products/${content.id}`)}
                  className={style.slim}
                  src={content.imageSrc}
                  width={200}
                  height={260}
                />
              </li>
              <li className={style.tsc}>
                <h1 className={style.title}>{content["title"]}</h1>
                <p className={style.summary}>{content["summary"]}</p>
                <button
                  onClick={() => router.push(`/products/${content.id}`)}
                  className={style.btn}
                >
                  Read More
                </button>
              </li>
            </ul>
          )}
          {isOpen && (
            <ul className={style.ulm}>
              <li>
                <Image
                  onClick={() => router.push(`/products/15`)}
                  className={style.img}
                  src={image1}
                  width={170}
                  height={260}
                />
              </li>
              <li>
                <Image
                  onClick={() => router.push(`/products/16`)}
                  className={style.img}
                  src={image2}
                  width={150}
                  height={210}
                />
              </li>
              <li>
                <Image
                  onClick={() => router.push(`/products/17`)}
                  className={style.img}
                  src={image3}
                  width={170}
                  height={260}
                />
              </li>
              <li>
                <Image
                  onClick={() => router.push(`/products/18`)}
                  className={style.img}
                  src={image4}
                  width={150}
                  height={210}
                />
              </li>
              <li>
                <Image
                  onClick={() => router.push(`/products/19`)}
                  className={style.img}
                  src={image5}
                  width={170}
                  height={260}
                />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
