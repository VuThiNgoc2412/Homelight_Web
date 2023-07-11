import React from "react";
import CategoryItem from "./CategoryItem";
import './style.css'
const Categories = () => {
  const data = [
    {
      id: 1,
      cateImg: "./images/category/cat1.png",
      cateName: "Đèn Chùm",
      children: [
        {
          id: 2,
          cateName: "Đèn chùm hiện đại",
        },
        {
          id: 3,
          cateName: "Đèn chùm ",
        },
        {
          id: 2,
          cateName: "Đèn chùm khách sạn",
        },
        {
          id: 3,
          cateName: "Đèn chùm khách sạn",
        },
        {
          id: 2,
          cateName: "Đèn chùm khách sạn",
        },
      ],
    },
  ];

  return (
    <div className="category category_container">
      {data.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categories;
