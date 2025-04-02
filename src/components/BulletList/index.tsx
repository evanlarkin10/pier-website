export interface BulletListItem {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface BulletListProps {
  items: (string | BulletListItem)[];
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        const text = typeof item === "string" ? item : item.text;
        const key = text.trim();

        const baseClassName =
          "flex font-inter items-center gap-2 before:content-[''] before:block before:min-w-4 before:min-h-4 before:w-4 before:h-4 before:bg-[url('/list-check.png')] before:bg-contain before:bg-no-repeat before:bg-center";

        if (typeof item === "string") {
          return (
            <li key={key} className={baseClassName}>
              {text}
            </li>
          );
        }

        const content = (
          <li
            key={key}
            className={`${baseClassName} ${
              item.onClick || item.href
                ? "cursor-pointer text-secondary underline"
                : ""
            }`}
          >
            {text}
          </li>
        );

        if (item.href) {
          return (
            <a key={key} href={item.href}>
              {content}
            </a>
          );
        }

        if (item.onClick) {
          return (
            <div key={key} onClick={item.onClick}>
              {content}
            </div>
          );
        }

        return content;
      })}
    </ul>
  );
}
