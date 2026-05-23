import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useArena, useFactoryProductionEnabled, useFactoryProductionTop, useTinyProductionGb, useFactoryTesting, useTinyRaceGb, useDkProdGb } from '@renderer/hooks/factory'
import { useBananaportAll } from '@renderer/hooks/settings'
import { useShockwave, useClimbing, usePunch, useTwirl, useTrombone, useGuitar, useTriangle } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import StartDirt from './Start'
import StarcadeDirt from './Starcade'
import TestingDirt from './Testing'
import RNDDirt from './RND'

const ShuffledDirt: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
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
const hasGuitar = useGuitar()
const hasTrombone = useTrombone()
const hasTriangle = useTriangle()
  return (
    <RainbowCoinPool>
      <StartDirt />
      <StarcadeDirt />
      <TestingDirt />
      <RNDDirt />
      <FactoryCheck
        id={33000}
        name="Shuffled Dirt Patch: In the R&D Room where the vanilla Battle Arena would be"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in && hasShockwave}
        canGetBreak={canReachVanillaArena.out && hasShockwave}
      />
      <FactoryCheck
        id={33007}
        name="Shuffled Dirt Patch: Center of the hatch"
        region="Prod Room"
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
        canGetLogic={isBreathing.in && (prodRoomOn.in || hasAllBananaports)}
        canGetBreak={isBreathing.out && (prodRoomOn.out || hasAllBananaports)}
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
        id={33044}
        name="Shuffled Dirt Patch: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing && hasShockwave}
        canGetBreak={canReachTesting.out && hasClimbing && hasShockwave}
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
        id={33051}
        name="Shuffled Dirt Patch: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in && hasShockwave}
        canGetBreak={canDoCrusher.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
