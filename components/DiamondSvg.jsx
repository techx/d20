import { Svg, Path } from 'react-native-svg';

export default function DiamondSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props} >
      <Path fill="black" d="M2 32L32 2l29.999 30l-30 30z"></Path>
    </Svg>
  )
}
