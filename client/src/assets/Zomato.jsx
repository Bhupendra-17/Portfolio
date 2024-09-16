import React from "react";


function Zomato() {
    return (
        <div>
            <div className="bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)] bg-center ">
                <div className="flex justify-between px-4 py-3 text-white">
                    <div className="flex gap-2">
                        <i className="fa-thin fa-mobile-screen text-xl"></i>
                        <h3 className="text-sm p-1">Get the app</h3>
                    </div>
                    <div className="ring-1 lg:ring-2 ring-white rounded-full w-8 h-8 lg:w-12 lg:h-12 text-center pt-1">
                        <i className="text-red-500 fa-solid fa-user lg:text-3xl"></i>
                    </div>
                </div>

                <div className="text-center my-10 lg:my-16 text-white">
                    <h1 className="text-5xl lg:text-7xl  hover:text-orange-400 font-bold">
                        zomato
                    </h1>
                    <p className="text-2xl lg:text-4xl mt-10 justify-center pt-5">
                        Discover the best food & drinks in
                    </p>
                    <p id="city" className="text-3xl font-semibold lg:text-5xl">
                        Raipur
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="text-black mx-5 flex flex-col gap-3 py-5 lg:flex-row lg:gap-0 lg:items-center lg:w-full lg:justify-center lg:py-24">
                        <div className="bg-white rounded-lg p-3 flex justify-between lg:rounded-r-none lg:w-2/5 lg:ml-32 lg:text-3xl">
                            <i className="fa-solid fa-location-dot text-lg lg:text-2xl"></i>
                            <input
                                type="select"
                                placeholder="Enter city name"
                                className="w-full px-5 outline-0 line-clamp-1"
                                name="city"
                            />
                            <i className="fa-solid fa-sort-down"></i>
                        </div>
                        <div className="w-1 lg:hidden"></div>
                        <div className="bg-white rounded-lg p-3 lg:w-3/5 flex justify-between gap-4 lg:rounded-l-none lg:mr-32">
                            <i className="fa-solid fa-magnifying-glass text-lg lg:text-2xl"></i>
                            <input
                                type="text"
                                placeholder="Search for restaurants, cuisines"
                                className="line-clamp-1 w-full outline-0 lg:text-3xl"
                                name="city"
                            />
                        </div>
                    </div>
                </div>
                <main className="bg-white">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 md:grid-cols-3 overflow-auto p-4 mt-4 lg:mt-6 lg:gap-8 md:gap-8 sm:gap-6">
                        <div className="border rounded-xl border-black shadow-lg hover:scale-105 transition duration-400 cursor-pointer">
                            <img
                                src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                                alt=""
                                className="lg:h-[250px] md:h-[200px] w-full rounded-t-xl"
                            />
                            <div className="px-3 py-1">
                                <h1 className="md:text-lg lg:text-2xl">Order Online</h1>
                                <p className=" text-sm line-clamp-1 lg:text-xl">
                                    Stay home and order to your doorstep
                                </p>
                            </div>
                        </div>
                        <div className="border rounded-xl border-black shadow-lg hover:scale-105 transition duration-400 cursor-pointer">
                            <img
                                src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                                alt=""
                                className="lg:h-[250px] md:h-[200px] w-full rounded-t-xl"
                            />
                            <div className="px-3 py-1">
                                <h1 className="md:text-lg lg:text-2xl">Dining</h1>
                                <p className=" text-sm line-clamp-1 lg:text-xl">
                                    Stay home and order to your doorstep
                                </p>
                            </div>
                        </div>
                        <div className="border rounded-xl border-black shadow-lg hover:scale-105 transition duration-400 cursor-pointer">
                            <img
                                src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                                alt=""
                                className="lg:h-[250px] md:h-[200px] w-full rounded-t-xl"
                            />
                            <div className="px-3 py-1">
                                <h1 className="md:text-lg lg:text-2xl">Nightlights and Clubs</h1>
                                <p className=" text-sm line-clamp-1 lg:text-xl">
                                    Stay home and order to your doorstep
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 px-4 overflow-auto shadow-xl">
                        <div className="py-2">
                            <h1 className="text-2xl">Collections</h1>
                            <p className="text-justify">
                                Explore curated lists of top restaurants, cafes, pubs, and bars in
                                Indore, based on trends
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:flex gap-3 lg:scroll-mx-8  ">
                            <span className="relative text-white py-2">
                                <img
                                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOLUNhgERn2QvP6T4vEoNeWX265HL9H205sz2W9hL-RMWNUHuu"
                                    className="h-44 w-full md:h-64 sm:h-56 rounded-lg"
                                    alt=""
                                />
                                <div className="absolute pb-2 pl-2 bottom-0 left-0 rounded-lg  bg-gradient-to-b from-transparent to-black w-full">
                                    <p className="text-lg">Best of live screens</p>
                                    <a href="#">
                                        <p>
                                            5 places <i className="fa-solid fa-caret-right" />
                                        </p>
                                    </a>
                                </div>
                            </span>
                            <span className="relative text-white py-2">
                                <img
                                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvIVbwbSqoLKYsSnSqACIPDW5tEyJH2tvcMkdKaDsZLDUeEhfL"
                                    className="h-44 w-full md:h-64 sm:h-56 rounded-lg"
                                    alt=""
                                />
                                <div className="absolute pb-2 pl-2 bottom-0 left-0 rounded-lg  bg-gradient-to-b from-transparent to-black w-full">
                                    <p className="text-lg">8 Newly opened areas</p>
                                    <a href="#">
                                        <p>
                                            9 places <i className="fa-solid fa-caret-right" />
                                        </p>
                                    </a>
                                </div>
                            </span>
                            <span className="relative text-white py-2">
                                <img
                                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRs5XGo4waTgoHR99ZIHqrLq_5D-1P-4lWIfyxTAP4v8ErpY3WF"
                                    className="h-44 w-full md:h-64 sm:h-56 rounded-lg"
                                    alt=""
                                />
                                <div className="absolute pb-2 pl-2 bottom-0 left-0 rounded-lg  bg-gradient-to-b from-transparent to-black w-full">
                                    <p className="text-lg">8 Great Buffets</p>
                                    <a href="#">
                                        <p>
                                            9 places <i className="fa-solid fa-caret-right" />
                                        </p>
                                    </a>
                                </div>
                            </span>
                            <span className="relative text-white py-2">
                                <img
                                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoxOBqaE4KpuqsIvaIt7uRpEJYQR8Xi2tHLh6-JmVQf9PT3VMn"
                                    className="h-44 w-full md:h-64 sm:h-56 rounded-lg"
                                    alt=""
                                />
                                <div className="absolute pb-2 pl-2 bottom-0 left-0 rounded-lg  bg-gradient-to-b from-transparent to-black w-full">
                                    <p className="text-lg">11 Romantic Dinner</p>
                                    <a href="#">
                                        <p>
                                            11 places <i className="fa-solid fa-caret-right" />
                                        </p>
                                    </a>
                                </div>
                            </span>
                            <span className="relative text-white py-2">
                                <img
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrpudu_dhVf0AVKPpDwrRwBTZDtUvJbTIOPSsDz61PGhyQEtR4"
                                    className="h-44 w-full md:h-64 sm:h-56 rounded-lg"
                                    alt=""
                                />
                                <div className="absolute pb-2 pl-2 bottom-0 left-0 rounded-lg  bg-gradient-to-b from-transparent to-black w-full">
                                    <p className="text-lg">11 Great places</p>
                                    <a href="#">
                                        <p>
                                            10 places <i className="fa-solid fa-caret-right" />
                                        </p>
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="py-10 px-4 ">
                        <div className="py-2">
                            <h1 className="text-2xl inline">Popular localities in and around</h1>
                            <h1 id="city" className="text-2xl inline-flex ml-2">
                                Raipur
                            </h1>
                            <p className="text-justify py-2">
                                Explore curated lists of top restaurants, cafes, pubs, and bars in
                                Indore, based on trends
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
                            alt=""
                        />
                        <div className="p-4 grid grid-cols-1 lg:grid-cols-2">
                            <h1 className="text-3xl">Get the Zomato app</h1>
                            <p className="py-2">
                                We will send you a link, open it on your phone to download the app
                            </p>
                            <div className="flex justify-evenly gap-4 text-justify p-6 md:p4 text-xl">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio accent-red-500"
                                        name="radio"
                                        defaultValue={1}
                                    />
                                    <span className="ml-2">Email</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio accent-red-500"
                                        name="radio"
                                        defaultValue={1}
                                    />
                                    <span className="ml-2">Phone</span>
                                </label>
                            </div>
                            <div className="flex gap-1 py-5 h-20 ">
                                <input
                                    type="email"
                                    name="usermail"
                                    id="usermail"
                                    className=" rounded-lg outline-none w-full h-full border  border-blue-500 p-4 text-xl"
                                    placeholder="Email"
                                />
                                <a
                                    href="#"
                                    className="rounded-lg h-full px-2 py-1 border align-middle text-xl font-semibold text-white bg-orange-600 text-center hover:bg-black"
                                >
                                    Share
                                </a>
                            </div>
                            <div className="">
                                <img
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJWY32xkGg6GFh6F5NCzN1hYM_eq7SBJHy6FJAjYAltfPrOOF2"
                                    alt=""
                                    className="m-auto w-auto  "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-2 pt-5">
                        <div className="md:flex md:items-center justify-between lg:flex lg:items-center ">
                            <div className="text-5xl font-bold ">
                                <i>
                                    <h1 className="px-2">zomato</h1>
                                </i>
                            </div>
                            <div className="flex mx-2 gap-4 py-12">
                                <div className="">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.f7W_VNKpCMSFRTd0S9wBCQHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7"
                                        className="w-6 h-6 absolute mt-2 ml-1"
                                    />
                                    <select
                                        name="country"
                                        id="country"
                                        className=" border border-black h-10 rounded-lg px-8 "
                                    >
                                        <option value="country">India</option>
                                        <option value="country">UAE</option>
                                    </select>
                                </div>
                                <div className="pr-3">
                                    <i className="fa-solid fa-globe absolute pt-3 pl-3" />
                                    <select
                                        name="lang"
                                        id="lang"
                                        className=" border border-black h-10 rounded-lg px-8"
                                    >
                                        <option value="lang">English</option>
                                        <option value="lang">Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <footer className="ml-4 my-2">
                <div className="grid grid-cols-2 sm:gap-6 gap-2 sm:grid-cols-4  md:grid-cols-4">
                    <div className="">
                        <h1 className="font-mono">ABOUT ZOMATO</h1>
                        <ul className="font-thin">
                            <li>Who we are</li>
                            <li>Blog</li>
                            <li>Work with us</li>
                            <li>Investors relations</li>
                            <li>Report Fraud</li>
                            <li>Press Kit</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="font-mono">ZOMAVERSE</h1>
                        <ul className="font-thin">
                            <li>Zomato</li>
                            <li>Blinkit</li>
                            <li>Feeding India</li>
                            <li>Hyperpure</li>
                            <li>Zomaland</li>
                            <li>Weather Union</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="font-mono">FOR RESTAURANTS</h1>
                        <ul className="font-thin">
                            <li>Partner with us</li>
                            <li>Apps for you</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="font-mono">LEARN MORE</h1>
                        <ul className="font-thin">
                            <li>Privacy </li>
                            <li>Terms</li>
                            <li>Security</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
                <div className="py-5 text-md flex gap-2 justify-center md:hidden">
                    <div className="bg-black w-8 h-8 rounded-full text-white px-2 py-1">
                        <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                    <div className="bg-black w-8 h-8 rounded-full text-white px-2 py-1">
                        <a href="">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                    <div className="bg-black w-8 h-8 rounded-full text-white px-2 py-1">
                        <a href="">
                            <i className="fa-brands fa-twitter" />
                        </a>
                    </div>
                    <div className="bg-black w-8 h-8 rounded-full text-white px-2 py-1">
                        <a href="">
                            <i className="fa-brands fa-youtube" />
                        </a>
                    </div>
                    <div className="bg-black w-8 h-8 rounded-full text-white pl-3 py-1">
                        <a href="">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Zomato;
