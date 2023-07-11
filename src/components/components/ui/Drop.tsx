"use client";

import * as React from "react";

import { cn } from "./cn";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/components/ui/popover";
import { Check, CaretUpDown } from "@phosphor-icons/react";

const Employees = [
  {
    value: "thanuja.irugula@warriorsgrp.com",
    label: "thanuja.irugula@warriorsgrp.com",
  },
  {
    value: "sudha@warriorsgrp.com",
    label: "sudha@warriorsgrp.com",
  },
  {
    value: "daniel@warriorsgrp.com",
    label: "daniel@warriorsgrp.com",
  },
  {
    value: "rudra@warriorsgrp.com",
    label: "rudra@warriorsgrp.com",
  },
  {
    value: "peter@warriorsgrp.com",
    label: "peter@warriorsgrp.com",
  },
  {
    value: "hruchitha@warriorsgrp.com",
    label: "hruchitha@warriorsgrp.com",
  },
  {
    value: "sandhya@warriorsgrp.com",
    label: "sandhya@warriorsgrp.com",
  },
  {
    value: "kiran@warriorsgrp.com",
    label: "kiran@warriorsgrp.com",
  },
  {
    value: "chandra@warriorsgrp.com",
    label: "chandra@warriorsgrp.com",
  },
];
interface Props {
  onC: (val: string) => void;
}

export default function Drop({ onC }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between text-sm flex border p-2 rounded-md border-formBack bg-formBack"
        >
          {value
            ? Employees.find((Employee) => Employee.value === value)?.label
            : "Select Employee"}
          <CaretUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 bg-formBack backdrop-blur-md">
        <Command>
          <CommandInput placeholder="Select employee" />
          <CommandEmpty>No Employee found.</CommandEmpty>
          <CommandGroup>
            {Employees.map((Employee) => (
              <CommandItem
                className="text-white bg-transparent m-2 cursor-pointer hover:bg-inputBack text-sm"
                key={Employee.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  onC(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === Employee.value
                      ? "opacity-100 text-white "
                      : "opacity-0"
                  )}
                />
                {Employee.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
