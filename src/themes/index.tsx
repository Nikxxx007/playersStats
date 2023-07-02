import React from 'react';

import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export const config: ThemeConfig = {
    // algorithm: theme.darkAlgorithm,
    components: {
      Layout: {
          // ** figure out how to get specific layout components - Heading.. if possible
      }
    },
    token: {
        colorPrimary: '#1890ff',
        colorPrimaryBg: '#e6f7ff',
    },
};