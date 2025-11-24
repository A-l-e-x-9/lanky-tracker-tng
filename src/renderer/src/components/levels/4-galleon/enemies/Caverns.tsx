import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKaboom, useDefeatKlobber, useDefeatKosha } from '@renderer/hooks/enemies'
import { usePlayGalleon } from '@renderer/hooks/galleon'
import { useAnyKong } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const CavernsEnemies: React.FC = () => {
  const inStage = usePlayGalleon()
  const klobber = useDefeatKlobber()
  const kaboom = useDefeatKaboom()
  const kosha = useDefeatKosha()
  const anyKong = useAnyKong()
  return (
    <DropPool>
      <GalleonCheck
        id={4300}
        name="Chest Room Enemy 0"
        region="Galleon Caves"
        canGetLogic={inStage.in && klobber}
        canGetBreak={inStage.out && klobber}
      />
      <GalleonCheck
        id={4301}
        name="Chest Room Enemy 1"
        region="Galleon Caves"
        canGetLogic={inStage.in && kaboom.in}
        canGetBreak={inStage.out && kaboom.out}
      />
      <GalleonCheck
        id={4302}
        name="Vine Cannon Enemy"
        region="Galleon Caves"
        canGetLogic={inStage.in && kaboom.in}
        canGetBreak={inStage.out && kaboom.out}
      />
      <GalleonCheck
        id={4303}
        name="Cranky Cannon Enemy"
        region="Galleon Caves"
        canGetLogic={inStage.in && kaboom.in}
        canGetBreak={inStage.out && kaboom.out}
      />
      <GalleonCheck
        id={4304}
        name="Peanut Tunnel Enemy"
        region="Galleon Caves"
        canGetLogic={inStage.in && kosha.in}
        canGetBreak={inStage.out && kosha.out}
      />
      <GalleonCheck
        id={4306}
        name="Coconut Tunnel Enemy"
        region="Galleon Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </DropPool>
  )
}

export default CavernsEnemies
