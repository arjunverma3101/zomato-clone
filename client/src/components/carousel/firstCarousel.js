import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Arrow from "./arrowCompo.js"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



function FirstCarousel() {

    const image = [
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
            des:"McDonald's"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
            des:"Domino's Pizza"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp",
            des:"Subway"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
            des:"Burger King"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp",
            des:"Chaayos"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
            des:"KFC"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
            des:"Haldiram's"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
            des:"Pizza Hut"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp",
            des:"Bikkgane Biryani"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
            des:"Bikanervala"
        }
    ];

    const SilderRef = useRef(null);

    const settings = {
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            }
          ]
    }

    return (
        <>
            <div className="bg-[#F8F8F8] my-6 pb-10 shadow-lg shadow-cyan-100">
                <div className="flex flex-col gap-2 md:gap-4 lg:w-3/4 w-full m-auto">
                    <div className="">
                        <Slider ref={SilderRef}  {...settings}>
                            {
                                image.map((ig) => (
                                    <div className="">
                                        <div className="w-full lg:p-8 md:p-7  p-6">
                                            <img className="w-full rounded-full" src={ig.src} alt="IMG" />
                                        </div>
                                        <div className="text-center md:text-xl text-base font-bold">
                                            {ig.des}
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="flex gap-8 m-auto items-center md:px-0 px-4">
                        <Arrow onClick={() => SilderRef.current.slickPrev()} arr={IoIosArrowBack} />
                        <div className="lg:text-5xl md:text-3xl text-2xl font-semibold italic text-green-900 hover:scale-105 transition-all delay-150">
                        Top brands for you
                        </div>
                        <Arrow onClick={() => SilderRef.current.slickNext()} arr={IoIosArrowForward} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default FirstCarousel;