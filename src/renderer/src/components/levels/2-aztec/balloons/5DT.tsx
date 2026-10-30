import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
//import { useChunky5DoorGb, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useTiny5DoorGb } from '@renderer/hooks/aztec'

export const Diddy5DTBalloon: React.FC = () => {
  return (
    <BalloonPool>
    </BalloonPool>
  )
}

export const Lanky5DTBalloon: React.FC = () => {
  return (
    <BalloonPool>
    </BalloonPool>
  )
}

export const Chunky5DTBalloons: React.FC = () => {
  return (
    <BalloonPool>
    </BalloonPool>
  )
}

const FDTBalloons: React.FC = () => {
  return (
    <BalloonPool>
      <Diddy5DTBalloon />
      <Lanky5DTBalloon />
      <Chunky5DTBalloons />
    </BalloonPool>
  )
}

export default FDTBalloons
