import React from "react";

import { LucideIcon } from "lucide-react";

import PropTypes from "prop-types";

export default function Card({ lable, icon: Icon, amount, discription }) {
  return (
    <CardContent>
      <section className="flex items-center justify-between gap-2">
        {/* label */}
        <p className="text-sm text-muted-foreground">{lable}</p>

        {/* icon */}
        <Icon className="h-4 w-4 text-muted-foreground" />
      </section>
      <section className="flex flex-col gap-1">
        {/* amount */}
        <p className="text-lg font-semibold">{amount}</p>
        {/* discription */}
        <p className="text-xs text-muted-foreground">{discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props) {
  return (
    <div
      {...props}
      className={`flex flex-col gap-3 rounded-md p-5 shadow ${
        props.className || ""
      }`}
    />
  );
}

Card.propTypes = {
  lable: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  amount: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
};
