export default function TabButton({ children, onClickEvent, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onClickEvent}>
        {children}
      </button>
    </li>
  );
}
