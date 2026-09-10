import FairyPool from '@renderer/components/pools/Fairies'
import { useGalleonLighthouseArea, useGalleonSeasickShip, useGalleonLighthouseInside } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useClimbing, useDive, useMini } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const canReachLighthouse = useGalleonLighthouseArea()
  const canGoInLighthouse = useGalleonLighthouseInside()
  const canReachChunkyShip = useGalleonSeasickShip()
  const hasClimbing = useClimbing()
  const hasDiving = useDive()
  const hasMiniMonkey = useMini()
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
    </FairyPool>
  )
}

const LighthouseFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default LighthouseFairies
