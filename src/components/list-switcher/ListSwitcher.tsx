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
        onClicked={() => onSwitch("shopping")}
      ></TextButton>
      <TextButton
        text="Pantry"
        onClicked={() => onSwitch("pantry")}
      ></TextButton>
    </div>
  );
}

export default ListSwitcher;
