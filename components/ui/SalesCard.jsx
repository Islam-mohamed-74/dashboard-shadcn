import React from "react";
export default function SalesCard(props) {
  //   const Sales = {
  //     name: "string",
  //     email: string,
  //     saleAmount: string,
  //   };
  const { usersSalesData } = props;

  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${usersSalesData.name}`}
            alt="avatar"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="text-sm">
          <p>{usersSalesData.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {usersSalesData.email}
          </div>
        </div>
      </section>
      <p>{usersSalesData.saleAmount}</p>
    </div>
  );
}
