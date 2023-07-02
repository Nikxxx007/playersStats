import React, {FC} from 'react';

import {Layout} from 'antd';
import {LayoutProps} from 'antd/lib/layout'
import styled from "styled-components";

// project imports
import MenuLayout from "./SiderContent/MenuLayout";

const {Sider} = Layout

const StyledSider: typeof Sider = styled(Sider)<LayoutProps>`
  width: 200px;
` as any;

const MainSider: FC = () => {

    return (
        <StyledSider>
            <MenuLayout />
        </StyledSider>
    );
};

export default MainSider;