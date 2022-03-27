import React from 'react'
import Academics from 'components/Setup/SetupAccount/Academics'
import Configure from 'components/Setup/SetupAccount/Configure'
import AnchorSidebar from 'components/Setup/SetupAccount/Academics/AnchorSidebar'
import CreateAccount from 'components/Setup/SetupAccount/CreateAccount'

export default function SetupAccount() {
  return (
    <div style={{ marginLeft: '30px' }} className="d-flex">
      <AnchorSidebar />
      <div
        style={{ marginLeft: '20px' }}
        className="w-100 d-flex flex-column justify-content-center"
      >
        <CreateAccount />
        <Academics />
        <Configure />
      </div>
    </div>
  )
}
