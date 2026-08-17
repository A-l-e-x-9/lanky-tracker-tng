import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useForestMushroomRoof } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useRocket, useClimbing } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const hasJetbarrel = useRocket()
  const hasClimbing = useClimbing()
  const canReachShroomRoof = useForestMushroomRoof()
  return (
    <FairyPool>
      <ForestCheck
        id={45013}
        name="Shuffled Fairy: Over DK's Blast pad"
        region="Forest Area 3"
        canGetLogic={(hasClimbing || hasJetbarrel) && isBreathing.in}
        canGetBreak={(hasClimbing || hasJetbarrel) && isBreathing.out}
      />
      <ForestCheck
        id={45014}
        name="Shuffled Fairy: At the Battle Arena"
        region="Forest Area 3"
        canGetLogic={canReachArena.in && hasCam}
        canGetBreak={canReachArena.out && hasCam}
      />
      <ForestCheck
        id={45015}
        name="Shuffled Fairy: At the top of the mushroom"
        region="Forest Area 3"
        canGetLogic={canReachShroomRoof.in && hasCam}
        canGetBreak={canReachShroomRoof.out && hasCam}
      />
    </FairyPool>
  )
}

const MushExteriorFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default MushExteriorFairies
