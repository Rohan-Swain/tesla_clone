import React from 'react'
import Footer from './Footer';
import Header from './Header'
import Section from './Section'
import styled from 'styled-components';

const arr = [
    {
        title: "Model 3",
        description: `Order Online for Touchless Delivery`,
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: './images/model-3.jpg',
        arr: true
    },
    {
        title: "Model Y",
        description: "Order Online for Touchless Delivery",
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: './images/model-y.jpg'
    },
    {
        title: "Model S",
        description: "Order Online for Touchless Delivery",
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: './images/model-s.jfif'
    },
    {
        title: "Model X",
        description: "Order Online for Touchless Delivery",
        btn1: "Custom Order",
        btn2: "Existing Inventory",
        bgImg: './images/model-x.jfif'
    },
    {
        title: "Solar Panels",
        description: "Lowest Cost Solar Panels in America",
        btn1: "Order now",
        btn2: "Learn more",
        bgImg: "./images/solar-panel.jpg"
    },
    {
        title: "Solar Roof",
        description: "Produce Clean Energy From Your Roof",
        btn1: "Order now",
        btn2: "Learn now",
        bgImg: "./images/solar-roof.jpg"
    },
    {
        title: "Accessories",
        btn1: "Shop now",
        bgImg: "./images/accessories.jpg",
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
        <HomeWrapper>
            <Header />
            <Mapping />
            <Footer />
        </HomeWrapper>
    );
}

export default Home

const HomeWrapper = styled.div`
    scroll-snap-type: y mandatory;
    height: 100vh;
`