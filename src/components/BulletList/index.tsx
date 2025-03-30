export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        return (
          <li
            key={item.trim()}
            className="flex items-center gap-2 before:content-[''] before:block before:min-w-4 before:min-h-4 before:w-4 before:h-4 before:bg-[url('/list-check.png')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
