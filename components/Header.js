import style from "./Header.module.css";
import logo from "./png-transparent-computer-icons-tag-blog-html-element-tag-thumbnail.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import data from "../public/data.json";
import { L } from "./temp";
import { CartItem } from "@/pages/cart";
import SearchResultItem from "./SearchResultItem";
function Header() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = [];
    if (searchQuery !== "") {
      results.push(
        ...data.carouselItems.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query)
        )
      );
    }

    for (const sectionKey in data.SideBar[0]) {
      if (data.SideBar[0].hasOwnProperty(sectionKey)) {
        const section = data.SideBar[0][sectionKey];
        if (
          section.title.toLowerCase().includes(query) ||
          section.summary.toLowerCase().includes(query)
        ) {
          results.push(section);
        }
      }
    }
    if (searchQuery !== "") {
      results.push(
        ...data.Products.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query)
        )
      );
      results.push(
        ...data.whatsnew.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query)
        )
      );
    }

    setSearchResults(results);
  };
  function isActive(path) {
    return router.pathname === path;
  }
  function handleLogin(event) {
    event.preventDefault();

    const user = data.credentials.find(
      (item) => item[email] && item[email].pass === pass
    );
    if (user) {
      setLogin(true);
      setUsername(user[email].name);
      L.push(email);
      router.push("/MyAccount");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      <nav className={style.nav}>
        <div className={style.header1}>
          <div className={style.d1}>
            <h1>
              {" "}
              <Image
                src={logo}
                alt=""
                width={20}
                height={30}
                className={style.logo}
              />{" "}
              DCX-App Store
            </h1>
            <p>BootStrap Ecommerce Template</p>
          </div>
          {login ? (
            <div className={style.hname}>
              Hi <h3>{username}</h3>
            </div>
          ) : (
            <div className={style.d2}>
              <form>
                <label className={style.label} htmlFor="email">
                  Email
                </label>
                <input
                  className={style.input}
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={style.label} htmlFor="pass">
                  Password
                </label>
                <input
                  className={style.input}
                  type="password"
                  name="pass"
                  id="pass"
                  required
                  onChange={(e) => setPass(e.target.value)}
                />
                <button onClick={handleLogin} className={style.btn}>
                  Login
                </button>
              </form>
            </div>
          )}
        </div>
        <ul className={style.ulm}>
          <ul className={style.ul}>
            <Link className={isActive("/") ? "active" : ""} href="/">
              <li className={style.li}>Home</li>
            </Link>
            <Link
              className={isActive("/WhatsNew") ? "active" : ""}
              href="/WhatsNew"
            >
              <li className={style.li}>Whatsnew</li>
            </Link>
            <Link
              className={isActive("/Products") ? "active" : ""}
              href="/Products"
            >
              <li className={style.li}>Products</li>
            </Link>
            <Link
              className={isActive("/MyAccount") ? "active" : ""}
              href="/MyAccount"
            >
              <li className={style.li}>My Account</li>
            </Link>
            <li className={style.li}>
              <form className={style.form}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>
            </li>
            <li>
              <Link href={"/cart"}>
                <svg
                  className={style.cicon}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <code>{CartItem.length}</code>
              </Link>
            </li>
          </ul>
        </ul>
        <ul>
          {searchQuery !== "" &&
            searchResults.map((item) => (
              <SearchResultItem key={item.id} item={item} />
            ))}
        </ul>
      </nav>
    </>
  );
}
export default Header;
