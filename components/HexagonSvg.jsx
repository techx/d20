
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function HexagonSvg(props) {
  return (
    <Svg viewBox="10 10 80 80" {...props}>
      <Path d="M84.641 30 50 10 15.359 30v40L50 90l34.641-20z" />
    </Svg>
  )
}
