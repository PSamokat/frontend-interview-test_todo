/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllCategories } from "../features/categoriesSlice";


// TODO: Типизировать компонент
export const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
