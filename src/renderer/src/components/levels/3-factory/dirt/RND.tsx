import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useFactoryTesting, useArena } from '@renderer/hooks/factory'
import { useShockwave, useTrombone, useGuitar } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canReachTesting = useFactoryTesting()
const canReachVanillaArena = useArena()
const hasTrombone = useTrombone()
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
    </RainbowCoinPool>
  )
}

const RNDDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default RNDDirt
