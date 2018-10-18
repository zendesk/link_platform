import { h, Component } from 'preact'
import { createComponent } from 'preact-fela'

const goodTitle = 'Success!'
const badTitle = 'Something went wrong!'

const goodColor = '#C9F8FF'
const badColor = '#FFB2B6'

const BannerContainer = createComponent(({ show, isGood }) => ({
  display: show ? 'block' : 'none',
  backgroundColor: isGood ? goodColor : badColor,
  border: '1px solid #DCDCDC',
  background: '#f3f3f3',
  borderRadius: '3px',
  borderColor: '#dbdbdb',
  padding: '8px 8px',
  minWidth: '200px',
  fontSize: '16px',
}))

const BannerText = createComponent({ isGood } => ({
  backgroundColor: isGood ? goodColor : badColor
}), 'span')

const Banner = ({ show, isGood}) => (
      <BannerContainer show={show} isGood={isGood} >
        <BannerText isGood={isGood}>{bannerTitle(isGood)}</BannerText>
      </BannerContainer>
    )
  

export default Banner
