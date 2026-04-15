import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import {  } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
return (
    <KasplatPool>
      <JapesCheck
        id={51000}
        name="Shuffled Kasplat: DK's Vanilla Location (lower portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (upper portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51007}
        name="Shuffled Kasplat: Under Chunky's giant GB"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in}
        canGetBreak={canReachHiveArea.out}
      />
      <JapesCheck
        id={51016}
        name="Shuffled Kasplat: In the hive"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in && hasMiniMonkey}
        canGetBreak={canReachHiveArea.out && hasMiniMonkey}
      />
    </KasplatPool>
  )
}

const HiveKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default HiveKasplats
