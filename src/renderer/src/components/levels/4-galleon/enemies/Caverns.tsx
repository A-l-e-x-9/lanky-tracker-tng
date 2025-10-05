import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKaboom, useDefeatKlobber, useDefeatKosha } from '@renderer/hooks/enemies'
import { usePlayGalleon } from '@renderer/hooks/galleon'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const CavernsEnemies: React.FC = () => {
  const inStage = usePlayGalleon()
  const klobber = useDefeatKlobber()
  const kaboom = useDefeatKaboom()
  const kosha = useDefeatKosha()
  const anyKong = useAnyKong()
  const hasCamera = useCamera()
  return (
    <DropPool>
      <GalleonCheck
        id={4300}
        name="Chest Room Enemy 0"
        region="Galleon Caverns"
        canGetLogic={inStage && klobber}
      />
      <GalleonCheck
        id={4301}
        name="Chest Room Enemy 1"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom.in}
        canGetBreak={inStage && kaboom.out}
      />
      <GalleonCheck
        id={4302}
        name="Vine Cannon Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom.in}
        canGetBreak={inStage && kaboom.out}
      />
      <GalleonCheck
        id={4303}
        name="Cranky Cannon Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom.in}
        canGetBreak={inStage && kaboom.out}
      />
      <GalleonCheck
        id={4304}
        name="Peanut Tunnel Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && kosha.in}
        canGetBreak={inStage && kosha.out}
      />
      <GalleonCheck
        id={4306}
        name="Coconut Tunnel Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && anyKong}
      />
      <GalleonCheck
        id={4400}
        name="Photo of Chest Room Enemy 0"
        region="Galleon Caverns"
        canGetLogic={inStage && klobber && hasCamera}
      />
      <GalleonCheck
        id={4401}
        name="Photo of Chest Room Enemy 1"
        region="Galleon Caverns"
        canGetLogic={inStage && hasCamera}
      />
      <GalleonCheck
        id={4402}
        name="Photo of Vine Cannon Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && hasCamera}
      />
      <GalleonCheck
        id={4403}
        name="Photo of Cranky Cannon Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && hasCamera}
      />
      <GalleonCheck
        id={4404}
        name="Photo of Peanut Tunnel Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && hasCamera}
      />
      <GalleonCheck
        id={4406}
        name="Photo of Coconut Tunnel Enemy"
        region="Galleon Caverns"
        canGetLogic={inStage && anyKong && hasCamera}
      />
    </DropPool>
  )
}

export default CavernsEnemies
