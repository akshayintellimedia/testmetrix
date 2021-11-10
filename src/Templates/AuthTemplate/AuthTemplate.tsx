import React,{FC} from 'react';
import './AuthTemplate.less';
interface Children {
  children?:any
}
export const AuthTemplate: FC<Children>  = ({ children }) => {
  return (
    <div className="authSec">
      <div className="form-signin">{children}</div>
    </div>
  );
};