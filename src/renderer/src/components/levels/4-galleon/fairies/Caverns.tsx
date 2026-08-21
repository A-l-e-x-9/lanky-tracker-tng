import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
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
