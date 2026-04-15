import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesHive, useTinyStumpGb } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
const canReachHiveZone = useJapesHive()
const canGetInHive = useTinyStumpGb()
  return (
    <ArenaPool>
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Under Chunky's barrel in the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near Tiny's stump"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near one of Tiny's logs"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the main room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the final room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHivePastRoom1.in}
        canGetBreak={canGetInHivePastRoom1.out}
      />
    </ArenaPool>
  )
}

const HiveArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default HiveArenas
