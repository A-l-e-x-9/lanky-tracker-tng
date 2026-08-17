import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useRocket, useBalloon, useBongos, useTrombone } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasJetbarrel = useRocket()
const hasBalloon = useBalloon()
const hasBongoes = useBongos()
const hasTrombone = useTrombone()
  return (
    <ArenaPool>
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBalloon && hasTrombone}
        canGetBreak={isBreathing.out && hasJetbarrel && hasTrombone}
      />
    </ArenaPool>
  )
}

const CabinArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CabinArenas
