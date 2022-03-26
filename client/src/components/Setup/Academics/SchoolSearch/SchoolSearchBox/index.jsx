import React from 'react'
import { Layout, Typography } from 'antd'
import ClassSearchBar from 'components/Setup/Academics/ClassSearch/ClassSearchBar'

export default function SchoolSearchBox() {
  const hasClassSupport = true
  return (
    <Layout.Content
      id="select-school"
      className="bg-white h-100 d-flex justify-content-center margin-50"
    >
      <div className="d-flex flex-column align-items-center">
        <Typography.Title level={3}>Select School</Typography.Title>
        {hasClassSupport ? (
          <p className="text-muted">
            Studyflow supports &apos;s class roster. Choose up to 8 classes.
          </p>
        ) : (
          <p className="text-muted">
            Studyflow does not support &apos;s class roster. Enter up to 8
            classes.
          </p>
        )}
        <ClassSearchBar />
      </div>
    </Layout.Content>
  )
}
