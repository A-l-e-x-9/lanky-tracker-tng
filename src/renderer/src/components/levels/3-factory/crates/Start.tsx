import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralThing, useFoyerFromStorage } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReach = useFoyerFromStorage()
  return (
    <CratePool>
      <FactoryCheck
        id={23002}
        name="Shuffled Melon Crate: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23003}
        name="Shuffled Melon Crate: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23004}
        name="Shuffled Melon Crate: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23005}
        name="Shuffled Melon Crate: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23006}
        name="Shuffled Melon Crate: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23041}
        name="Shuffled Melon Crate: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23043}
        name="Shuffled Melon Crate: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={23045}
        name="Shuffled Melon Crate: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
    </CratePool>
  )
}

const StartCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default StartCrates
