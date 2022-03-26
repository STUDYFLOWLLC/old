import React from 'react'
import { Layout } from 'antd'
// import LeftSideBar from 'components/LeftSideBar'
import Setup from 'components/Setup'

function App() {
  return (
    <Layout className="h-100">
      <Layout>
        {/* <LeftSideBar /> */}
        <Layout.Content style={{ backgroundColor: 'white' }}>
          <Setup />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default App
