import React, { useState, useEffect } from 'react';

const Sidebar = ({ headerTitle, headerButton, children }) => {
  const [sidebarToggle, setSidebarTogge] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSidebarTogge(true);
    }, 100);
  }, []);

  return (
    <div
      className={`${
        sidebarToggle ? ' translate-x-0 ' : '-translate-x-[92%] '
      } fixed top-0 left-0 w-[35rem] h-screen ease-in-out duration-500 bg-peach20 text-white `}>
      <div className="flex flex-row content-center justify-between w-full h-12 bg-heroblue text-white">
        <button className="w-12 h-12">{headerButton}</button>
        <h1 className="font-bold text-[25px] leading-loose text-left ml-5">{headerTitle}</h1>

        <button
          onClick={() => setSidebarTogge((e) => !e)}
          className="w-12 h-12 flex flex-col justify-between content-center p-3">
          <div className="w-full h-1 bg-white" />
          <div className="w-full h-1 bg-white" />
          <div className="w-full h-1 bg-white" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default Sidebar;
