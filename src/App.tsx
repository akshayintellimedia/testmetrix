import React, { FC } from 'react';
import { Button } from "antd";
// import 'antd/dist/antd.css';
import "./App.less";
import { AuthTemplate } from './Templates/AuthTemplate';
import { CustIcon } from './Component/Svgs/Svgs';


const App: FC = () => (
  
  <main>
  <AuthTemplate>
    {/* <Login /> */}
    <Button type='primary'>button</Button>
    <CustIcon type="clock-1"/>
  </AuthTemplate>
</main>
);

export default App;
