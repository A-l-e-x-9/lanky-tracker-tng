import FairyPool from '@renderer/components/pools/Fairies'
import { useGalleonLighthouseArea, useGalleonSeasickShip } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const canReachLighthouse = useGalleonLighthouseArea()
  const canReachChunkyShip = useGalleonSeasickShip()
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
