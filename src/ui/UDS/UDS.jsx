import React from "react";
import "./UDS.scss";

function UDS({ children, className = "", ...props }) {
  return (
    <div className={`uds--container ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

UDS.Menu = function UDSMenu({ children, ...props }) {
  return (
    <div className="uds--menu" {...props}>
      {children}
    </div>
  );
};

UDS.Content = function UDSContent({ children, ...props }) {
  return (
    <div className="uds--content" {...props}>
      {children}
    </div>
  );
};

UDS.Listview = function UDSListview({ children, ...props }) {
  return (
    <div className="uds--listview" {...props}>
      {children}
    </div>
  );
};

UDS.Main = function UDSMain({ children, ...props }) {
  return (
    <div className="uds--main" {...props}>
      {children}
    </div>
  );
};

UDS.Panel = function UDSPanel({ children, ...props }) {
  return (
    <div className="uds--panel" {...props}>
      {children}
    </div>
  );
};

export default UDS;
