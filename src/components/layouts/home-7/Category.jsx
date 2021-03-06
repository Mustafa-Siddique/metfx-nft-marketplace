import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../../assets/images/box-item/img_item2.jpg'
import img2 from '../../../assets/images/box-item/img_item1.jpg'
import img3 from '../../../assets/images/box-item/img_land.jpg'
import img4 from '../../../assets/images/box-item/img_item3.jpg'
import img5 from '../../../assets/images/box-item/img_item4.jpg'
import img6 from '../../../assets/images/box-item/img_item6.jpg'

const Category = () => {
    const [data] = useState([
        {
            title: 'Collection 1',
            img: img1
        },
        {
            title: 'Collection 2',
            img: img2
        },
        {
            title: 'Land',
            img: img3
        },
        {
            title: 'Sports',
            img: img4
        },
        {
            title: 'Utilities',
            img: img5
        },
        {
            title: 'Digital Art',
            img: img6
        },
        {
            title: 'Style',
            img: img1
        },
        {
            title: 'Music',
            img: img1
        },
    ])
    return (
        <section className="tf-section pt-5 category">
        <div className="themesflat-container">
            <div className="row my-5">
                <div className="col-md-12">
                    <div className="heading-live-auctions">
                        <h2 className="tf-title pb-39">All Catergories</h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={25}

                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                },
                            767: {
                                slidesPerView: 4,
                            },
                            991: {
                                slidesPerView: 6,
                            },
                            }}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                            {
                                data.map((item,index) => (
                                    <SwiperSlide key={index}>
                                        <CategoryItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    );
}
const CategoryItem = props => (
    <div className="swiper-container carousel11">
    <div className="swiper-wrapper">
        <div className="swiper-slide">
            <div className="slider-item">										
                <div className="sc-categoty">
                    <div className="card-media">
                        <Link to="#">
                            <img src={props.item.img} alt="Axies" />
                        </Link>
                    </div>
                    <div className="card-title">
                        <Link to="#"><h4>{props.item.title}</h4></Link>
                    </div>
                </div>    	
            </div>
        </div>
    </div>
</div>
)

export default Category;
