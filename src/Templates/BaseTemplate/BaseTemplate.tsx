import React,{FC} from 'react';
import './BaseTemplate.less';
interface Children {
  children?:any
}
export const BaseTemplate: FC<Children>  = ({ children }) => {
  return (
    <div className="authSec">
      <div className="form-signin">{children}</div>
    </div>
  );
};
