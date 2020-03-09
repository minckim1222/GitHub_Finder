import React, { useContext } from "react";
import AlertContext from "./context/alert/alertContext";
export default function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert ${alert.alertType}`}>
        {
          <i className='fa fa-info-circle'>
            {"  "}
            {alert.msg}
          </i>
        }
      </div>
    )
  );
}
