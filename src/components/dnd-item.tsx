import { useRef, useState } from "react";
import { useSortable } from "@dnd-kit/react/sortable";

import "./dnd-item.css";

export type DNDItemData = {
  id: number;
  orderId: number;
  title: string;
};

export function DNDItem({
  id,
  index,
  section,
}: {
  id: number;
  index: number;
  section: DNDItemData | undefined;
}) {
  const [element, setElement] = useState<Element | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const { isDragging } = useSortable({ id, index, element, handle: handleRef });

  return (
    <div
      ref={setElement}
      className="item flex-col w-full md:w-1/2"
      data-shadow={isDragging || undefined}
    >
      <div className="flex justify-between items-center w-full mt-2">
        <p className="text-3xl">{section?.title}</p>
        <button type="button" ref={handleRef} className="handle" />
      </div>
      <div>{section?.title}</div>
      <div>{section?.id}</div>
    </div>
  );
}