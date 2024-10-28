/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CustomCursor from './Cursor';

const Page1 = () => {
    const [isToggled, setIsToggled] = useState(false);
    const containerRef = useRef(null);

    const [isHidden, setIsHidden] = useState(true);
    const [prehid, setprehid] = useState(false)

    const [isHover, setisHover] = useState(false)

    const handleHover = () => {
        setisHover(!isHover);
    }

    const handleHide = () => {
        setIsHidden(false);
        setprehid(true);
    };

    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };

    useGSAP(() => {
        var tl2 = gsap.timeline();

        tl2.from("#CC", {
            duration: 1.3,
            y: 1000,
            opacity: 0,
            ease: "power3.inOut",
            onComplete: () => {
                tl2.to("#CC", {
                    duration: 1,
                    y: -500,
                    opacity: 0,
                    ease: "power3.inOut",
                    onComplete: () => {

                        tl2.kill();
                        handleHide();

                        var tl = gsap.timeline();

                        tl.from("#nav h1", {
                            y: 70,
                            opacity: 0,
                            duration: 2,
                            ease: "power2.inOut",
                        }, "an")

                        tl.from("#nav>i", {
                            y: 70,
                            opacity: 0,
                            duration: 2,
                            ease: "power2.inOut",
                        }, "an")

                        tl.from("#nav-prt2 > *", {
                            duration: 2,
                            y: 50,
                            opacity: 0,
                            ease: "power3.out",
                            stagger: {
                                each: 0.07,
                                from: "center",
                            }
                        }, "an");

                        tl.from("#left>*", {
                            duration: 2,
                            x: -100,
                            opacity: 0,
                            ease: "power3.out",
                            stagger: 0.3,
                        }, "an")

                        tl.from("#right>*", {
                            duration: 2,
                            x: 100,
                            opacity: 0,
                            ease: "power3.out",
                            stagger: 0.3,
                        }, "an")

                        tl.from("#center>*", {
                            duration: 2,
                            y: -200,
                            opacity: 0,
                            ease: "power3.out",
                            stagger: 0.3,
                            onComplete: () => {
                                tl.kill();
                            }
                        }, "an")
                    }
                })
            }
        })
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(containerRef.current,
            {
                clipPath: 'circle(0% at 100% 100%)',
            },

            {
                clipPath: 'circle(200% at 0% 0%)',
                duration: 1.6,
                ease: 'sine.inOut',
                backgroundColor: isToggled ? '#fff' : 'transparent',
                color: isToggled ? '#000' : '#fff',
            });

        return () => tl.kill();
    }, [isToggled]);

    return (
        <>
            <CustomCursor hover={isHover} />
            <div id=" preloader" className={`${prehid ? 'hidden' : ''} w-full h-full bg-neutral-950 relative overflow-hidden`}>
                <img id="CC" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] align-middle h-[16%]' src="https://www.coca-cola.com/content/dam/onexp/us/en/homepage/CocaColalogor.png" alt="" />
            </div>
            <div id='main' ref={containerRef} className={`${isHidden ? 'hidden' : ''} select-none overflow-hidden`}>
                <div
                    id="nav"
                    className={`px-[40px] h-[16vh] w-screen flex items-center justify-between`}
                >
                    <h1
                        className="cursor-pointer text-[16px] font-semibold select-none"
                    >
                        <i className="ri-menu-line"></i> MENU
                    </h1>
                    <div id="nav-prt2" className="flex items-center justify-between gap-5">
                        <h5 className="active:scale-95 cursor-pointer font-semibold text-[12px]">Drinks</h5>
                        <h5 className="active:scale-95 cursor-pointer font-semibold text-[12px]">Categories</h5>
                        <h5 className="active:scale-95 cursor-pointer font-semibold text-[12px]">Buy Franchise</h5>

                        <div className="active:scale-95 cursor-pointer bg-red-600 w-32 h-0.5 mx-2"></div>
                        <img 
                            className="h-52 active:scale-95 cursor-pointer ml-5"
                            src="/Logo1.png"
                            alt="" 
                        />
                        <div className="active:scale-95 cursor-pointer bg-red-600 w-32 h-0.5 mx-2"></div>

                        <h5 className="active:scale-95 cursor-pointer font-semibold text-[12px]">Stores</h5>
                        <h5 className="active:scale-95 cursor-pointer font-semibold text-[12px]">Contact</h5>
                        <h5 className="active:scale-95 cursor-pointer font-semibold text-[12px]">Our Story</h5>
                    </div>

                    <i
                        className={` ${isToggled ? 'ri-toggle-fill' : 'ri-toggle-line'} text-3xl flex items-center gap-2 cursor-pointer`}
                        onClick={handleToggle}
                    >
                        <span className="text-[16px] font-semibold select-none" > {isToggled ? 'Light Mode' : 'Dark Mode'}</span>
                    </i>
                </div>

                <div
                    id="content"
                    className={`w-screen h-[84vh] flex items-center justify-between`}
                >
                    <div id="left" className="w-[35%] h-[100%]">
                        <h1 onMouseEnter={() => {
                        handleHover()
                        }}

                        onMouseLeave={() => {
                            handleHover()
                        }}
                        className="mt-[10%] pt-[10%] pl-[15%] text-7xl font-semibold mb-10 ">
                            Your favourite{' '}
                            <span className="text-red-500 text-7xl font-normal">coke</span> just
                            got reinvented.
                        </h1>
                        <p className="ml-[15%] text-base w-[60%] opacity-85">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            commodi nemo, consequatur illo at quas aperiam.
                        </p>
                        <div className="ml-[15%] mt-10 flex gap-5 items-center overflow-visible" id="btn">
                            <button
                                className="text-white px-10 py-4 rounded-full bg-red-600 active:scale-95 font-bold overflow-visible shadow-2xl shadow-red-600">
                                <i className="ri-shopping-bag-4-line"></i> Taste Now
                            </button>
                            <i className="ri-heart-line text-3xl text-red-600 active:scale-90 cursor-pointer"></i>
                        </div>
                    </div>

                    <div
                        id="center"
                        className="h-[100%] w-[28%] flex items-center justify-center overflow-hidden"
                    >
                        <div
                            id="center-bg"
                            className="bg-green-600 w-[93%] h-[90%] rounded-tl-full rounded-tr-full blur-sm bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0c%2Fc9%2F69%2F0cc9697425b67da13fe1af9e69c4fc08.jpg&f=1&nofb=1&ipt=c4bd3bcca27c275cabac2fef36ccedde1253a8d6144cac8df2a484bedbea8d17&ipo=images')] bg-[350%]"
                        ></div>
                        <img
                            className="h-[85%] translate-x-[-50%] translate-y-[-50%] top-[56%] left-[49%] absolute"
                            src="freecompress-Coca-Cola-Bottle.png"
                            alt=""
                        />
                    </div>

                    <div id="right" className="w-[35%] h-[100%] px-10">
                        <div
                            id="e1"
                            className={`${isToggled ? 'opacity-70' : 'opacity-60'
                                } mt-[48%] ml-[12%] w-[65%] flex items-center justify-between ${isToggled ? 'border-b-2 border-black' : 'border-b-2 border-white'
                                } mb-5`}
                        >
                            <h1 className="mb-5 text-3xl font-semibold">Descriptions</h1>
                            <i className="ri-add-line mb-5 text-2xl"></i>
                        </div>
                        <div
                            id="e1"
                            className={`${isToggled ? 'opacity-70' : 'opacity-60'
                                } ml-[12%] w-[65%] flex items-center justify-between ${isToggled ? 'border-b-2 border-black' : 'border-b-2 border-white'
                                }`}
                        >
                            <h1 className="mb-5 text-3xl font-semibold">Nutrients</h1>
                            <i className="ri-add-line mb-5 text-2xl"></i>
                        </div>
                        <div
                            id="e2"
                            className="mt-5 ml-[12%] w-[65%]"
                        >
                            <h1 className="mb-5 text-3xl font-semibold">Ingredients</h1>
                            <p className="opacity-60 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                                inventore quisquam alias a animi nemo vero, perspiciatis eaque
                                repellat quam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page1;
