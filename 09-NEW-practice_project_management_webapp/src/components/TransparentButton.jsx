export default function TransparentButton({ children, ...props }) {
  return (
    <button className="ml-auto hover:text-red-600 p-3" {...props}>
      {children}
    </button>
  );
}
