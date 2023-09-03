import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carroussel from "./Carousel";
import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://images.unsplash.com/photo-1562813733-b31f71025d54"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://images.unsplash.com/photo-1521185496955-15097b20c5fe"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://images.unsplash.com/photo-1505238680356-667803448bb6"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://images.unsplash.com/photo-1693018365570-0e6c844724d4"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          imageDescp="Modern Beautiful Images"
        />
      ),
    },
  ];
  return (
    <div className="featuredProducts">
      <Typography className="featuredProductsHeading">
        Featured Products
      </Typography>
      <Typography className="featuredProductsSubHheading">
        Explore and discover a variety of products
      </Typography>
      <Carroussel
        cards={cards}
        height="300px"
        width="50%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default FeaturedProducts;
