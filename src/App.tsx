import React, {FC} from 'react';

// antd imports
import {ConfigProvider} from "antd";

// project imports
import {config} from "./themes";
import Routes from "./routes";

const App: FC = () => {

  return (
    <ConfigProvider theme={config}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
