import React from "react";

const DuaLayout = ({ children, category_sidebar }) => {

  return (
    <div className="flex h-full">
      <div className="pb-10 w-[350px]">{category_sidebar}</div>
      <div className="flex-1 mx-6 pb-10 overflow-auto" id="content">{children}</div>
    </div>
  );
};

export default DuaLayout;
