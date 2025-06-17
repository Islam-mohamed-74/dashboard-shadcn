"use client";
import { DataTable } from "@/components/DataTable";
import PageTitel from "@/components/ui/PageTitel";
import React from "react";
import { Cell } from "recharts";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitel title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

/**
 * @typedef {Object} data
 * @property {string} name
 * @property {string} email
 * @property {string} lastOrder
 * @property {"string"} method
 */

/** @type {import("@/components/DataTable").ColumnDef[]} */
export const columns = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Payment Method",
  },
];

// Payment data array
export const data = [
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    name: "islam mohamed",
    email: "example@gmail.com",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  // ...
];
