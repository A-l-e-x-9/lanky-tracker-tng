import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useFactoryProductionEnabled, useFactoryProductionTop, useTinyProductionGb, useDkProdGb } from '@renderer/hooks/factory'
import { useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useTwirl } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import StartCrates from './Start'
import StarcadeCrates from './Starcade'
import TestingCrates from './Testing'
import RNDCrates from './RND'

const ShuffledCrates: React.FC = () => {
const isBreathing = useGeneralThing()
const hasClimbing = useClimbing()
const prodRoomOn = useFactoryProductionEnabled()
const hasAllBananaports = useBananaportAll()
const upperProd = useFactoryProductionTop()
const canDoTinyProd = useTinyProductionGb()
const isHinaKagiyama = useTwirl()
const canDoCrusher = useDkProdGb()
  return (
    <CratePool>
      <StartCrates />
      <StarcadeCrates />
      <TestingCrates />
      <RNDCrates />
      <FactoryCheck
        id={23007}
        name="Shuffled Melon Crate: Center of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23008}
        name="Shuffled Melon Crate: Bottom of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23009}
        name="Shuffled Melon Crate: In the tunnel to the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23010}
        name="Shuffled Melon Crate: Prod Room lower area"
        region="Prod Room"
        canGetLogic={isBreathing.in && (prodRoomOn.in || hasAllBananaports)}
        canGetBreak={isBreathing.out && (prodRoomOn.out || hasAllBananaports)}
      />
      <FactoryCheck
        id={23011}
        name="Shuffled Melon Crate: Under conveyors to Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={23012}
        name="Shuffled Melon Crate: The platform past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in}
        canGetBreak={canDoTinyProd.out}
      />
      <FactoryCheck
        id={23013}
        name="Shuffled Melon Crate: On a vent platform near the elevators"
        region="Prod Room"
        canGetLogic={upperProd.in && isHinaKagiyama}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={23047}
        name="Shuffled Melon Crate: Vanilla Warp 4, bottom of the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23048}
        name="Shuffled Melon Crate: Vanilla Warp 4, top of the Prod Room"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={23051}
        name="Shuffled Melon Crate: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in}
        canGetBreak={canDoCrusher.out}
      />
    </CratePool>
  )
}

export default ShuffledCrates
