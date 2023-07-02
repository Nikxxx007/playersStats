import React, {FC} from 'react';

// antd
import {Layout} from 'antd';

// project import
import HeaderLayout from "./MainLayout/Header";

const MainLayout: FC = () => {
    return (
        <Layout>
            <HeaderLayout>
                <h1>Header</h1>
            </HeaderLayout>
        </Layout>
    );
};

export default MainLayout;