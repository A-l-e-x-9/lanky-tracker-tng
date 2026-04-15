import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useJapesKongGates, useJapesRambi, useRambiCrate, useTinyStumpGb, useTinyHiveGb } from '@renderer/hooks/japes'
import { useStand, useShockwave } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandDirt from './Lowlands'
import HillsideDirt from './Hillside'
import MineDirt from './Mine'
import HiveDirt from './Hive'

const ShuffledDirt: React.FC = () => {
const hasShockwave = useShockwave()
const canReachStormyZone = useJapesKongGates()
const hasOStand = useStand()
const hasRambi = useJapesRambi()
const canDoVanillaCrate2 = useRambiCrate()
const canGetInHive = useTinyStumpGb()
const canGetInHivePastRoom1 = useTinyHiveGb()
  return (
    <RainbowCoinPool>
      <LowlandDirt />
      <HillsideDirt />
      <MineDirt />
      <HiveDirt />
      <JapesCheck
        id={31012}
        name="Shuffled Dirt Patch: Near the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31013}
        name="Shuffled Dirt Patch: In the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31014}
        name="Shuffled Dirt Patch: On Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31015}
        name="Shuffled Dirt Patch: On the left of Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31016}
        name="Shuffled Dirt Patch: The Stormy Tunnel's 4-way intersection"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31017}
        name="Shuffled Dirt Patch: Behind Chunky's hut switch"
        region="Stormy Area"
        canGetLogic={canDoVanillaCrate2.in && hasShockwave}
        canGetBreak={canDoVanillaCrate2.out && hasShockwave}
      />
      <JapesCheck
        id={31018}
        name="Shuffled Dirt Patch: The Banana Fairy's pool"
        region="Stormy Area"
        canGetLogic={hasRambi.in && hasShockwave}
        canGetBreak={hasRambi.out && hasShockwave}
      />
      <JapesCheck
        id={31019}
        name="Shuffled Dirt Patch: Behind Lanky's Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31020}
        name="Shuffled Dirt Patch: Behind DK's hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31021}
        name="Shuffled Dirt Patch: Near Rambi's cage"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31022}
        name="Shuffled Dirt Patch: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31038}
        name="Shuffled Dirt Patch: Vanilla Warp 4, Stormy Tunnel entrance"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31039}
        name="Shuffled Dirt Patch: Vanilla Warp 4, in front of Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
