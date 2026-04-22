import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralFairy } from '@renderer/hooks/aztec'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  return (
    <FairyPool>
      <FactoryCheck
        id={43002}
        name="Shuffled Fairy: At the vanilla entrance"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </FairyPool>
  )
}

const StartFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default StartFairies
