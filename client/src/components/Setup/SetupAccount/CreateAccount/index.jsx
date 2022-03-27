import React from 'react'
import { Typography } from 'antd'
import GoogleLogin from 'components/Authentication/GoogleLogin'

export default function CreateAccount() {
  return (
    <div>
      <Typography.Title id="create-account" level={2}>
        Create Account
      </Typography.Title>
      <div className="d-flex justify-content-center">
        <GoogleLogin />
      </div>
    </div>
  )
}
