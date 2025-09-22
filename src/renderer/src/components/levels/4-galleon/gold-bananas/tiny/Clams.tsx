import MiscPool from '@renderer/src/components/pools/Misc'
import { useTinyClams } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../../check'

const TreasureClams: React.FC = () => {
  const clams = useTinyClams()
  return (
    <MiscPool>
      <GalleonCheck
        id={4034}
        name="Galleon Tiny Treasure Chest, Center Clam"
        region="Treasure Room"
        canGetLogic={clams.in}
        canGetBreak={clams.out}
      />
      <GalleonCheck
        id={4035}
        name="Galleon Tiny Treasure Chest, Front Left Clam"
        region="Treasure Room"
        canGetLogic={clams.in}
        canGetBreak={clams.out}
      />
      <GalleonCheck
        id={4036}
        name="Galleon Tiny Treasure Chest, Back Left Clam"
        region="Treasure Room"
        canGetLogic={clams.in}
        canGetBreak={clams.out}
      />
      <GalleonCheck
        id={4037}
        name="Galleon Tiny Treasure Chest, Back Right Clam"
        region="Treasure Room"
        canGetLogic={clams.in}
        canGetBreak={clams.out}
      />
      <GalleonCheck
        id={4038}
        name="Galleon Tiny Treasure Chest, Front Right Clam"
        region="Treasure Room"
        canGetLogic={clams.in}
        canGetBreak={clams.out}
      />
    </MiscPool>
  )
}

export default TreasureClams
