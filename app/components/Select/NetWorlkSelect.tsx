"use client";

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Image from "next/image";
import DialogPage from "../Dialog/Dialog";

export type NetworkProps = {
  id: number;
  name: string;
  icon: string;
};

export default function NetWorlkSelect({
  options,
}: {
  options: NetworkProps[];
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center" onClick={onOpen}>
        <div>网络</div>
        <div className="flex items-center">
          {selected.name}
          <ChevronDownIcon
            className=" h-7 w-7 pl-1 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <DialogPage open={open} onClose={onClose} title="选择网络">
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
              <div className="flex gap-x-1 items-center">
                <Image src={item.icon} alt="icon" className="w-5 h-5" />
                <div>{item.name}</div>
              </div>

              {selected === item && (
                <div className="border border-slate-900 rounded-full">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogPage>
    </>
  );
}
