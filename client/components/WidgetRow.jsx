import React from "react";

const WidgetRow = ({ Icon, title, logout }) => {
  return (
    <>
      {logout ? (
        <div className="flex items-center space-x-3 p-3 hover:bg-gray-200 rounded-xl cursor-pointer" onClick={() => logout()}>
          {Icon && <Icon className="h-8 w-8 text-blue-500" />}
          <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
      ) : (
        <div className="flex items-center space-x-3 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
          {Icon && <Icon className="h-8 w-8 text-blue-500" />}
          <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
      )}
    </>
  );
};

export default WidgetRow;
