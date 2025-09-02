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
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <GalleonCheck
        id={4300}
        name="Galleon Enemy: Chest Room 0"
        region="Galleon Caverns"
        canGetLogic={inStage && klobber}
      />
      <GalleonCheck
        id={4301}
        name="Galleon Enemy: Chest Room 1"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom}
      />
      <GalleonCheck
        id={4302}
        name="Galleon Enemy: Vine Cannon"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom}
      />
      <GalleonCheck
        id={4303}
        name="Galleon Enemy: Cranky Cannon"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom}
      />
      <GalleonCheck
        id={4304}
        name="Galleon Enemy: Peanut Tunnel"
        region="Galleon Caverns"
        canGetLogic={inStage && kosha}
      />
      <GalleonCheck
        id={4306}
        name="Galleon Enemy: Coconut Tunnel"
        region="Galleon Caverns"
        canGetLogic={inStage && anyKong}
      />
      <GalleonCheck
        id={4400}
        name="Galleon Enemy Photo: Chest Room 0"
        region="Galleon Caverns"
        canGetLogic={inStage && klobber && hasCamera}
      />
      <GalleonCheck
        id={4401}
        name="Galleon Enemy Photo: Chest Room 1"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom && hasCamera}
      />
      <GalleonCheck
        id={4402}
        name="Galleon Enemy Photo: Vine Cannon"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom && hasCamera}
      />
      <GalleonCheck
        id={4403}
        name="Galleon Enemy Photo: Cranky Cannon"
        region="Galleon Caverns"
        canGetLogic={inStage && kaboom && hasCamera}
      />
      <GalleonCheck
        id={4404}
        name="Galleon Enemy Photo: Peanut Tunnel"
        region="Galleon Caverns"
        canGetLogic={inStage && kosha && hasCamera}
      />
      <GalleonCheck
        id={4406}
        name="Galleon Enemy Photo: Coconut Tunnel"
        region="Galleon Caverns"
        canGetLogic={inStage && anyKong && hasCamera}
      />
    </DropPool>
  )
}

export default CavernsEnemies
