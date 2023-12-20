import { useState } from "react"
import styled from "styled-components"

const StyledApp = styled.div``

const BackDecor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-light-grayish-blue);
  height: 50vh;
  width: 100%;
  border-bottom-left-radius: 150px;
  z-index: -10;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 96rem;
  margin: 0 auto;
  z-index: 20;
  padding-inline: 2.4rem;
  padding-block: 6.4rem;
`

const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background: url("pattern-circles.svg");
  background-repeat: no-repeat;
  background-position: center;
  padding-block: 3.2rem;
`

const Heading = styled.h1`
  color: var(--color-dark-desaturated-blue);
  font-size: 2rem;
  text-align: center;
`

const Text = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 70%;
`

const PricingContainer = styled.div`
  max-width: 48rem;
  margin-top: 2.4rem;
  background-color: var(--color-white);
  border-radius: 12px;
  padding-block: 2.4rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 30em) {
    padding-block: 3.2rem;
    margin: 0 auto;
    margin-top: 2.4rem;
  }
`

const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  padding-inline: 2.4rem;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-inline: 3.2rem;
  }
`

const PageViews = styled.p`
  justify-self: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.2rem;

  @media (min-width: 30em) {
    align-self: center;
    justify-self: start;
  }
`

const Range = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    background-color: var(--color-light-grayish-blue);
    border-radius: 50px;
    height: 0.8rem;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: url("icon-slider.svg");
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -15px; /* Centers thumb on the track */
    background-color: var(--color-strong-cyan);
    height: 35px;
    width: 35px;
    border-radius: 50%;
    box-shadow: 0px 10px 20px rgb(165, 243, 235);
    transition: background-color 0.3s;

    &:hover {
      background-color: hsl(174, 86%, 35%);
    }
  }

  @media (min-width: 30em) {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
`

const Price = styled.p`
  justify-self: center;
  color: var(--color-dark-desaturated-blue);
  font-weight: 800;
  font-size: 3rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: 30em) {
    grid-column: 2 / -1;
  }
`

const Period = styled.span`
  color: var(--color-grayish-blue);
  font-weight: 600;
  font-size: 1.4rem;
`

const BillingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2.4rem;
  padding-right: 1.2rem;
`

const BillingType = styled.p`
  font-size: 1rem;
`

const DiscountTag = styled.p`
  background-color: var(--color-light-grayish-red);
  color: var(--color-light-red);
  font-size: 1rem;
  border-radius: 100px;
  padding-block: 0.2rem;
  padding-inline: 0.8rem;
`

const Line = styled.div`
  margin-top: 2.4rem;
  height: 2px;
  background-color: var(--color-light-grayish-blue);
`

const CtaContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (min-width: 30em) {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 3.2rem;
  }
`

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  @media (min-width: 30em) {
    align-items: flex-start;
  }
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

const FeatureIcon = styled.img``

const FeatureText = styled.p`
  font-size: 1.4rem;
`

const CtaButton = styled.button`
  background-color: var(--color-dark-desaturated-blue);
  color: var(--color-pale-blue);
  border: none;
  border-radius: 100px;
  padding-block: 0.8rem;
  padding-inline: 3.2rem;
  font-size: 1.4rem;
  transition: color 0.3s;

  &:hover {
    color: var(--color-white);
  }
`
const prices = [8, 12, 16, 24, 36]
const pageviews = ["10K", "50K", "100K", "500K", "1M"]

export default function App() {
  const [checked, setChecked] = useState(true)
  const [pageView, setPageView] = useState(pageviews[2])
  const [price, setPrice] = useState(prices[2])

  const priceYear = price * 12 - price * 12 * 0.25

  function handleSliderChange(e) {
    setPrice(prices[e.target.value])
    setPageView(pageviews[e.target.value])
  }

  return (
    <StyledApp>
      <BackDecor />
      <Container>
        <IntroTextBox>
          <Heading>Simple, traffic-based pricing</Heading>
          <Text>Sign-up for our 30-day trial. No credit card required. </Text>
        </IntroTextBox>
        <PricingContainer>
          <ProgressContainer>
            <PageViews>{pageView} pageviews</PageViews>
            <Range
              type="range"
              id="pageviews"
              name="pageviews"
              min="0"
              max={prices.length - 1}
              value={prices.indexOf(price)}
              onChange={handleSliderChange}
            />
            <Price>
              ${checked ? price.toFixed(2) : priceYear.toFixed(2)}
              <Period>{checked ? "/ month" : "/ year"}</Period>
            </Price>
          </ProgressContainer>
          <BillingContainer>
            <BillingType>Monthly Billing</BillingType>
            <label className="switch">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span className="slider round"></span>
            </label>
            <BillingType>Yearly Billing</BillingType>
            <DiscountTag>-25%</DiscountTag>
          </BillingContainer>
          <Line />
          <CtaContainer>
            <FeaturesList>
              <FeatureItem>
                <FeatureIcon src="icon-check.svg" alt="checkmark icon" />
                <FeatureText>Unlimited websites</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="icon-check.svg" alt="checkmark icon" />
                <FeatureText>100% data ownership</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="icon-check.svg" alt="checkmark icon" />
                <FeatureText>Email reports</FeatureText>
              </FeatureItem>
            </FeaturesList>
            <CtaButton>Start my trial</CtaButton>
          </CtaContainer>
        </PricingContainer>
      </Container>
    </StyledApp>
  )
}
