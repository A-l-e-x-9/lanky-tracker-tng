import CratePool from '@renderer/components/pools/Crates'
import { useJapesKongGates, useJapesRambi, useRambiCrate, useTinyStumpGb, useTinyHiveGb } from '@renderer/hooks/japes'
import { useStand } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandCrates from './Lowlands'
import HillsideCrates from './Hillside'
import MineCrates from './Mine'
import HiveCrates from './Hive'

const ShuffledCrates: React.FC = () => {
const canReachStormyZone = useJapesKongGates()
const hasOStand = useStand()
const hasRambi = useJapesRambi()
const canDoVanillaCrate2 = useRambiCrate()
const canGetInHive = useTinyStumpGb()
const canGetInHivePastRoom1 = useTinyHiveGb()
  return (
    <CratePool>
      <LowlandCrates />
      <HillsideCrates />
      <MineCrates />
      <HiveCrates />
      <JapesCheck
        id={21012}
        name="Shuffled Melon Crate: Near the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21013}
        name="Shuffled Melon Crate: In the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21014}
        name="Shuffled Melon Crate: On Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21016}
        name="Shuffled Melon Crate: The Stormy Tunnel's 4-way intersection"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21017}
        name="Shuffled Melon Crate: Vanilla Location 1 (behind Chunky's hut switch)"
        region="Stormy Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <JapesCheck
        id={21018}
        name="Shuffled Melon Crate: The Banana Fairy's pool"
        region="Stormy Area"
        canGetLogic={hasRambi.in}
        canGetBreak={hasRambi.out}
      />
      <JapesCheck
        id={21019}
        name="Shuffled Melon Crate: Behind Lanky's Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21020}
        name="Shuffled Melon Crate: Behind DK's hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21021}
        name="Shuffled Melon Crate: Near Rambi's cage"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21022}
        name="Shuffled Melon Crate: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21038}
        name="Shuffled Melon Crate: Vanilla Warp 4, Stormy Tunnel entrance"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21039}
        name="Shuffled Melon Crate: Vanilla Warp 4, in front of Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
    </CratePool>
  )
}

export default ShuffledCrates
