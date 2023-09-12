import { Fragment, useState } from "react";
import { AiFillGift } from "react-icons/ai";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { FaBagShopping, FaBoxesStacked, FaHeart } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "./Sidebar.module.css";

// menu items
const menus = [
    { title: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },

    {
        title: "Customers",
        link: "#",
        icon: <AiFillGift />,
        subMenu: true,
        subMenuOpen: false,
        submenuItems: [
            { title: "Customer List", link: "#" },
            { title: "Customers", link: "#" },
        ],
    },
    {
        title: "Products",
        icon: <FaBoxesStacked />,
        link: "#",
        subMenu: true,
        subMenuOpen: false,
        submenuItems: [
            { title: "Products", link: "#" },
            { title: "Product Details", link: "#" },
            { title: "Upload Product", link: "#" },
        ],
    },
    { title: "Wishlist", link: "/", icon: <FaHeart /> },
    {
        title: "Orders",
        icon: <FaBagShopping />,
        link: "/orders",
        subMenu: true,
        subMenuOpen: false,
        submenuItems: [
            { title: "Order List", link: "/orders" },
            { title: "Order Details", link: "/orderDetails" },
        ],
    },
];

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [menuState, setMenuState] = useState(menus);

    //   toggle function for sub menu
    const toggleSubMenu = (projectTitle) => {
        setMenuState((prevState) => {
            // Find the project item with the matching title
            const updatedMenus = prevState.map((menu) => {
                if (menu.title === projectTitle && menu.subMenu) {
                    // Toggle the 'subMenuOpen' property
                    return {
                        ...menu,
                        subMenuOpen: !menu.subMenuOpen,
                    };
                }
                return menu;
            });

            return updatedMenus;
        });
    };

    return (
        <div className="flex">
            {/* For big screens */}
            <div
                className={`hidden md:block bg-white  h-screen p-5 pt-0 relative duration-300 ${open ? "w-72" : "w-20"
                    }`}
            >
                <BsArrowLeftShort
                    className={`bg-white text-slate-500 text-3xl rounded-full absolute -right-3 top-9 border border-slate-500 cursor-pointer ${!open && "rotate-180"
                        }`}
                    onClick={() => setOpen(!open)}
                />

                {/* for logo section */}
                <div className="inline-flex">
                    <h2
                        className={`${!open && "scale-0"
                            } text-slate-900 origin-left font-bold text-2xl`}
                    >
                        EnginnerHut
                    </h2>
                </div>

                {/* show all menu */}
                <ul className="pt-4">
                    {menuState.map((menu, index) => {
                        return (
                            <Fragment key={index}>
                                {/* show main menu */}
                                <Link to={menu.link} className="hover:bg-[#dff9fb]">
                                    <li className="text-slate-700 text-sm flex items-center gap-x-4 cursor-pointer p-2  rounded-md mt-2 hover:bg-[#dff9fb]">
                                        <span className="text-2xl block float-left">
                                            {menu?.icon}
                                        </span>
                                        <span
                                            className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"
                                                }`}
                                        >
                                            {menu.title}
                                        </span>
                                        {menu.subMenu && (
                                            <BsChevronDown
                                                className={`${menu.subMenuOpen && open && "rotate-180"
                                                    } duration-200 `}
                                                onClick={() => toggleSubMenu(menu.title)}
                                            />
                                        )}
                                    </li>
                                </Link>

                                {/* show sub menu if have */}
                                {open && menu.subMenu && menu.subMenuOpen && (
                                    <ul>
                                        {menu?.submenuItems?.map((submenuItem, index) => (
                                            <Link to={submenuItem.link} key={index}>
                                                <li className="text-[#333] text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                                                    {submenuItem.title}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                            </Fragment>
                        );
                    })}
                </ul>
            </div>

            {/* for mobile devices */}
            <div className="block md:hidden bg-white  h-screen p-2 pt-0 relative duration-300 w-10">
                <ul className="pt-8">
                    {menuState.map((menu, index) => {
                        return (
                            <Fragment key={index}>
                                <Link to={menu.link} className="hover:bg-[#dff9fb]">
                                    <li className="text-slate-700 text-sm flex items-center gap-x-4 cursor-pointer p-2  rounded-md mt-2 hover:bg-[#dff9fb] justify-center">
                                        <span className="text-xl block float-left">
                                            {menu?.icon}
                                        </span>
                                    </li>
                                </Link>
                            </Fragment>
                        );
                    })}
                </ul>
            </div>

            {/* layout part */}
            <div
                className={`hidden md:block ${open ? styles.width1 : styles.width2
                    } `}
            >
                {/* <div className=" bg-[#dff9fb]"> */}
                <Navbar />
                {/* here all the component will display */}
                <Outlet />
            </div>
            <div className={`block md:hidden ${styles.width3} `}>
                {/* <div className=" bg-[#dff9fb]"> */}
                <Navbar />
                {/* here all the component will display */}
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
