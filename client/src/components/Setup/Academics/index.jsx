import React from 'react'
import { Layout, Anchor } from 'antd'
import ClassSearchBox from 'components/Setup/Academics/ClassSearch/ClassSearchBox'
import SchoolSearchBox from './SchoolSearch/SchoolSearchBox'

export default function Academic() {
  return (
    <Layout.Content>
      <div style={{ paddingLeft: '20px' }} className="bg-white d-flex">
        <Anchor>
          <Anchor.Link
            href="#components-anchor-demo-basic"
            title="Create your account"
          >
            <Anchor.Link href="$igj;a" title="Login with Google" />
            <Anchor.Link href="$igj;a" title="Username" />
            <Anchor.Link href="$igj;a" title="Profile Picture" />
          </Anchor.Link>
          <Anchor.Link href="#enter-academics" title="Academic Information">
            <Anchor.Link href="#select-school" title="Select School" />
            <Anchor.Link href="#term-information" title="Term Information" />
            <Anchor.Link href="#select-class" title="Select Classes" />
          </Anchor.Link>
          <Anchor.Link href="#API" title="Configure your Studyflow">
            <Anchor.Link href="dfhas" title="Visibility Preferences" />
            <Anchor.Link href="fhda" title="Automation" />
          </Anchor.Link>
        </Anchor>
        <div className="w-100 overflow-y d-flex flex-column justify-content-center">
          <SchoolSearchBox />
          <ClassSearchBox />
        </div>
      </div>
    </Layout.Content>
  )
}
