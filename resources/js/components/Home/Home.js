import React, { useState } from "react";
import subscreibe from "../../images/Rectangle 356.png";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Cards from "../Cards/Cards";
import ShowMore from "../ShowMore/ShowMore";
import PaginatedItems from "../Pagination";
function Home() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handelSubmit = () => {};
    const Nav2 = () => {
        return (
            <ul>
                <li>
                    <a href="#">PRICE LOW TO HIGH</a>
                    <AiFillCaretDown color="#000000" />
                </li>
                <li>
                    <a href="#">SHOWN COLOR</a>
                    <AiFillCaretDown color="#000000" />
                </li>
                <li>
                    <a href="#">FABRIC</a>

                    <AiFillCaretDown color="#000000" />
                </li>
                <li name="SLEEVE">
                    <a href="#">SLEEVE</a>
                    <AiFillCaretDown color="#000000" />
                </li>
            </ul>
        );
    };
    return (
        <div className="home">
            <div className="links">
                <div className="menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            className="scale-up-center"
                            color="#000000"
                            size={27}
                            onClick={() => {
                                setToggleMenu((prev) => !prev);
                            }}
                        />
                    ) : (
                        <RiMenu3Line
                            className="scale-up-center"
                            color="#000000"
                            size={27}
                            onClick={() => {
                                setToggleMenu((prev) => !prev);
                            }}
                        />
                    )}
                    {toggleMenu && (
                        <div className="nav2 scale-up-center">
                            <Nav2 />
                        </div>
                    )}
                </div>
                <Nav2 />
                <div className="popular">
                    <p>MOST POPULAR</p>
                    <AiFillCaretDown color="#000000" />
                </div>
            </div>
            <Cards />
            <ShowMore name="$35 OFF OVER 280$" />
            <div className="subscribe">
                <img src={subscreibe} />
                <div className="info">
                    <h1>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h1>
                    <form onClick={handelSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
