import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useFactoryProductionEnabled, useFactoryProductionTop, useTinyProductionGb, useFactoryTesting, useTinyRaceGb, useDkProdGb } from '@renderer/hooks/factory'
import { useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useTwirl } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import StartArenas from './Start'
import StarcadeArenas from './Starcade'
import TestingArenas from './Testing'
import RNDArenas from './RND'

const ShuffledArenas: React.FC = () => {
const isBreathing = useGeneralThing()
const hasClimbing = useClimbing()
const prodRoomOn = useFactoryProductionEnabled()
const hasAllBananaports = useBananaportAll()
const upperProd = useFactoryProductionTop()
const canDoTinyProd = useTinyProductionGb()
const isHinaKagiyama = useTwirl()
const canReachTesting = useFactoryTesting()
const canDoCrusher = useDkProdGb()
  return (
    <ArenaPool>
      <StartArenas />
      <StarcadeArenas />
      <TestingArenas />
      <RNDArenas />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Center of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Bottom of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: In the tunnel to the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Prod Room lower area"
        region="Prod Room"
        canGetLogic={prodRoomOn.in || hasAllBananaports}
        canGetBreak={prodRoomOn.out || hasAllBananaports}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Under conveyors to Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: The platform past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in}
        canGetBreak={canDoTinyProd.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: On a vent platform near the elevators"
        region="Prod Room"
        canGetLogic={upperProd.in && isHinaKagiyama}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 4, bottom of the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 4, top of the Prod Room"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in}
        canGetBreak={canDoCrusher.out}
      />
    </ArenaPool>
  )
}

export default ShuffledArenas
