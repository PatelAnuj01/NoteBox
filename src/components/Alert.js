import React from 'react';

export const Alert = (props) => {
  return (
    <div style={{ height: '50px' }}>
      {props.alert && props.alert.type && props.alert.msg && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};
