"use client";
import { DataTable } from "@/components/DataTable";
import PageTitel from "@/components/ui/PageTitel";
import React from "react";
import { Cell } from "recharts";

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitel title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

/**
 * @typedef {Object} data
 * @property {string} order
 * @property { "cancelled" |"pending" | "processing" | "shipped" | "delivered"} status
 * @property {string} lastOrder
 * @property {"string"} method
 */

/** @type {import("@/components/DataTable").ColumnDef[]} */
export const columns = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let statusClass = "";
      if (status === "cancelled") statusClass = "bg-red-100 ";
      else if (status === "pending") statusClass = "bg-yellow-100 ";
      else if (status === "processing") statusClass = "bg-blue-100 ";
      else if (status === "shipped" || status === "delivered")
        statusClass = "bg-green-100 ";

      return (
        <div
          className={`font-medium  w-fit py-2 px-4 rounded-lg ${statusClass}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    },
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
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "pending",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "processing",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "shipped",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "delivered",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "pending",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "shipped",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },
  {
    order: "order1",
    status: "cancelled",
    lastOrder: "2020/01/01",
    method: "Credit Card",
  },

  // ...
];
