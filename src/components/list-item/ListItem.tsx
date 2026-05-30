import { useState } from "react";
import type { IListItem } from "../../types/ListTypes";
import "./ListItem.css";

function ListItem({ item }: { item: IListItem }) {
  const [checked, setChecked] = useState(item.checked);
  return (
    <>
      <li key={item.name + item.id}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          name={item.name}
          id={item.name + item.id}
        />
        <p onClick={() => setChecked(!checked)}>
          {item.name} {item.amount}
        </p>
      </li>
    </>
  );
}

export default ListItem;
