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
        canGetLogic={inStage && klobber}
      />
      <GalleonCheck
        id={4301}
        name="Chest Room Enemy 1"
        region="Galleon Caves"
        canGetLogic={inStage && kaboom.in}
        canGetBreak={inStage && kaboom.out}
      />
      <GalleonCheck
        id={4302}
        name="Vine Cannon Enemy"
        region="Galleon Caves"
        canGetLogic={inStage && kaboom.in}
        canGetBreak={inStage && kaboom.out}
      />
      <GalleonCheck
        id={4303}
        name="Cranky Cannon Enemy"
        region="Galleon Caves"
        canGetLogic={inStage && kaboom.in}
        canGetBreak={inStage && kaboom.out}
      />
      <GalleonCheck
        id={4304}
        name="Peanut Tunnel Enemy"
        region="Galleon Caves"
        canGetLogic={inStage && kosha.in}
        canGetBreak={inStage && kosha.out}
      />
      <GalleonCheck
        id={4306}
        name="Coconut Tunnel Enemy"
        region="Galleon Caves"
        canGetLogic={inStage && anyKong}
      />
    </DropPool>
  )
}

export default CavernsEnemies
