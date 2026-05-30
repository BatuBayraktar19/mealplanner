import TextButton from "../text-button/TextButton";
import "./ListSwitcher.css";

type Props = {
  onSwitch: (list: "shopping" | "pantry") => void;
};

function ListSwitcher({ onSwitch }: Props) {
  return (
    <div className="list-switcher-wrapper">
      <TextButton
        text="Shopping"
        onClick={() => onSwitch("shopping")}
      ></TextButton>
      <TextButton text="Pantry" onClick={() => onSwitch("pantry")}></TextButton>
    </div>
  );
}

export default ListSwitcher;
