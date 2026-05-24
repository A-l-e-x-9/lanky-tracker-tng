import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useNumberFairy, useDartFairy, useDiddyBlockGb, useFactoryTesting } from '@renderer/hooks/factory'
import { useCamera, useClimbing } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy1 = useNumberFairy()
  const vanillaFairy2 = useDartFairy()
  const canDoBlockTower = useDiddyBlockGb()
  const canDoTesting = useFactoryTesting()
  const hasClimbing = useClimbing()
  return (
    <FairyPool>
      <FactoryCheck
        id={43014}
        name="Shuffled Fairy: In Diddy's Pincode Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports) && hasGuitar}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports) && hasGuitar}
      />
      <FactoryCheck
        id={43015}
        name="Shuffled Fairy: Tunnel to Tiny's Car Race"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports)}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43016}
        name="Shuffled Fairy: In Chunky's Toy Monster Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports) && hasPrimatePunch && hasTriangle}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports) && highGrab && hasPrimatePunch && hasTriangle}
      />
      <FactoryCheck
        id={43017}
        name="Shuffled Fairy: At the chute to the Storage Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports)}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports)}
      />
    </FairyPool>
  )
}

const RNDFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default RNDFairies
