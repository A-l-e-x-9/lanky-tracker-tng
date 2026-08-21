import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useGalleonLighthouseInside, useLanky5DoorShipGb, useTiny2DoorShipGb, useTinySubGb, useTinyClams } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useClimbing, useMini } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
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
        id={44002}
        name="Shuffled Fairy: At the button that opens Tiny's 2DS room"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={44003}
        name="Shuffled Fairy: 4-way intersection of tunnels"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={44004}
        name="Shuffled Fairy: Under platforms near Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={44005}
        name="Shuffled Fairy: Path to Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </FairyPool>
  )
}

const CavernFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default CavernFairies
