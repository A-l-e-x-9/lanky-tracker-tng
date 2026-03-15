import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useBarnKasplat, useMushInteriorKasplat, useOwlKasplat, useMushExteriorKasplat, useNightKasplat, useForestBean, useForestMushroomTop, useForestOwl } from '@renderer/hooks/forest'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, usePunch } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useBarnKasplat()
const diddyVanillaKasplat = useMushInteriorKasplat()
const lankyVanillaKasplat = useOwlKasplat()
const tinyVanillaKasplat = useMushExteriorKasplat()
const chunkyVanillaKasplat = useNightKasplat()
const isBreathing = useGeneralThing()
const canPlantTheBean = useForestBean()
const canReachTopOfShroom = useForestMushroomTop()
const canReachArea4 = useForestOwl()
const hasClimbing = useClimbing()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <ForestCheck
        id={55000}
        name="Shuffled Kasplat: DK's Vanilla Location (behind the Thornvine Barn)"
        region="Forest Area 1"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <ForestCheck
        id={55001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (halfway up the Giant Shroom)"
        region="Inside the Giant Mushroom"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <ForestCheck
        id={55002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (inside the giant tree)"
        region="Forest Area 4"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <ForestCheck
        id={55003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (halfway up the Giant Shroom, on the outside)"
        region="Forest Area 3"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <ForestCheck
        id={55004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (out the Giant Shroom's night door)"
        region="Forest Area 3"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <ForestCheck
        id={55005}
        name="Shuffled Kasplat: Behind Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55006}
        name="Shuffled Kasplat: Trying to plant The Bean™"
        region="Forest Area 2"
        canGetLogic={canPlantTheBean.in}
        canGetBreak={canPlantTheBean.out}
      />
      <ForestCheck
        id={55007}
        name="Shuffled Kasplat: By the Jetbarrel near Cranky's"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55008}
        name="Shuffled Kasplat: Near the Tag Barrel at the Giant Shroom's top"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in}
        canGetBreak={canReachTopOfShroom.out}
      />
      <ForestCheck
        id={55009}
        name="Shuffled Kasplat: Killing the Wabbit"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={55010}
        name="Shuffled Kasplat: On Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canDoLankyGoldTower.in}
        canGetBreak={canDoLankyGoldTower.out}
      />
      <ForestCheck
        id={55011}
        name="Shuffled Kasplat: Inside Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canDoChunkyShip.in}
        canGetBreak={canDoChunkyShip.out}
      />
      <ForestCheck
        id={55012}
        name="Shuffled Kasplat: Just above the cave to Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55013}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55014}
        name="Shuffled Kasplat: In Chunky's right chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <ForestCheck
        id={55015}
        name="Shuffled Kasplat: Also on the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
