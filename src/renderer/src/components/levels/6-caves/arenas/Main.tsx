import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useTinyCaveGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useBalloon, useHighGrab } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canDoShrinkGB = useTinyCaveGb()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
  return (
    <ArenaPool>
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasBalloon}
        canGetBreak={isBreathing.out && canHighGrab}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
    </ArenaPool>
  )
}

const MainArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MainArenas
