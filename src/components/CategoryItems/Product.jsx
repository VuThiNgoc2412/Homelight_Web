import React from "react";
// import Catg from "./Catg"
import ProductCart from "./ProductCart";
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
      },
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
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Mapple Earphones",
    price: "400",
    discount: "25",
    categoryname: "Đèn Chùm",
  },
  {
    id: 8,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Vivo android one",
    price: "120",
    discount: "10",
    categoryname: "Đèn Chùm",
  },
  {
    id: 9,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Vivo android one",
    price: "120",
    discount: "10",
    categoryname: "Đèn Chùm",
  },
  {
    id: 10,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Vivo android one",
    price: "120",
    discount: "10",
    categoryname: "Đèn Chùm",
  },
  {
    id: 11,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Sony Light",
    price: "20",
    discount: "50 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 12,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 13,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 14,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Thả",
  },
  {
    id: 15,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 16,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 17,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 18,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "bebjhf",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Mâm Ốp Trần",
  },
  {
    id: 18,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 19,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 20,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 21,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Gương",
  },
  {
    id: 22,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 23,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 24,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 25,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Bàn - Đèn Cây",
  },
  {
    id: 26,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Tường",
  },
  {
    id: 27,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Quạt Trần",
  },
  {
    id: 28,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Led",
  },
  {
    id: 29,
    cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
    name: "Iphone",
    price: "999",
    discount: "10 ",
    categoryname: "Đèn Ngoài Trời",
  },
];

const Product = ({ addToCart, shopItems }) => {
  return (
    <section className="shop background product_items">
      <div className="container d_flex product product_container">
        {/* <Catg /> */}
        <div className="content-items">
          {categorys.map((category) => {
            return (
              <>
                <div className="product-content  grid1">
                  {data
                    .filter((shopItems) => {
                      return shopItems.categoryname.includes(category.category);
                    })
                    .map((shopItems) => (
                      <ProductCart addToCart={addToCart} shopItems={shopItems} />
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

export default Product;
