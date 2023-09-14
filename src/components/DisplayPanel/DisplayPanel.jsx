import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"

const DisplayContent = styled.main`
	position: relative;
	padding: 1em;
	width: ${values.width};
	height: ${values.height};
	background: ${colors.white};
`

export default function DisplayPanel({className}) {
  return (
	<DisplayContent className={className}>
		DisplayPanel
	</DisplayContent>
  )
}
