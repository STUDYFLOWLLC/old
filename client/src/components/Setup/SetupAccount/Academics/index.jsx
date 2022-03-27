import React, { useState } from 'react'
import { Layout, Typography } from 'antd'
import ClassSearchBox from 'components/Setup/SetupAccount/Academics/ClassSearch/ClassSearchBox'
import SchoolSearchBox from 'components/Setup/SetupAccount/Academics/SchoolSearch/SchoolSearchBox'
import TermInformation from 'components/Setup/SetupAccount/Academics/TermInformation'

export default function Academic() {
  const [current, setCurrent] = useState(0)
  const [selectedSchool, setSelectedSchool] = useState('')
  const [termInfo, setTermInfo] = useState([])

  return (
    <Layout.Content>
      <div className="bg-white d-flex">
        <div className="w-100 overflow-y d-flex flex-column justify-content-center">
          <Typography.Title id="academics" level={2}>
            Academics
          </Typography.Title>
          <SchoolSearchBox
            current={current}
            setCurrent={setCurrent}
            selectedSchool={selectedSchool}
            setSelectedSchool={setSelectedSchool}
            setTermInfo={setTermInfo}
          />
          <TermInformation
            current={current}
            setCurrent={setCurrent}
            school={selectedSchool}
            setTermInfo={setTermInfo}
          />
          <ClassSearchBox
            current={current}
            setCurrent={setCurrent}
            school={selectedSchool}
            termInfo={termInfo}
          />
        </div>
      </div>
    </Layout.Content>
  )
}
