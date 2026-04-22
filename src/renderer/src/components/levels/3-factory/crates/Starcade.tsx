import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralThing, useFactoryHut } from '@renderer/hooks/factory'
import { useCoconut } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachHut = useFactoryHut()
const hasCoconuts = useCoconut()
  return (
    <CratePool>
      <FactoryCheck
        id={23001}
        name="Shuffled Melon Crate: In Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={23014}
        name="Shuffled Melon Crate: Corner of the Storage Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23016}
        name="Shuffled Melon Crate: Vanilla Crate (in front of Candy's)"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23017}
        name="Shuffled Melon Crate: Corner of Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={23018}
        name="Shuffled Melon Crate: Bench in the arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={23019}
        name="Shuffled Melon Crate: Next to the arcade game"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={23042}
        name="Shuffled Melon Crate: Vanilla Warp 1, in storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23049}
        name="Shuffled Melon Crate: Vanilla Warp 5, in the arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={23052}
        name="Shuffled Melon Crate: Inside DK's power hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts}
        canGetBreak={canReachHut.out && hasCoconuts}
      />
    </CratePool>
  )
}

const StarcadeCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default StarcadeCrates
