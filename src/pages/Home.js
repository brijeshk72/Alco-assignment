import React from 'react';
import LayoutOne from './../layout/LayoutOne';
import TopBanner from '../wrapper/home/TopBanner';
import BestSellingProduct from '../components/product/BestSellingProduct';


const Home = () => {
    return (
       
        <LayoutOne>

            <section className="product-slider">

            <TopBanner />

            </section>

            <section className="featured-roduct">

            <h3>Best Selling Products</h3>
            <BestSellingProduct />

             </section>

        </LayoutOne>  
    )
}

export default Home
