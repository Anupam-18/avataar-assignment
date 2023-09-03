import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carroussel from "./Carousel";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          imageDescp="Modern kitchen utensils"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
          imageDescp="Modern kitchen utensils"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
          imageDescp="Modern kitchen utensils"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
          imageDescp="Modern kitchen utensils"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
          imageDescp="Modern kitchen utensils"
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
