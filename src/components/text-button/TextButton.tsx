import "./TextButton.css";

type Props = {
  text: string;
  onClicked: () => void;
};
function TextButton({ text, onClicked }: Props) {
  return (
    <button className="t-button" onClick={onClicked}>
      <p>{text}</p>
    </button>
  );
}

export default TextButton;
