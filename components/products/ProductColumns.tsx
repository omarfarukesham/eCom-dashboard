"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";
import { Edit } from "lucide-react";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Price ($)",
  },
  {
    accessorKey: "expense",
    header: "Expense ($)",
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  // },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center space-x-4">
        {/* Edit Button */}
        <Link href={`/products/${row.original._id}`} passHref>
          <button
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
            aria-label="Edit"
          >
            <Edit className="h-10 w-10 bg-blue-500 p-2 text-white rounded-lg" />
          </button>
        </Link>
        {/* Delete Button */}
        <Delete item="product" id={row.original._id} />
      </div>
    ),
  },
];
