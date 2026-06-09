import "./TextButton.css";

type Props = {
  text: string;
  onClicked: () => void;
  disabled?: boolean;
};
function TextButton({ text, onClicked, disabled }: Props) {
  return (
    <button className="t-button" onClick={onClicked} disabled={disabled}>
      <p>{text}</p>
    </button>
  );
}

export default TextButton;
