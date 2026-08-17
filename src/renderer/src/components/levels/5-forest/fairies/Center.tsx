import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, usePlayForest } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import ForestCheck from '../check'
import { useRocket, useClimbing, useVine, useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const isInStage = usePlayForest()
  const hasJetbarrel = useRocket()
  const hasClimbing = useClimbing()
  const hasVines = useVine()
  const hasCam = useCamera()
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
