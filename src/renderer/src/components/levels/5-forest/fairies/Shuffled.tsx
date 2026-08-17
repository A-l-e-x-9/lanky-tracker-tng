import FairyPool from '@renderer/components/pools/Fairies'
import { useBarnFairy, useForestSpiderBoss, useForestOwl, useTinyAntGb } from '@renderer/hooks/forest'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import ForestCheck from '../check'
import CenterFairies from './Center'
import MushInteriorFairies from './MushInterior'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy1 = useBarnFairy()
  const canReachSpiderBoss = useForestSpiderBoss()
  const canReachArea4 = useForestOwl()
  const canReachTreeStump = useTinyAntGb()
  return (
    <FairyPool>
      <CenterFairies />
      <MushInteriorFairies />
      <ForestCheck
        id={45000}
        name="Shuffled Fairy: Vanilla Location #1 (Thornvine Barn)"
        region="Forest Area 1"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <ForestCheck
        id={45011}
        name="Shuffled Fairy: In the back mill room"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in && hasCam}
        canGetBreak={canReachSpiderBoss.out && hasCam}
      />
      <ForestCheck
        id={45012}
        name="Shuffled Fairy: Not afraid of spiders"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in && hasCam}
        canGetBreak={canReachSpiderBoss.out && hasCam}
      />
      <ForestCheck
        id={45018}
        name="Shuffled Fairy: In the big tree's tunnel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasCam}
        canGetBreak={canReachArea4.out && hasCam}
      />
      <ForestCheck
        id={45019}
        name="Shuffled Fairy: Twying to KILL THE WABBIT"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasCam}
        canGetBreak={canReachArea4.out && hasCam}
      />
      <ForestCheck
        id={45020}
        name="Shuffled Fairy: At Area 4's Troff 'n' Scoff portal"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasCam}
        canGetBreak={canReachArea4.out && hasCam}
      />
      <ForestCheck
        id={45021}
        name="Shuffled Fairy: Looking for The Bean™"
        region="Forest Area 4"
        canGetLogic={canReachTreeStump.in && hasCam}
        canGetBreak={canReachTreeStump.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
