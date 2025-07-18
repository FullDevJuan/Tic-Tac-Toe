type Props = {
  value: string;
  handleSquareClick: () => void;
};

function Square({ value, handleSquareClick }: Props) {
  return <div onClick={handleSquareClick}>{value}</div>;
}

export default Square;
