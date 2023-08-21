import { useRouter } from "next/router";
import style from "./SearchResultItem.module.css";
function SearchResultItem({ item }) {
  const router = useRouter();
  const handleItemClick = (item) => {
    router.push(`/products/${item.id}`);
  };

  return (
    <div onClick={() => handleItemClick(item)} className={style.search}>
      {item && (
        <>
          <li className={style.items}>
            <h2 className={style.searchtitle}>{item.title}</h2>
          </li>
        </>
      )}
    </div>
  );
}

export default SearchResultItem;
