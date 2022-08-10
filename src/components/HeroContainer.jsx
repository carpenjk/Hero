import React from 'react'
import styled from 'styled-components'
import { getHeight, getWidth } from '@carpenjk/themeweaver'
import { getProp } from '@carpenjk/prop-x/css'
import HeroBanner from './heroBanner/HeroBanner'
import { BackgroundImage } from '@carpenjk/images'

const StyledHeroContainer = styled.div`
  position: ${getProp('position')};
  top: ${getProp('offsetTop', '0')};
  left: 0;
  right: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  width: ${getWidth({}, '100%')};
  height: ${getHeight({}, '100%')};
`

StyledHeroContainer.defaultProps = {
  position: 'relative',
  offsetTop: '0',
  backgroundImage: 'none'
}

const DEFAULT_TW = { semKey: 'hero' }

const HeroContainer = (props) => {
  const { image, tw, bannerLayout, bannerPos, ...remProps } = props
  const mergedTw = { ...DEFAULT_TW, ...tw }
  return (
    <StyledHeroContainer {...remProps} tw={mergedTw}>
      <BackgroundImage {...image}/>
      <HeroBanner
        tw={{ ...mergedTw, semKey: 'heroBanner' }}
        bannerPos={bannerPos}
      >
        {bannerLayout}
      </HeroBanner>
    </StyledHeroContainer>
  )
}

export default HeroContainer
