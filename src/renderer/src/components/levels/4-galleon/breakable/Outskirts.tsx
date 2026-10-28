import BreakablePool from '@renderer/components/pools/Breakable'
import { useGalleonOutskirts } from '@renderer/hooks/galleon'
import { useLanky, useDive } from '@renderer/hooks/kongs' //with no Enguarde checks in the Outskirts, we have to explicitly specify these, whereas we didn't with the Lighthouse breakables due to the presence of the Chest GB
import GalleonCheck from '../check'

const Chests5DS: React.FC = () => { //this SHOULD be called "5DSChests", but the language has some kind of hangup with starting these names with a number. Fuck me with a Mario pipe! <^>(-_-;)<^>
const canReachShipyard = useGalleonOutskirts()
const hasDiving = useDive()
const hasLanky = useLanky()
  return (
    <BreakablePool>
      <GalleonCheck
        id={46705}
        name="5DS Chest 0: Facing the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasDiving.in && hasLanky}
        canGetBreak={canReachShipyard.out && hasDiving.out && hasLanky}
      />
      <GalleonCheck
        id={46706}
        name="5DS Chest 1: The &quot;empty&quot; chest in vanilla"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasDiving.in && hasLanky}
        canGetBreak={canReachShipyard.out && hasDiving.out && hasLanky}
      />
      <GalleonCheck
        id={46707}
        name="5DS Chest 2: Facing Tiny's Foghorn"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasDiving.in && hasLanky}
        canGetBreak={canReachShipyard.out && hasDiving.out && hasLanky}
      />
      <GalleonCheck
        id={46708}
        name="5DS Chest 3: Facing the Mechfish Agenda"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasDiving.in && hasLanky}
        canGetBreak={canReachShipyard.out && hasDiving.out && hasLanky}
      />
      <GalleonCheck
        id={46709}
        name="Chest near the hole the Mechfish comes out of"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasDiving.in && hasLanky}
        canGetBreak={canReachShipyard.out && hasDiving.out && hasLanky}
      />
    </BreakablePool>
  )
}

export default Chests5DS
