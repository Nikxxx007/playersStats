import React, {FC} from 'react';

import {Menu, MenuProps} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import styled from "styled-components";

const StyledMenu: typeof Menu = styled(Menu)`
  height: 100%;
  border-right: 0;
` as any;

// ** temp item for testing
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const MenuLayout: FC = () => {
    return (
        <StyledMenu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items2}
        />
    );
};

export default MenuLayout;