import React, {FC} from 'react';

// antd
import {Layout} from 'antd';

// project import
import HeaderLayout from "./Header";
import MainSider from "./Sider";
import ContentLayout from "./ContentLayout";

const MainLayout: FC = () => {
    return (
        <Layout>
            <HeaderLayout>
                <h1>Header</h1>
            </HeaderLayout>
            <Layout>
                <ContentLayout />
                <MainSider />
            </Layout>
        </Layout>
    );
};

export default MainLayout;