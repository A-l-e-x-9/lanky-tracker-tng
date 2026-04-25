import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralThing, useFoyerFromStorage } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReach = useFoyerFromStorage()
  return (
    <KasplatPool>
      <FactoryCheck
        id={53005}
        name="Shuffled Kasplat: At the window in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
    </KasplatPool>
  )
}

const StartKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default StartKasplats
