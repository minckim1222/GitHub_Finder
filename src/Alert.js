import React from "react";

export default function Alert({ alert }) {
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
