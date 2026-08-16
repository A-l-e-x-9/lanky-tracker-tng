import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  return (
    <FairyPool>
      <ForestCheck
        id={45002}
        name="Shuffled Fairy: Above Area 1's tunnel, clock-side"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={45003}
        name="Shuffled Fairy: At the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={45004}
        name="Shuffled Fairy: Top of Chunky's minecart entrance"
        region="Forest Central Area"
        canGetLogic={isInStage.in && (hasJetbarrel || (hasClimbing && hasVines)) && hasCam}
        canGetBreak={isBreathing.out}
      />
    </FairyPool>
  )
}

const CenterFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default CenterFairies
