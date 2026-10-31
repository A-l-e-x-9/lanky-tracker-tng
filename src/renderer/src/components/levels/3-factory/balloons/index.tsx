import BalloonPool from '@renderer/components/pools/Balloons'
import StartBalloons from './Start'
import ProdRoomBalloons from './ProdRoom'
import StarcadeBalloons from './Starcade'
import TestingBalloons from './Testing'
import RNDBalloons from './RND'

const FactoryBalloons: React.FC = () => {
  return (
    <BalloonPool>
      <StartBalloons />
      <ProdRoomBalloons />
      <StarcadeBalloons />
      <TestingBalloons />
      <RNDBalloons />
    </BalloonPool>
  )
}

export default FactoryBalloons
