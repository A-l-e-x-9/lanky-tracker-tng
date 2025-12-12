import FairyPool from '@renderer/components/pools/Fairies'
import { useHelmDoors, usePlayHelm, useHelmMachine } from '@renderer/hooks/helm'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useStand, useRocket } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const hasOStand = useStand()
  const canEnterHelm = usePlayHelm()
  const canReachEndOfHelm = useHelmDoors()
  const canReachBlastOMatic = useHelmMachine()
  const hasJetbarrel = useRocket()
  return (
    <FairyPool>
      <HelmCheck
        id={48000}
        name="Shuffled Fairy: Vanilla Location #1 (Key 8 room)"
        region="Hideout Helm"
        canGetLogic={canReachEndOfHelm.in && hasCam}
        canGetBreak={canReachEndOfHelm.out && hasCam}
      />
      <HelmCheck
        id={48001}
        name="Shuffled Fairy: Vanilla Location #2 (also Key 8 room)"
        region="Hideout Helm"
        canGetLogic={canReachEndOfHelm.in && hasCam}
        canGetBreak={canReachEndOfHelm.out && hasCam}
      />
      <HelmCheck
        id={48002}
        name="Shuffled Fairy: To the Pineapple Switch"
        region="Hideout Helm"
        canGetLogic={canEnterHelm.in && hasOStand && hasCam}
        canGetBreak={canEnterHelm.out && hasCam}
      />
      <HelmCheck
        id={48003}
        name="Shuffled Fairy: Under Chunky's machine room"
        region="Hideout Helm"
        canGetLogic={canReachBlastOMatic.in && hasCam}
        canGetBreak={canReachBlastOMatic.out && hasCam}
      />
      <HelmCheck
        id={48004}
        name="Shuffled Fairy: Above the Blast-O-Matic itself"
        region="Hideout Helm"
        canGetLogic={canReachBlastOMatic.in && hasJetbarrel && hasCam}
        canGetBreak={canReachBlastOMatic.out && hasJetbarrel && hasCam}
      />
      <HelmCheck
        id={48005}
        name="Shuffled Fairy: In the Nav Room"
        region="Hideout Helm"
        canGetLogic={canReachEndOfHelm.in && hasCam}
        canGetBreak={canReachEndOfHelm.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
