import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralFairy, useFoyerFromStorage } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const canReachStart = useFoyerFromStorage()
  return (
    <FairyPool>
      <FactoryCheck
        id={43002}
        name="Shuffled Fairy: At the vanilla entrance"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReachStart.in}
        canGetBreak={isBreathing.out && canReachStart.out}
      />
    </FairyPool>
  )
}

const StartFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default StartFairies
