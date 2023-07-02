import React from "react";

const sizeClasses = {
  txtMontserratBold26: "font-bold font-montserrat",
  txtMontserratBold36: "font-bold font-montserrat",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtMontserratMedium18Black900: "font-medium font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
