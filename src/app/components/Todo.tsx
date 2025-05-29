type Props = {
  index: number;
  text: string;
  removeTodo: (index: number) => void;
};

export default function Todo({ index, text, removeTodo }: Props) {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{text}</span>
      <button
        className="text-red-500 hover:underline"
        onClick={() => removeTodo(index)}
      >
        Delete
      </button>
    </li>
  );
}
