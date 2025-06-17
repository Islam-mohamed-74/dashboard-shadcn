"use client";
import { DataTable } from "@/components/DataTable";
import PageTitel from "@/components/ui/PageTitel";
import React from "react";
import { Cell } from "recharts";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitel title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

/**
 * @typedef {Object} data
 * @property {string} category
 * @property {boolean | string} value
 */

/** @type {import("@/components/DataTable").ColumnDef[]} */
export const columns = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

// Payment data array
export const data = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: true,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Light",
  },
  // ...
];
