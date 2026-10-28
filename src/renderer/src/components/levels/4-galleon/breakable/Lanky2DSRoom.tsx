import BreakablePool from '@renderer/components/pools/Breakable'
import { useLanky2DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const Chests2DS: React.FC = () => {
const canDo = useLanky2DoorShipGb()
return (
  <BreakablePool>
    <GalleonCheck
      id={46710}
      name="Chest in Lanky's 2DS room blocking his path to his GB"
      region="Shipyard Outskirts"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    <GalleonCheck
      id={46711}
      name="Empty Lanky 2DS chest 0"
      region="Shipyard Outskirts"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    <GalleonCheck
      id={46712}
      name="Empty Lanky 2DS chest 1"
      region="Shipyard Outskirts"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
    <GalleonCheck
      id={46713}
      name="Empty Lanky 2DS chest 2"
      region="Shipyard Outskirts"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </BreakablePool>
)
}

export default Chests2DS
