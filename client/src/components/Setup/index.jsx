import React, { useState } from 'react'
import { Layout } from 'antd'
import StepsHeader from 'components/Setup/StepsHeader'
import SetupAccount from 'components/Setup/SetupAccount'
import './index.scss'

export default function Setup() {
  const [currentStep, setCurrentStep] = useState(0)

  const changeStep = current => {
    setCurrentStep(current)
  }

  return (
    <Layout className="h-100 bg-white">
      <StepsHeader currentStep={currentStep} changeStep={changeStep} />
      {currentStep === 1 ? <SetupAccount /> : <span />}
    </Layout>
  )
}
