import "./categories.css";
import { categories } from "../../data";
import CategoriesItem from "../categoryItem/CategoriesItem";

export default function Categories() {
  return (
    <div className="categories">
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id}/>
      ))}
    </div>
  );
}
