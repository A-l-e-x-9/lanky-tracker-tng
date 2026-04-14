import CratePool from '@renderer/components/pools/Crates'
import { useJapesPaintingOutside, useJapesHive, useJapesKongGates, useJapesRambi, useRambiCrate, useJapesMine, useJapesUnderground, useTinyStumpGb, useTinyHiveGb } from '@renderer/hooks/japes'
import { useStand } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandCrates from './Lowlands'
import HillsideCrates from './Hillside'
import MineCrates from './Mine'

const ShuffledCrates: React.FC = () => {
const canReachPaintingRoom = useJapesPaintingOutside()
const canReachHiveZone = useJapesHive()
const canReachStormyZone = useJapesKongGates()
const hasOStand = useStand()
const hasRambi = useJapesRambi()
const canDoVanillaCrate2 = useRambiCrate()
const canReachMtn = useJapesMine()
const canReachChunkyCave = useJapesUnderground()
const canGetInHive = useTinyStumpGb()
const canGetInHivePastRoom1 = useTinyHiveGb()
  return (
    <CratePool>
      <LowlandCrates />
      <HillsideCrates />
      <MineCrates />
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
      <JapesCheck
        id={21041}
        name="Shuffled Melon Crate: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21043}
        name="Shuffled Melon Crate: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={21044}
        name="Shuffled Melon Crate: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={21045}
        name="Shuffled Melon Crate: In between the pegs in Lanky's painting room"
        region="Japes Caves and Mines"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={21046}
        name="Shuffled Melon Crate: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21047}
        name="Shuffled Melon Crate: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21048}
        name="Shuffled Melon Crate: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21049}
        name="Shuffled Melon Crate: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
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

export default ShuffledCrates
