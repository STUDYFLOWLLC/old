import React from 'react'
import AuthProvider from 'contexts/AuthContext'
import { Layout } from 'antd'
// import LeftSideBar from 'components/LeftSideBar'
import Setup from 'components/Setup'

function App() {
  return (
    <AuthProvider>
      <Layout className="h-100">
        <Layout>
          {/* <LeftSideBar /> */}
          <Layout.Content style={{ backgroundColor: 'white' }}>
            <Setup />
          </Layout.Content>
        </Layout>
      </Layout>
    </AuthProvider>
  )
}

export default App
