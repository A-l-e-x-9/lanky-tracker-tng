import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useFactoryProductionEnabled, useFactoryProductionTop, useTinyProductionGb, useFactoryTesting, useTinyRaceGb, useDkProdGb, useFactoryHut, useDiddyBlockGb } from '@renderer/hooks/factory'
import { useShuffleCrates, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, usePunch, useTwirl, useCoconut, useTrombone, useGuitar, useTriangle } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
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
    <CratePool>
      <FactoryCheck
        id={23001}
        name="Shuffled Melon Crate: In Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={23002}
        name="Shuffled Melon Crate: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23003}
        name="Shuffled Melon Crate: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23004}
        name="Shuffled Melon Crate: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23005}
        name="Shuffled Melon Crate: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23006}
        name="Shuffled Melon Crate: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23007}
        name="Shuffled Melon Crate: Center of the hatch"
        region="Factory Start Area"
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
        canGetLogic={prodRoomOn.in || hasAllBananaports}
        canGetBreak={prodRoomOn.out || hasAllBananaports}
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
        id={23020}
        name="Shuffled Melon Crate: Near Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23021}
        name="Shuffled Melon Crate: Near Snide's, hidden"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23022}
        name="Shuffled Melon Crate: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23023}
        name="Shuffled Melon Crate: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23024}
        name="Shuffled Melon Crate: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23025}
        name="Shuffled Melon Crate: On the Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in}
        canGetBreak={canDoBlockTower.out}
      />
      <FactoryCheck
        id={23026}
        name="Shuffled Melon Crate: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23028}
        name="Shuffled Melon Crate: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23029}
        name="Shuffled Melon Crate: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23030}
        name="Shuffled Melon Crate: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23031}
        name="Shuffled Melon Crate: Left corner of Lanky's piano room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasTrombone}
        canGetBreak={canReachTesting.out && hasTrombone}
      />
      <FactoryCheck
        id={23032}
        name="Shuffled Melon Crate: Right corner of Lanky's piano room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasTrombone}
        canGetBreak={canReachTesting.out && hasTrombone}
      />
      <FactoryCheck
        id={23033}
        name="Shuffled Melon Crate: Corner of Diddy's pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar}
        canGetBreak={canReachTesting.out && hasGuitar}
      />
      <FactoryCheck
        id={23034}
        name="Shuffled Melon Crate: In Diddy's pincode room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasGuitar}
        canGetBreak={canReachTesting.out && hasGuitar}
      />
      <FactoryCheck
        id={23035}
        name="Shuffled Melon Crate: In Chunky's toy monster room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing && hasPrimatePunch && hasTriangle}
        canGetBreak={canReachTesting.out && hasClimbing && hasPrimatePunch && hasTriangle}
      />
      <FactoryCheck
        id={23036}
        name="Shuffled Melon Crate: Just outside of Chunky's toy monster room"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing && hasPrimatePunch && hasTriangle}
        canGetBreak={canReachTesting.out && hasClimbing && hasPrimatePunch && hasTriangle}
      />
      <FactoryCheck
        id={23037}
        name="Shuffled Melon Crate: In Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <FactoryCheck
        id={23038}
        name="Shuffled Melon Crate: Also in Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <FactoryCheck
        id={23039}
        name="Shuffled Melon Crate: In front of DK's R&D level"
        region="R&D Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23041}
        name="Shuffled Melon Crate: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23042}
        name="Shuffled Melon Crate: Vanilla Warp 1, in storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23043}
        name="Shuffled Melon Crate: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23044}
        name="Shuffled Melon Crate: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing}
        canGetBreak={canReachTesting.out && hasClimbing}
      />
      <FactoryCheck
        id={23045}
        name="Shuffled Melon Crate: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={23046}
        name="Shuffled Melon Crate: Vanilla Warp 3, at Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
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
        id={23049}
        name="Shuffled Melon Crate: Vanilla Warp 5, in the arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <FactoryCheck
        id={23050}
        name="Shuffled Melon Crate: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23051}
        name="Shuffled Melon Crate: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in}
        canGetBreak={canDoCrusher.out}
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

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
