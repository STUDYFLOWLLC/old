import React, { useState } from 'react'
import { Layout } from 'antd'
import Academics from 'components/Setup/Academics'
import StepsHeader from 'components/Setup/StepsHeader'
import './index.scss'

export default function Setup() {
  const [currentStep, setCurrentStep] = useState(0)

  const changeStep = current => {
    setCurrentStep(current)
  }

  return (
    <Layout className="h-100 bg-white">
      <StepsHeader currentStep={currentStep} changeStep={changeStep} />
      <Academics />
    </Layout>
  )
}
