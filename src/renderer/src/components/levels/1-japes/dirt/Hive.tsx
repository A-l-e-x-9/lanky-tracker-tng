import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesHive, useTinyStumpGb } from '@renderer/hooks/japes'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canReachHiveZone = useJapesHive()
const canGetInHive = useTinyStumpGb()
  return (
    <RainbowCoinPool>
      <JapesCheck
        id={31009}
        name="Shuffled Dirt Patch: Under Chunky's barrel in the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31010}
        name="Shuffled Dirt Patch: Near Tiny's stump"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31011}
        name="Shuffled Dirt Patch: Near one of Tiny's logs"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31041}
        name="Shuffled Dirt Patch: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31051}
        name="Shuffled Dirt Patch: In the main room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in && hasShockwave}
        canGetBreak={canGetInHive.out && hasShockwave}
      />
      <JapesCheck
        id={31052}
        name="Shuffled Dirt Patch: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in && hasShockwave}
        canGetBreak={canGetInHive.out && hasShockwave}
      />
      <JapesCheck
        id={31053}
        name="Shuffled Dirt Patch: In the final room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHivePastRoom1.in && hasShockwave}
        canGetBreak={canGetInHivePastRoom1.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const HiveDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default HiveDirt
