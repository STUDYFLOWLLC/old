import React from 'react'
import { Layout, Steps, Divider } from 'antd'
import { BookOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons'

export default function StepsHeader({ currentStep, changeStep }) {
  return (
    <Layout.Header className="steps-header">
      <Steps
        size="small"
        current={currentStep}
        onChange={current => changeStep(current)}
      >
        <Steps.Step
          title="How it works"
          description="Learn the basics of Studyflow."
          icon={<BookOutlined />}
        />
        <Steps.Step
          title="Setup Your Account"
          description="Enter academics and configure Studyflow."
          icon={<RocketOutlined />}
        />

        <Steps.Step
          title="Get Connected"
          description="Connect with other Studyflow users."
          icon={<TeamOutlined />}
          disabled={currentStep < 2}
        />
      </Steps>
      <Divider />
    </Layout.Header>
  )
}
