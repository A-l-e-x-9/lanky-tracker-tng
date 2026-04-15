import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import {  } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
  return (
    <CratePool>
      <JapesCheck
        id={21009}
        name="Shuffled Melon Crate: Under Chunky's barrel in the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21010}
        name="Shuffled Melon Crate: Near Tiny's stump"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21011}
        name="Shuffled Melon Crate: Near one of Tiny's logs"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21041}
        name="Shuffled Melon Crate: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21051}
        name="Shuffled Melon Crate: In the main room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={21052}
        name="Shuffled Melon Crate: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={21053}
        name="Shuffled Melon Crate: In the final room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHivePastRoom1.in}
        canGetBreak={canGetInHivePastRoom1.out}
      />
    </CratePool>
  )
}

const HiveCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default HiveCrates
