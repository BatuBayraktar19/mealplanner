import type { IListItem } from "../../types/ListTypes";
import ListItem from "../list-item/ListItem";
import "./List.css";

type Props = {
  li: IListItem[];
  updateList: (item: IListItem) => void;
};

function List({ li, updateList }: Props) {
  return (
    <ul>
      {li.map((item) => (
        <ListItem updateList={updateList} key={item.id} item={item}></ListItem>
      ))}
    </ul>
  );
}
export default List;
