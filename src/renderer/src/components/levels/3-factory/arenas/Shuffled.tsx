import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useFactoryProductionEnabled, useFactoryProductionTop, useTinyProductionGb, useFactoryTesting, useTinyRaceGb, useDkProdGb, useFactoryHut } from '@renderer/hooks/factory'
import { useShuffledArenas, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, usePunch, useTwirl, useCoconut } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const hasClimbing = useClimbing()
const hasPrimatePunch = usePunch()
const prodRoomOn = useFactoryProductionEnabled()
const hasAllBananaports = useBananaportAll()
const upperProd = useFactoryProductionTop()
const canDoTinyProd = useTinyProductionGb()
const isHinaKagiyama = useTwirl()
const canReachTesting = useFactoryTesting()
const canReachCar = useTinyRaceGb()
const canDoCrusher = useDkProdGb()
const canReachHut = useFactoryHut()
const hasCoconuts = useCoconut()
  return (
    <ArenaPool>
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Arena (in the R&D Room)"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <FactoryCheck
        id={13001}
        name="Shuffled Battle Arena: In Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={13002}
        name="Shuffled Battle Arena: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13003}
        name="Shuffled Battle Arena: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13004}
        name="Shuffled Battle Arena: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13005}
        name="Shuffled Battle Arena: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13006}
        name="Shuffled Battle Arena: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13007}
        name="Shuffled Battle Arena: Center of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13008}
        name="Shuffled Battle Arena: Bottom of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13009}
        name="Shuffled Battle Arena: In the tunnel to the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13010}
        name="Shuffled Battle Arena: Prod Room lower area"
        region="Prod Room"
        canGetLogic={prodRoomOn.in || hasAllBananaports}
        canGetBreak={prodRoomOn.out || hasAllBananaports}
      />
      <FactoryCheck
        id={13011}
        name="Shuffled Battle Arena: Under conveyors to Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={13012}
        name="Shuffled Battle Arena: The platform past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in}
        canGetBreak={canDoTinyProd.out}
      />
      <FactoryCheck
        id={13013}
        name="Shuffled Battle Arena: On a vent platform near the elevators"
        region="Prod Room"
        canGetLogic={upperProd.in && isHinaKagiyama}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={13014}
        name="Shuffled Battle Arena: Corner of the Storage Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13015}
        name="Shuffled Battle Arena: In front of Cranky's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13016}
        name="Shuffled Battle Arena: In front of Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13017}
        name="Shuffled Battle Arena: Corner of Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={13018}
        name="Shuffled Battle Arena: Bench in the arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={13019}
        name="Shuffled Battle Arena: Next to the arcade game"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={13020}
        name="Shuffled Battle Arena: Near Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13021}
        name="Shuffled Battle Arena: Near Snide's, hidden"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13022}
        name="Shuffled Battle Arena: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13023}
        name="Shuffled Battle Arena: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13024}
        name="Shuffled Battle Arena: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13026}
        name="Shuffled Battle Arena: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13027}
        name="Shuffled Battle Arena: Left of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13028}
        name="Shuffled Battle Arena: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13029}
        name="Shuffled Battle Arena: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13030}
        name="Shuffled Battle Arena: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13037}
        name="Shuffled Battle Arena: In Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <FactoryCheck
        id={13038}
        name="Shuffled Battle Arena: Also in Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <FactoryCheck
        id={13039}
        name="Shuffled Battle Arena: In front of DK's R&D level"
        region="R&D Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13040}
        name="Shuffled Battle Arena: Under the grate that doesn't have the vanilla Arena"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <FactoryCheck
        id={13041}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13042}
        name="Shuffled Battle Arena: Vanilla Warp 1, in storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13043}
        name="Shuffled Battle Arena: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13044}
        name="Shuffled Battle Arena: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing}
        canGetBreak={canReachTesting.out && hasClimbing}
      />
      <FactoryCheck
        id={13045}
        name="Shuffled Battle Arena: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13046}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13047}
        name="Shuffled Battle Arena: Vanilla Warp 4, bottom of the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={13048}
        name="Shuffled Battle Arena: Vanilla Warp 4, top of the Prod Room"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <FactoryCheck
        id={13049}
        name="Shuffled Battle Arena: Vanilla Warp 5, in the arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={13050}
        name="Shuffled Battle Arena: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13051}
        name="Shuffled Battle Arena: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in}
        canGetBreak={canDoCrusher.out}
      />
      <FactoryCheck
        id={13052}
        name="Shuffled Battle Arena: Inside DK's power hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts}
        canGetBreak={canReachHut.out && hasCoconuts}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
