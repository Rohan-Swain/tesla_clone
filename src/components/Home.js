import React from 'react'
import Footer from './Footer';
import Header from './Header'
import Section from './Section'

const arr = [
    {
        title: "Model 3",
        description: `Order Online for Touchless Delivery`,
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: 'model-3.jpg',
        arr: true
    },
    {
        title: "Model Y",
        description: "Order Online for Touchless Delivery",
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: 'model-y.jpg'
    },
    {
        title: "Model S",
        description: "Order Online for Touchless Delivery",
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: 'model-s.jfif'
    },
    {
        title: "Model X",
        description: "Order Online for Touchless Delivery",
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: 'model-x.jfif'
    },
    {
        title: "Solar Panels",
        description: "Lowest Cost Solar Panels in America",
        btn1: "Order now",
        btn2: "Learn more",
        bgImg: "solar-panel.jpg"
    },
    {
        title: "Solar Roof",
        description: "Produce Clean Energy From Your Roof",
        btn1: "Order now",
        btn2: "Learn now",
        bgImg: "solar-roof.jpg"
    },
    {
        title: "Accessories",
        btn1: "Shop now",
        bgImg: "accessories.jpg",
        color: "black"
    }
];

function Mapping() {
    return arr.map(item =>
        <Section
            key={arr.indexOf(item).toString()}
            title={item.title}
            description={item.description}
            btn1={item.btn1}
            btn2={item.btn2}
            bgImg={item.bgImg}
            arr={item.arr}
            color={item.color}
        />);
}

function Home() {
    return (
        <div>
            <Header />
            <Mapping />
            <Footer />
        </div>
    );
}

export default Home