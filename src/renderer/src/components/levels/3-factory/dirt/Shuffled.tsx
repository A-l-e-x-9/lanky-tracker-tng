import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useFactoryProductionEnabled, useFactoryProductionTop, useTinyProductionGb, useFactoryTesting, useTinyRaceGb, useDkProdGb, useFactoryHut, useDiddyBlockGb } from '@renderer/hooks/factory'
import { useShuffleDirt, useBananaportAll } from '@renderer/hooks/settings'
import { useShockwave, useClimbing, usePunch, useTwirl, useCoconut, useTrombone, useGuitar, useTriangle } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
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
const canDoBlockTower = useDiddyBlockGb()
const hasGuitar = useGuitar()
const hasTrombone = useTrombone()
const hasTriangle = useTriangle()
  return (
    <RainbowCoinPool>
      <FactoryCheck
        id={33000}
        name="Shuffled Dirt Patch: In the R&D Room where the vanilla Battle Arena would be"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in && hasShockwave}
        canGetBreak={canReachVanillaArena.out && hasShockwave}
      />
      <FactoryCheck
        id={33001}
        name="Shuffled Dirt Patch: Vanilla Dirt (in Chunky's dark room)"
        region="Storage and Arcade Area"
        canGetLogic={canDoVanillaDirt.in}
        canGetBreak={canDoVanillaDirt.out}
      />
      <FactoryCheck
        id={33002}
        name="Shuffled Dirt Patch: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33003}
        name="Shuffled Dirt Patch: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33004}
        name="Shuffled Dirt Patch: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33005}
        name="Shuffled Dirt Patch: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33006}
        name="Shuffled Dirt Patch: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33007}
        name="Shuffled Dirt Patch: Center of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33008}
        name="Shuffled Dirt Patch: Bottom of the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33009}
        name="Shuffled Dirt Patch: In the tunnel to the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33010}
        name="Shuffled Dirt Patch: Prod Room lower area"
        region="Prod Room"
        canGetLogic={(prodRoomOn.in || hasAllBananaports) && hasShockwave}
        canGetBreak={(prodRoomOn.out || hasAllBananaports) && hasShockwave}
      />
      <FactoryCheck
        id={33011}
        name="Shuffled Dirt Patch: Under conveyors to Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={upperProd.in && hasShockwave}
        canGetBreak={upperProd.out && hasShockwave}
      />
      <FactoryCheck
        id={33012}
        name="Shuffled Dirt Patch: The platform past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in && hasShockwave}
        canGetBreak={canDoTinyProd.out && hasShockwave}
      />
      <FactoryCheck
        id={33013}
        name="Shuffled Dirt Patch: On a vent platform near the elevators"
        region="Prod Room"
        canGetLogic={upperProd.in && isHinaKagiyama && hasShockwave}
        canGetBreak={upperProd.out && hasShockwave}
      />
      <FactoryCheck
        id={33014}
        name="Shuffled Dirt Patch: Corner of the Storage Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33015}
        name="Shuffled Dirt Patch: In front of Cranky's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33016}
        name="Shuffled Dirt Patch: In front of Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33017}
        name="Shuffled Dirt Patch: Corner of Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={33018}
        name="Shuffled Dirt Patch: Bench in the arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={33019}
        name="Shuffled Dirt Patch: Next to the arcade game"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={33020}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33021}
        name="Shuffled Dirt Patch: Near Snide's, hidden"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33022}
        name="Shuffled Dirt Patch: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33023}
        name="Shuffled Dirt Patch: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33024}
        name="Shuffled Dirt Patch: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33025}
        name="Shuffled Dirt Patch: On the Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in && hasShockwave}
        canGetBreak={canDoBlockTower.out && hasShockwave}
      />
      <FactoryCheck
        id={33026}
        name="Shuffled Dirt Patch: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33027}
        name="Shuffled Dirt Patch: Left of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33028}
        name="Shuffled Dirt Patch: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33029}
        name="Shuffled Dirt Patch: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33030}
        name="Shuffled Dirt Patch: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33031}
        name="Shuffled Dirt Patch: Left corner of Lanky's piano room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasTrombone && hasShockwave}
        canGetBreak={canReachTesting.out && hasTrombone && hasShockwave}
      />
      <FactoryCheck
        id={33032}
        name="Shuffled Dirt Patch: Right corner of Lanky's piano room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasTrombone && hasShockwave}
        canGetBreak={canReachTesting.out && hasTrombone && hasShockwave}
      />
      <FactoryCheck
        id={33033}
        name="Shuffled Dirt Patch: Corner of Diddy's pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar && hasShockwave}
        canGetBreak={canReachTesting.out && hasGuitar && hasShockwave}
      />
      <FactoryCheck
        id={33034}
        name="Shuffled Dirt Patch: In Diddy's pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar && hasShockwave}
        canGetBreak={canReachTesting.out && hasGuitar && hasShockwave}
      />
      <FactoryCheck
        id={33035}
        name="Shuffled Dirt Patch: In Chunky's toy monster room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing && hasPrimatePunch && hasTriangle && hasShockwave}
        canGetBreak={canReachTesting.out && hasClimbing && hasPrimatePunch && hasTriangle && hasShockwave}
      />
      <FactoryCheck
        id={33036}
        name="Shuffled Dirt Patch: Just outside of Chunky's toy monster room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing && hasPrimatePunch && hasTriangle && hasShockwave}
        canGetBreak={canReachTesting.out && hasClimbing && hasPrimatePunch && hasTriangle && hasShockwave}
      />
      <FactoryCheck
        id={33037}
        name="Shuffled Dirt Patch: In Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in && hasShockwave}
        canGetBreak={canReachCar.out && hasShockwave}
      />
      <FactoryCheck
        id={33038}
        name="Shuffled Dirt Patch: Also in Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in && hasShockwave}
        canGetBreak={canReachCar.out && hasShockwave}
      />
      <FactoryCheck
        id={33039}
        name="Shuffled Dirt Patch: In front of DK's R&D level"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33040}
        name="Shuffled Battle Arena: Under the grate that doesn't have the vanilla Battle Arena"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in && hasShockwave}
        canGetBreak={canReachVanillaArena.out && hasShockwave}
      />
      <FactoryCheck
        id={33041}
        name="Shuffled Dirt Patch: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33042}
        name="Shuffled Dirt Patch: Vanilla Warp 1, in storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33043}
        name="Shuffled Dirt Patch: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33044}
        name="Shuffled Dirt Patch: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing && hasShockwave}
        canGetBreak={canReachTesting.out && hasClimbing && hasShockwave}
      />
      <FactoryCheck
        id={33045}
        name="Shuffled Dirt Patch: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33046}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33047}
        name="Shuffled Dirt Patch: Vanilla Warp 4, bottom of the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={33048}
        name="Shuffled Dirt Patch: Vanilla Warp 4, top of the Prod Room"
        region="Prod Room"
        canGetLogic={upperProd.in && hasShockwave}
        canGetBreak={upperProd.out && hasShockwave}
      />
      <FactoryCheck
        id={33049}
        name="Shuffled Dirt Patch: Vanilla Warp 5, in the arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={33050}
        name="Shuffled Dirt Patch: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33051}
        name="Shuffled Dirt Patch: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in && hasShockwave}
        canGetBreak={canDoCrusher.out && hasShockwave}
      />
      <FactoryCheck
        id={33052}
        name="Shuffled Dirt Patch: Inside DK's power hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts && hasShockwave}
        canGetBreak={canReachHut.out && hasCoconuts && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
