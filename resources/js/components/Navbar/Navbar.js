import React, { Component, useState } from "react";
import america from "../../images/america-flag-ic.png";
import AS from "../../images/307307350_53880.png";
import { useLocation, Link } from "react-router-dom";

import {
    AiFillCaretDown,
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineHeart,
} from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
export default function Navbar({ signIn }) {
    const Info = () => {
        return (
            <div className="info">
                <ul>
                    <li>
                        <a href="#">PROM DRESSES</a>
                    </li>
                    <li>
                        <a href="#">WEDDING DRESSES</a>
                    </li>
                    <li>
                        <a href="#">WEDDING PARTY</a>
                    </li>
                    <li>
                        <a href="#">SPECIAL OCCASION DRESSES</a>
                    </li>
                </ul>
            </div>
        );
    };
    const Icons = () => {
        return (
            <div className="icons">
                <div className="search">
                    <AiOutlineSearch
                        onClick={() => {
                            setSearch((prev) => !prev);
                        }}
                    />
                    {search && (
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            className="scale-up-center"
                        />
                    )}
                </div>
                <Link to="/auth">
                    <AiOutlineUser
                        onClick={() => {
                            setToggleMenu(false);
                        }}
                    />
                </Link>
                <div className="icon-container">
                    <Link to="/cart">
                        <AiOutlineShoppingCart
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        />
                    </Link>
                    <div className="amount-counter">
                        <p>0</p>
                    </div>
                </div>
                <div className="icon-container">
                    <AiOutlineHeart />
                    <div className="amount-counter">
                        <p>0</p>
                    </div>
                </div>
            </div>
        );
    };
    const LangMony = () => {
        return (
            <div className="lg-my">
                <div
                    className="lang"
                    onClick={() => {
                        setLang((prev) => !prev);
                    }}
                >
                    <img src={america} alt="america" />
                    <p>{!lang ? "Arabic" : "English"}</p>
                </div>
                <div className="dol">
                    <p>USD$</p>
                    <AiFillCaretDown
                        style={{ margin: "2px" }}
                        color="#000000"
                    />
                </div>
            </div>
        );
    };
    const [lang, setLang] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const location = useLocation();
    const register = () => {
        setToggleMenu((prev) => !prev);
    };
    return (
        <div className="nav">
            <div className="container">
                <LangMony />
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
                        <div className="nav__menu_container scale-up-center">
                            <div className="links_menu ">
                                <Info />
                                <Icons />
                            </div>
                        </div>
                    )}
                </div>
                <div className="image">
                    <img src={AS} />
                </div>
                <Icons />
            </div>
            <Info />
            <div className="res-en">
                <LangMony />
            </div>
            <h2 className="title">
                {location.pathname === "/"
                    ? "WEDDING DRESSES 2022"
                    : location.pathname === "/auth"
                    ? signIn
                    : location.pathname === "/acount"
                    ? "Account"
                    : location.pathname === "/cart"
                    ? "CART"
                    : ""}
            </h2>
        </div>
    );
}
