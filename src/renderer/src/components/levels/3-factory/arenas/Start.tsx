import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralThing } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
  return (
    <ArenaPool>
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const StartArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default StartArenas
