import React from "react";
// import Catg from "./Catg"
import ShopCart from "./ShopCart";
import "./style.css";

const categorys = [
  {
    id: 1,
    category: "Đèn Chùm",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
      {
        id: 2,
        category: "Đèn chùm Cổ Điển",
      },
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
      {
      id: 3,
      category: "Đèn Mâm Ốp Trần",
      }
    ],
  },
  {
    id: 2,
    category: "Đèn Thả",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 3,
    category: "Đèn Mâm Ốp Trần",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 4,
    category: "Đèn Gương",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 5,
    category: "Đèn Bàn - Đèn Cây",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 6,
    category: "Đèn Tường",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 7,
    category: "Quạt Trần",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 8,
    category: "Đèn Led",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
  {
    id: 9,
    category: "Đèn Ngoài Trời",
    children: [
      {
        id: 2,
        category: "Đèn chùm hiện đại",
      },
    ],
  },
];

const data = [
  {
    id: 7,
    cover: "./images/shops/shops-1.png",
    name: "Mapple Earphones",
    price: "400",
    discount: "25",
    categoryname: "Đèn Chùm",
  },
  {
    id: 8,
    cover: "./images/shops/shops-2.png",
    name: "Vivo android one",
    price: "120",
    discount: "10",
    categoryname: "Đèn Chùm",
  },
  {
    id: 9,
    cover: "./images/shops/shops-2.png",
    name: "Vivo android one",
    price: "120",
    discount: "10",
    categoryname: "Đèn Chùm",
  },
  {
    id: 10,
    cover: "./images/shops/shops-2.png",
    name: "Vivo android one",
    price: "120",
    discount: "10",
    categoryname: "Đèn Chùm",
  },
  {
    id: 11,
    cover: "./images/shops/shops-3.png",
    name: "Sony Light",
    price: "20",
    discount: "50 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 12,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 13,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 14,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 15,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 16,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 17,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 18,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 18,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 19,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 20,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 21,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 22,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 23,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 24,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 25,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 26,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Tường",
  },
  {
    id: 27,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Quạt Trần",
  },
  {
    id: 28,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Led",
  },
  {
    id: 29,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Ngoài Trời",
  },
];

const Shop = ({ addToCart, shopItems }) => {
  return (
    <section className="shop background">
      <div className="container d_flex container_item">
        {/* <Catg /> */}
        <div className="contentWidth content__items">
          {categorys.map((category) => {
            return (
              <>
                <div className="heading d_flex">
                  <div className="heading-left row  f_flex">
                    <h2>{category.category}</h2>
                  </div>

                  <div className="category_child">
                    {category.children.slice(0, 4).map((categorychild) => {
                      return (
                        <span key={categorychild.id}>
                          {categorychild.category}
                        </span>
                      );
                    })}
                    {/* {category.children.forEach((categorychild) => {
                      return <span>{categorychild.category}</span>;
                    })} */}
                  </div>
                  <div className="heading-right row ">
                    <span className="heading-right_text">View all</span>
                    <i className="fa-solid fa-caret-right"></i>
                  </div>
                </div>
                <div className="product-content  grid1">
                  {/* {data.map((shopItems, index) => {
                    return (
                      <ShopCart addToCart={addToCart} shopItems={shopItems} />
                    );
                  })} */}
                  {data
                    .filter((shopItems) => {
                      return shopItems.categoryname.includes(category.category);
                    })
                    .map((shopItems) => (
                      <ShopCart addToCart={addToCart} shopItems={shopItems} />
                    ))}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
