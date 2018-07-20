import React from 'react'
import BarWrapper from './BarWrapper'
import WideText from './WideText'
import WideLink from './WideLink'

export default props => (
  <BarWrapper>
    <WideLink verticalDown to="/about">
      about
    </WideLink>
    <WideLink verticalDown to="/sponsored">
      sponsored
    </WideLink>
    <div css={{ marginTop: 'auto' }}>
      <WideText verticalDown>share</WideText>
    </div>
  </BarWrapper>
)
