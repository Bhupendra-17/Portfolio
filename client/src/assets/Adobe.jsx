import React from 'react'

function Adobe() {
    return (
        <div><>
            <section className="h-full bg-gradient-to-r from-sky-300 to-rose-400">
                <nav className="bg-white fixed z-50 top-0 w-full">
                    <div className="flex ">
                        <div className=" flex text-center items-center">
                            <img
                                src="https://www.adobe.com/federal/assets/svgs/adobe-logo.svg"
                                className="h-8 w-8 mx-3 my-6"
                                alt=""
                            />
                            <a href="#cd" className="hover:bg-yellow-50 p-6">
                                Creativity &amp; Design <i className=" fa-solid fa-angle-down" />
                            </a>
                            <a href="#cd" className="hover:bg-yellow-50 p-6">
                                PDF &amp; E-Signatures <i className=" fa-solid fa-angle-down" />
                            </a>
                            <a href="#cd" className="hover:bg-yellow-50 p-6">
                                Marketing &amp; Commerce <i className=" fa-solid fa-angle-down" />
                            </a>
                            <a href="#cd" className="hover:bg-yellow-50 p-6">
                                Help &amp; Support <i className=" fa-solid fa-angle-down" />
                            </a>
                        </div>
                        <div className="absolute right-3">
                            
                            <button className=" border-2 rounded-3xl border-gray-400  hover:bg-slate-300  w-20 my-5 h-10">
                                Sign in
                            </button>
                        </div>
                    </div>
                </nav>
                <section className="block pt-36 mx-12  ">
                    <h1 className="font-semibold text-xl top-14">ADOBE CREATIVE CLOUD</h1>
                    <br />
                    <p className="font-bold text-4xl ">Your ultimate creative toolkit.</p>
                    <br />
                    <p className="text-xl leading-3">
                        Get access to 20+ apps and generative AI tools in the Creative Cloud All
                        Apps plan.
                    </p>
                    <br />
                    <div className="flex flex-row gap-7">
                        <button className="py-4 px-8 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-black">
                            Free Trial
                        </button>
                        <a href="#plans" className="text-xl py-5">
                            <u>See all plans</u>
                        </a>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-row gap-4">
                        <div className="text-justify z-30">
                            <div className=" py-3 px-1 w-11/12 mx-2 z-50">
                                <h3 className="text-2xl font-semibold py-4 ">
                                    Start with Photoshop. Amazing will follow.
                                </h3>
                                <p className="text-2xl font-normal  ">
                                    With Photoshop and generative AI tools powered by Adobe Firefly,
                                    you can create gorgeous photos, rich graphics, and incredible art.
                                </p>
                                <br />
                                <button className="bg-transparent text-2xl p-2 border-2 rounded-full border-black hover:bg-black hover:text-white z-50">
                                    Start free trial
                                </button>
                            </div>
                        </div>
                        <div className="text-justify flex flex-row justify-between ">
                            <div className=" py-3 px-1 w-11/12 mx-2">
                                <h3 className="text-2xl font-semibold py-4 ">
                                    Adobe Express, followed by Firefly{" "}
                                </h3>
                                <p className="text-2xl font-normal">
                                    With Photoshop and generative AI tools powered by Adobe Firefly,
                                    you can create gorgeous photos, rich graphics, and incredible art.
                                </p>
                                <br />
                                <br />
                                <button className="bg-transparent text-2xl p-2 border-2 rounded-full border-black hover:bg-black hover:text-white z-50">
                                    Start free trial
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-around w-screen overflow-hidden relative -mx-16 pb-12'>
                            <img
                                src="https://www.adobe.com/homepage/media_1823441c53394eca3aeca03943adb3e3a7fb696e9.png?width=2000&format=webply&optimize=medium"
                                className="w-[480px] bg-orange-400 bg-opacity-20 border-2 relative  border-white rounded-2xl  "
                            />
                            <img
                                src="https://www.adobe.com/homepage/media_114a03533544bcc132fed2102e8d085c259afd5b6.png?width=2000&format=webply&optimize=medium"
                                className="w-[480px] bg-orange-400 bg-opacity-20 border-2  border-white rounded-2xl  "
                            />
                        </div>
                    </div>
                </section>
            </section>
            <br />
            <section className="flex flex-col items-center gap-2 ">
                <div>
                    <h1 className="font-bold text-2xl">Get Started with free tools</h1>
                </div>
                <div className="flex flex-row gap-5">
                    <a
                        href="#"
                        className="border-2 border-black rounded-full px-2 py-1 font-semibold hover:bg-black hover:text-white"
                    >
                        <i className="fa-regular fa-image px-2 rounded-xl " />
                        Edit photos
                    </a>
                    <a
                        href="#"
                        className="border-2 border-black rounded-full px-2 py-1 font-semibold hover:bg-black hover:text-white"
                    >
                        <i className="fa-brands fa-youtube px-2 rounded-xl " />
                        Edit videos
                    </a>
                </div>
                <div className="flex flex-row gap-5">
                    <a
                        href="#"
                        className="border-2 border-black rounded-full px-2 py-1 font-semibold hover:bg-black hover:text-white"
                    >
                        <i className="fa-regular fa-file-pdf px-2 rounded-xl " />
                        View PDFs
                    </a>
                    <a
                        href="#"
                        className="border-2 border-black rounded-full px-2 py-1 font-semibold hover:bg-black hover:text-white"
                    >
                        <i className="fa-regular fa-pen-to-square px-2 rounded-xl " />
                        Edit PDFs
                    </a>
                    <a
                        href="#"
                        className="border-2 border-black rounded-full px-2 py-1 font-semibold hover:bg-black hover:text-white"
                    >
                        <i className="fa-regular fa-file-signature px-2 rounded-xl" />
                        Fill &amp; Sign PDFs
                    </a>
                </div>
                <br />
            </section>
        </>
        </div>
    )
}

export default Adobe