import { useState } from "react";
import type { IListItem } from "../../types/ListTypes";
import "./ListItem.css";

type Props = {
  item: IListItem;
  updateList: (item: IListItem) => void;
};

function ListItem({ item, updateList }: Props) {
  const [checked, setChecked] = useState(item.checked);

  function onChecked() {
    setChecked(!checked);
    updateList({ ...item, checked: !checked });
  }

  return (
    <>
      <li key={item.name + item.id}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChecked()}
          name={item.name}
          id={item.name + item.id}
        />
        <p onClick={() => onChecked()}>
          {item.name} {item.amount}
        </p>
      </li>
    </>
  );
}

export default ListItem;
