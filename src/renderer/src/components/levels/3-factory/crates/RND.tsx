import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useFactoryTesting, useTinyRaceGb } from '@renderer/hooks/factory'
import { useTrombone, useGuitar, useClimbing, usePunch, useTriangle } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachTesting = useFactoryTesting()
const hasTrombone = useTrombone()
const hasGuitar = useGuitar()
const hasClimbing = useClimbing()
const hasPrimatePunch = usePunch()
const hasTriangle = useTriangle()
const canReachCar = useTinyRaceGb()
  return (
    <CratePool>
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
        id={23044}
        name="Shuffled Melon Crate: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing}
        canGetBreak={canReachTesting.out && hasClimbing}
      />
    </CratePool>
  )
}

const RNDCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default RNDCrates
