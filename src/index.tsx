import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// antd imports
import {ConfigProvider} from "antd";

// project imports
import {config} from "./themes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider theme={config}>
        <App />
    </ConfigProvider>
);
