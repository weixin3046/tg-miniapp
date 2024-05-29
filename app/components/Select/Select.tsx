"use client";
import { useState } from "react";

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import DialogPage from "../Dialog/Dialog";

export type SelectProps = {
  id: number;
  name: string;
};

export default function SelectPage({ options }: { options: SelectProps[] }) {
  const [selected, setSelected] = useState(options[1]);
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex w-full items-center" onClick={() => setOpen(true)}>
        <div className="font-bold text-sm text-gray-900">{selected.name}</div>
        <ChevronDownIcon
          className=" h-7 w-7 pl-1 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <DialogPage open={open} onClose={onClose}>
        <div className="flex gap-y-2 flex-wrap">
          {options.map((item) => (
            <div
              className="w-full p-3 rounded-lg bg-slate-400 flex justify-between items-center"
              key={item.id}
              onClick={() => {
                setSelected(item);
                onClose();
              }}
            >
              <div>{item.name}</div>

              {selected === item && (
                <div className="border border-slate-900 rounded-full">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogPage>
    </div>
  );
}
