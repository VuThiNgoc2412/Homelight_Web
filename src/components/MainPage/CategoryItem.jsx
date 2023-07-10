import { useState } from "react";
import "./Home.css";

export default function CategoryItem({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (item.children) {
    return (
      <div className="category-item">
        {/* <input type="checkbox" id="btn_control" />
        <label htmlFor="btn_control"></label> */}
        <div onClick={handleClick} className="category-title category_parent">
          <span>{item.cateName}</span>
        </div>
        <div className={open ? "category-content" : "notcategory"}>
          {item.children.map((child) => (
            <CategoryItem item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="category-item category_child">
        <div className="category-title ">
          <i class="ri-arrow-right-s-fill"></i>
          <span onClick={handleClick}>{item.cateName}</span>
        </div>
      </div>
    );
  }
}
