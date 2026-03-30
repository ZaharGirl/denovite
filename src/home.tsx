// deno-lint-ignore-file no-sloppy-imports

import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

import type { DNDItemData } from "@/components/dnd-item";
import { DNDItem } from "@/components/dnd-item";

const sectionData: DNDItemData[] = [
  { id: 1, orderId: 2, title: "Test1" },
  { id: 2, orderId: 3, title: "Test2" },
  { id: 3, orderId: 1, title: "Test3" },
];

const sortedSectionData = [...sectionData].sort(
  (a, b) => a.orderId - b.orderId,
);

export function Home() {
  const [items, setItems] = useState(
    Array.from(sortedSectionData, (item) => item.id),
  );

  console.log(items);

  return (
    <div className="p-4">
      <DragDropProvider
        onDragEnd={(event) => {
          setItems((items) => move(items, event));
        }}
      >
        <div className="flex flex-col items-center gap-5">
          {items.map((id, index) => (
            <DNDItem
              key={id}
              id={id}
              index={index}
              section={sectionData[id - 1]}
            />
          ))}
        </div>
      </DragDropProvider>
    </div>
  );
}

export default Home;
