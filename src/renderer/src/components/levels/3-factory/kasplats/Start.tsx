import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralThing } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
  return (
    <KasplatPool>
      <FactoryCheck
        id={53005}
        name="Shuffled Kasplat: At the window in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

const StartKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default StartKasplats
