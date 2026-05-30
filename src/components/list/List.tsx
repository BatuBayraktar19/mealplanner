import type { IListItem } from "../../types/ListTypes";
import "./List.css";

function List({ li }: { li: IListItem[] }) {
  return (
    <ul>
      {li.map((item) => (
        <li key={item.name + item.id}>
          <input type="checkbox" name={item.name} id={item.name + item.id} />
          {item.name} {item.amount}
        </li>
      ))}
    </ul>
  );
}
export default List;
