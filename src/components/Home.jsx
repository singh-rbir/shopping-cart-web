import React from "react";
import { MdPayments } from "react-icons/md";
import { AiFillDollarCircle, AiFillGift } from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import {FaShippingFast} from "react-icons/fa"
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.png";
import img6 from "../images/img6.jpeg";
import { List, Card } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    title: "Furniture",
  },
  {
    title: "Home Interior/exterior",
  },
  {
    title: "Mens Clothing",
  },
  {
    title: "Womens Clothing",
  },
  {
    title: "Toys",
  },
  {
    title: "Entertainment",
  },
  {
    title: "Tools & Home",
  },
  {
    title: "Lawncare",
  },
  {
    title: "Pets",
  },
];

function Home () {
  const { Meta } = Card;

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <>
      <div className="main__container">
        <div className="categories_section">
          <h2>Shop By category</h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </div>
        <div className="main__heading">
          <b>
            <p className="first_line">Bread</p>
          </b>
          <br />
          <div>
            <p className="second_line">
              Buy today, <br />
              <i>
                but <b>don't pay today</b>
              </i>
            </p>
          </div>
          <br />
          <div className="items-grid">
            <Card title="Don't miss these items...">
              <Card.Grid style={gridStyle}>Item 1</Card.Grid>
              <Card.Grid style={gridStyle}>Item 2</Card.Grid>
              <Card.Grid style={gridStyle}>Item 3</Card.Grid>
              <Card.Grid style={gridStyle}>Item 4</Card.Grid>
              <Card.Grid style={gridStyle}>Item 5</Card.Grid>
              <Card.Grid style={gridStyle}>Item 6</Card.Grid>
              <Card.Grid style={gridStyle}>Item 7</Card.Grid>
            </Card>
          </div>
        </div>
      </div>
      <div className="top_items">
        <Card
          bordered={true}
          className="top_item"
          title="Top rated"
          cover={<img alt="example" src={img5} />}
          hoverable
        >
          <h3>Comfy couch</h3>
          <Meta title="" description="$9999 only" />
        </Card>
      </div>

      {/* --------------- */}
      <div className="featured">
        <h3>
          <i>FEATURED</i>
        </h3>
        <br />
        <div className="content">
          <div>
            <Carousel
              autoPlay={true}
              dynamicHeight={false}
              infiniteLoop={true}
              emulateTouch={true}
              interval={2500}
              stopOnHover={true}
            >
              <div className="carousel-img">
                <img src={img3} alt="" />
              </div>
              <div className="carousel-img">
                <img src={img4} alt="" />
              </div>
              <div className="carousel-img">
                <img src={img6} alt="" />
              </div>
              <div className="carousel-img">
                <img src={img2} alt="" />
              </div>
              <div className="carousel-img">
                <img src={img5} alt="" />
              </div>
              <div className="carousel-img">
                <img src={img1} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* -------------  */}

      <div className="service__container">
        <div className="service__item">
          <MdPayments className="icon" />
          <p className="service__heading">4 EeZy Payments</p>
          <p className="service__subheading">
            <i>Thats our thing...</i>
          </p>
        </div>
        <div className="service__item">
          <AiFillDollarCircle className="icon" />
          <p className="service__heading">Get the best</p>
          <p className="service__subheading">
            Buy expensive gifts with ease of mind
          </p>
        </div>
        <div className="service__item">
          <FaShippingFast className="icon" />
          <p className="service__heading">FAST shipping*</p>
          <p className="service__subheading">1 hour delivery</p>
        </div>
        <div className="service__item">
          <HiOutlineChatAlt2 className="icon" />
          <p className="service__heading">Online Support</p>
          <p className="service__subheading">All day, errrrdayy</p>
        </div>
      </div>
    </>
  );
}

export default Home;
