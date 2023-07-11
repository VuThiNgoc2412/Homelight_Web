import { Link } from "react-router-dom";
import './style.css'

export default function CategoryItem({ item }) {
  if (item.children) {
    return (
      <div
        className="category-item"
      >
        <Link to={`/catedetail/${item.id}`}>
          <div className="category-title category_parent">
            <span>{item.cateName}</span>
          </div>
        </Link>

        <div>
          {item.children.map((child) => (
            <Link to={`/catedetail/${child.id}`}><CategoryItem item={child} /></Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="category-item category_child">
        <div className="category-title ">
          <i class="ri-arrow-right-s-fill"></i>
          <span>{item.cateName}</span>
        </div>
      </div>
    );
  }
}
