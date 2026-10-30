import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useChunky5DoorGb, useDiddy5DoorGb, useLanky5DoorGb } from '@renderer/hooks/aztec'

export const Diddy5DTBalloon: React.FC = () => {
const canReachDiddy5DT = useDiddy5DoorGb
  return (
    <BalloonPool>
      <AztecCheck
        id={26904}
        name="Diddy balloon opposite his GB in his 5DT room"
        region="5-Door Temple"
        canGetLogic={canReachDiddy5DT.in}
        canGetBreak={canReachDiddy5DT.out}
      />
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
