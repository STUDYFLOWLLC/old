import React from 'react'
import { Layout, Typography } from 'antd'
import ClassSearchBar from 'components/Setup/Academics/ClassSearch/ClassSearchBar'
import './index.scss'

export default function ClassSearchBox({ school }) {
  const hasClassSupport = true
  return (
    <Layout.Content
      id="select-class"
      className="bg-white h-100 d-flex justify-content-center"
    >
      <div className="d-flex flex-column align-items-center">
        <Typography.Title level={3}>Enter your classes</Typography.Title>
        {hasClassSupport ? (
          <p className="text-muted">
            Studyflow supports {school}&apos;s class roster. Choose up to 8
            classes.
          </p>
        ) : (
          <p className="text-muted">
            Studyflow does not support {school}&apos;s class roster. Enter up to
            8 classes.
          </p>
        )}
        <ClassSearchBar />
      </div>
    </Layout.Content>
  )
}
