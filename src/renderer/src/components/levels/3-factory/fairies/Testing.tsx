import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useNumberFairy, useDirtFairy, useDiddyBlockGb, useFactoryTesting } from '@renderer/hooks/factory'
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
        id={43000}
        name="Shuffled Fairy: Vanilla Location #1 (tunnel to DK's number game)"
        region="Testing Room"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <FactoryCheck
        id={43001}
        name="Shuffled Fairy: Vanilla Location #2 (Funky's after Tiny's dart game)"
        region="Testing Room"
        canGetLogic={vanillaFairy2}
      />
      <FactoryCheck
        id={43011}
        name="Shuffled Fairy: Top of Diddy's Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in && hasCam}
        canGetBreak={canDoBlockTower.out && hasCam}
      />
      <FactoryCheck
        id={43012}
        name="Shuffled Fairy: Boxes to Tiny's Dartboard"
        region="Testing Room"
        canGetLogic={canDoTesting.in && hasCam}
        canGetBreak={canDoTesting.out && hasCam}
      />
      <FactoryCheck
        id={43013}
        name="Shuffled Fairy: Pole to the R&D Room"
        region="Testing Room"
        canGetLogic={canDoTesting.in && hasCam && hasClimbing}
        canGetBreak={canDoTesting.out && hasCam}
      />
    </FairyPool>
  )
}

const TestingFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default TestingFairies
