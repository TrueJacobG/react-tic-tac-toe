export default function Square({ value, onClick }: { value: string; onClick: any }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
