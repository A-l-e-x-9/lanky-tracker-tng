import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useChestFairy, useShipFairy, useGalleonOutskirts, useGalleonLighthouseArea, useGalleonLighthouseInside, useGalleonSeasickShip, useLanky5DoorShipGb, useTiny2DoorShipGb, useTinySubGb, useTinyClams } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useDive, useClimbing, useMini } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useChestFairy()
  const vanillaFairy2 = useShipFairy()
  const canReachOutskirts = useGalleonOutskirts()
  const canReachLighthouse = useGalleonLighthouseArea()
  const hasDiving = useDive()
  const canReachChunkyShip = useGalleonSeasickShip()
  const canGoInLighthouse = useGalleonLighthouseInside()
  const hasClimbing = useClimbing()
  const hasMiniMonkey = useMini()
  const canReachLanky5DS = useLanky5DoorShipGb()
  const canReachTiny2DS = useTiny2DoorShipGb()
  const canReachSub = useTinySubGb()
  const canReachHypeChest = useTinyClams()
  return (
    <FairyPool>
      <GalleonCheck
        id={44009}
        name="Shuffled Fairy: At the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasCam}
        canGetBreak={canReachLighthouse.out && hasCam}
      />
      <GalleonCheck
        id={44010}
        name="Shuffled Fairy: Puking in Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasCam}
        canGetBreak={canReachChunkyShip.out && hasCam}
      />
    </FairyPool>
  )
}

const LighthouseFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default LighthouseFairies
