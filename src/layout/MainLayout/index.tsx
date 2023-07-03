import React, {FC} from 'react';

// antd
import {Layout} from 'antd';

// project import
import MainHeader from "./Header";
import MainSider from "./Sider";
import MainContent from "./MainContent";

const MainLayout: FC = () => {
    return (
        <Layout>
            <MainHeader />
            <Layout>
                <MainContent />
                <MainSider />
            </Layout>
        </Layout>
    );
};

export default MainLayout;