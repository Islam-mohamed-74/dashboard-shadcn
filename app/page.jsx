"use client";
import BarChart from "@/components/ui/BarChart";
import Card, { CardContent } from "@/components/ui/Card";
import PageTitel from "@/components/ui/PageTitel";
import SalesCard from "@/components/ui/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";
const cardData = [
  {
    label: "Total Revenue",
    amount: "$45,231",
    discription: "From all sources",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$45,231",
    discription: "From all sources",
    icon: Users,
  },

  {
    label: "Total Revenue",
    amount: "$45,231",
    discription: "From all sources",
    icon: CreditCard,
  },
  {
    label: "Total Revenue",
    amount: "$45,231",
    discription: "From all sources",
    icon: Activity,
  },
];

const userSalesData = [
  {
    name: "olivia martin",
    email: "olivia.martin@gamil.com",
    saleAmount: "$45,231",
  },
  {
    name: "ISLAM HASSAN",
    email: "olivia.martin@gamil.com",
    saleAmount: "$45,231",
  },
  {
    name: "ahmed HASSAN",
    email: "olivia.martin@gamil.com",
    saleAmount: "$45,231",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitel title="Dashboard" />
      <section
        className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
      sm:grid-cols-2 xl:grid-cols-4"
      >
        {cardData.map((d, index) => {
          return (
            <Card
              key={index}
              amount={d.amount}
              icon={d.icon}
              lable={d.label}
              discription={d.discription}
            />
          );
        })}
      </section>
      <section className="grid grid-colos-1 gap-4 lg:grid-cols-2 transition-all">
        <CardContent>
          <p className="p-2 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((d, i) => (
            <SalesCard key={i} usersSalesData={d} />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
