import CaveEnemies from '../enemies/Caves'
import Minecart from '../gold-bananas/diddy/Minecart'
import DiddyConveyorBalloon from '../balloons/Mine'

const MineChecks: React.FC = () => {
return (
  <>
    <Minecart />
    <DiddyConveyorBalloon />
    <CaveEnemies />
  </>
)
}

export default MineChecks
