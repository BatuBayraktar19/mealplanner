import type { IListItem } from "../../types/ListTypes";
import ListItem from "../list-item/ListItem";
import "./List.css";

function List({ li }: { li: IListItem[] }) {
  return (
    <ul>
      {li.map((item) => (
        <ListItem key={item.id} item={item}></ListItem>
      ))}
    </ul>
  );
}
export default List;
