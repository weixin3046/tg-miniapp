"use client";

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Image from "next/image";
import DialogPage from "../Dialog/Dialog";

export type TokenProps = {
  id: number;
  name: string;
  icon: string;
};

export default function TokenSelect({ options }: { options: TokenProps[] }) {
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
      <div className="flex items-center">
        <div className="flex-none">总金额</div>
        <input
          type="text"
          className="text-right bg-slate-600 mx-1  flex-auto outline-none"
        />
        <div className="flex items-center " onClick={onOpen}>
          {selected.name}
          <ChevronDownIcon
            className=" h-7 w-7 pl-1 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <DialogPage open={open} onClose={onClose} title="选择币总">
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
