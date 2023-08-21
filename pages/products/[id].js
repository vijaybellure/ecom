import { useRouter } from 'next/router';
import data from '../../public/data.json';
import style from '../../styles/ItemDetail.module.css';
import Cart, { CartItem } from '../cart';
import { useState } from 'react';


function ItemDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [cartitems, setCartItems] = useState([]);
    const carouselItem = findItemById(data.carouselItems, id);
    const sidebarItem = findSidebarItemById(data.SideBar, id);
    const productItem = findItemById(data.Products, id);
    const whatsnewItem = findItemById(data.whatsnew, id);
    
    function findItemById(section, id) {
        return section.find(item => item.id === Number(id));
    }

    function findSidebarItemById(sidebar, id) {
        for (const sectionKey in sidebar) {
            if (sidebar.hasOwnProperty(sectionKey)) {
                const section = sidebar[sectionKey];
                for (const itemKey in section) {
                    if (section.hasOwnProperty(itemKey) && section[itemKey].id === Number(id)) {
                        return section[itemKey];
                    }
                }
            }
        }
        return null;
    }

    function handleCart(item) {
        if (item) {
            setCartItems([item]);
            
            router.push('/cart');
            CartItem.push(item)
        } else {
            console.error('Item data is undefined.');
        }
    }

    return (
        <>
            {Number(id) < 22 && Number(id) > 0 ? (
                <div className={style.main}>
                    <h1 className={style.headtext}>Item Details</h1>

                    {carouselItem && (
                        <ul className={style.ul}>
                            <li className={style.imageHolder}>
                                <img
                                    className={style.carouselImage}
                                    src={carouselItem.imageSrc}
                                    alt={carouselItem.imageAlt}
                                />
                            </li>
                            <li className={style.carouselcover}>
                                <h2 className={style.carouselTitle}>{carouselItem.title}</h2>
                                <p className={style.carouseldescription}>{carouselItem.summary}</p>
                            </li>
                            <button onClick={() => handleCart(carouselItem)} className={style.ibtn}>
                                Add To Cart
                            </button>
                            <button onClick={()=>handleCart(carouselItem)} className={style.bbtn}>Buy now</button>
                        </ul>
                    )}

                    {sidebarItem && (
                        <ul className={style.ul}>
                            <li className={style.imageHolder}>
                                <img
                                    className={style.sidebarImage}
                                    src={sidebarItem.imageSrc}
                                    alt={sidebarItem.title}
                                />
                            </li>
                            <li className={style.sidebarcover}>
                                <h2 className={style.sidebartitle}>{sidebarItem.title}</h2>
                                <p className={style.sidbardescription}>{sidebarItem.summary}</p>
                            </li>
                            <button onClick={() => handleCart(sidebarItem)} className={style.ibtn}>
                                Add To Cart
                            </button>
                            <button onClick={()=>handleCart(sidebarItem)} className={style.bbtn}>Buy now</button>
                        </ul>
                    )}

                    {productItem && (
                        <ul className={style.ul}>
                            <li className={style.imageHolder}>
                                <img
                                    className={style.productImage}
                                    src={productItem.imageSrc}
                                    alt={productItem.title}
                                />
                            </li>
                            <li className={style.productscover}>
                                <h2 className={style.productstitle}>{productItem.title}</h2>
                                <p className={style.productsummary}>{productItem.summary}</p>
                                <p className={style.productdescription}>Price: {productItem.price}</p>
                            </li>
                            <button onClick={() => handleCart(productItem)} className={style.ibtn}>
                                Add To Cart
                            </button>
                            <button onClick={()=>handleCart(productItem)}  className={style.bbtn}>Buy now</button>
                        </ul>
                    )}

                    {whatsnewItem && (
                        <ul className={style.ul}>
                            <li className={style.imageHolder}>
                                <img
                                    className={style.newImage}
                                    src={whatsnewItem.imageSrc}
                                    alt={whatsnewItem.Title}
                                />
                            </li>
                            <li className={style.newcover}>
                                <h2 className={style.newTitle}>{whatsnewItem.Title}</h2>
                                <p className={style.newsummary}>{whatsnewItem.summary}</p>
                            </li>
                            <button onClick={() => handleCart(whatsnewItem)} className={style.ibtn}>
                                Add To Cart
                            </button>
                            <button onClick={()=>handleCart(whatsnewItem)} className={style.bbtn}>Buy now</button>
                        </ul>
                    )}
                </div>
            ) : (
                <div className={style.fallback}>This Page is not available</div>
            )}

            <div className={style.none}>
                <Cart item={cartitems} />
            </div>
            
        </>
    );
}

export default ItemDetails;
