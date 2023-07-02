import React, {FC} from 'react';

// antd
import {Layout} from 'antd';
import styled from "styled-components";
import {LayoutProps} from "antd/lib/layout";

const {Content} = Layout

const StyledLayout: typeof Layout = styled(Layout)<LayoutProps>`
  padding: 0 24px 24px
` as any;

const StyledContent: typeof Content = styled(Content)<LayoutProps>`
  padding: 24px;
  margin: 0;
  min-height: 280px;
` as any;

const ContentLayout: FC = () => {
    return (
        <StyledLayout>
            <StyledContent>
                Content
            </StyledContent>
        </StyledLayout>
    );
};

export default ContentLayout;