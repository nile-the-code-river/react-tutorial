export default function Button({ children, ...props }) {
  return (
    <button
      className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-900"
      {...props}
    >
      {children}
    </button>
  );
}
