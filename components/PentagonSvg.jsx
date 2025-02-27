import { Svg, Path } from 'react-native-svg';

export default function PentagonSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="black"
        d="m2.47 10.42l3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28"
      ></Path>
    </Svg>
  )
}
