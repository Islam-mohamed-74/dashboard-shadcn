import React from "react";
import PropTypes from "prop-types";

export default function PageTitel({ title, className }) {
  return <h1 className="text-2xl font-semibold">{title}</h1>;
}

PageTitel.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
