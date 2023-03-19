import styled from 'styled-components'

export function Heading3({children, ...rest}) {
  return(
    <StyledHeading3>{children}</StyledHeading3>
  )
}

const StyledHeading3 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
`