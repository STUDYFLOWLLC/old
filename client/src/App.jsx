import React from 'react';
import { Layout } from 'antd';
import LeftSideBar from 'components/LeftSideBar';
import ClassSearch from 'components/ClassSearch/ClassSearchBar';

function App() {
  return (
    <Layout className="full-height">
      <Layout>
        <LeftSideBar />
        <Layout.Content>
          <ClassSearch />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
