import React, {FC} from 'react';

import {Layout} from 'antd';
import {LayoutProps} from 'antd/lib/layout'
import styled from 'styled-components';

const {Header} = Layout

const StyledHeader: typeof Header = styled(Header)<LayoutProps>`
  display: flex;
  align-items: center;
` as any;

interface HeaderProps {
    children?: React.ReactElement | React.ReactNode
}

const HeaderLayout: FC<HeaderProps> = ({children}) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
};

export default HeaderLayout;