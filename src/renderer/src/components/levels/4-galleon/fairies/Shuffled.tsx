import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, usePunchFairy, useShipFairy, useGalleonOutskirts, useGalleonLighthouseArea, useGalleonLighthouseInside, useGalleonSeasickShip, useLanky5DoorShipGb, useTiny2DoorShipGb, useTinySubGb, useTinyClams } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useDive, useClimbing, useMini } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = usePunchFairy()
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
        id={44000}
        name="Shuffled Fairy: Vanilla Location #1 (in Chunky's Punch chest)"
        region="Galleon Caves"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <GalleonCheck
        id={44001}
        name="Shuffled Fairy: Vanilla Location #2 (Tiny's 5DS room)"
        region="5 Door Ship"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
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
      <GalleonCheck
        id={44006}
        name="Shuffled Fairy: Underwater between 5DS and 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasDiving.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasDiving.out && hasCam}
      />
      <GalleonCheck
        id={44007}
        name="Shuffled Fairy: Underwater between 5DS and Candy's"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasDiving.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasDiving.out && hasCam}
      />
      <GalleonCheck
        id={44008}
        name="Shuffled Fairy: At the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasCam}
      />
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
      <GalleonCheck
        id={44011}
        name="Shuffled Fairy: Top of the inside of DK's lighthouse"
        region="Lighthouse Area"
        canGetLogic={canGoInLighthouse.in && hasClimbing && hasCam}
        canGetBreak={canGoInLighthouse.out && hasClimbing && hasCam}
      />
      <GalleonCheck
        id={44012}
        name="Shuffled Fairy: Inside the Mermaid's house"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasDiving.in && hasMiniMonkey && hasCam}
        canGetBreak={canReachLighthouse.out && hasDiving.out && hasMiniMonkey && hasCam}
      />
      <GalleonCheck
        id={44013}
        name="Shuffled Fairy: In Lanky's 5DS room"
        region="5 Door Ship"
        canGetLogic={canReachLanky5DS.in && hasCam}
        canGetBreak={canReachLanky5DS.out && hasCam}
      />
      <GalleonCheck
        id={44014}
        name="Shuffled Fairy: In Tiny's 2DS room"
        region="Shipyard Outskirts"
        canGetLogic={canReachTiny2DS.in && hasCam}
        canGetBreak={canReachTiny2DS.out && hasCam}
      />
      <GalleonCheck
        id={44015}
        name="Shuffled Fairy: In the Foghorn"
        region="Shipyard Outskirts"
        canGetLogic={canReachSub.in && hasCam}
        canGetBreak={canReachSub.out && hasCam}
      />
      <GalleonCheck
        id={44016}
        name="Shuffled Fairy: In the Hype Chest"
        region="Treasure Room"
        canGetLogic={canReachHypeChest.in && hasCam}
        canGetBreak={canReachHypeChest.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
