import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useBarnKasplat, useMushInteriorKasplat, useOwlKasplat, useMushExteriorKasplat, useNightKasplat, useForestBean, useForestMushroomTop, useForestOwl, useForestDay, useForestMushroomRoof, useLankyMushGb, useForestSpiderBoss, useSlamForest, useForestNight } from '@renderer/hooks/forest'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, useAnyGun, useAnyMusic, useOrange, useDive, useBalloon, useDiddy, useChunky } from '@renderer/hooks/kongs'
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
const isDay = useForestDay()
const isNight = useForestNight()
const canReachLankySwitch = useForestMushroomRoof()
const canReachLankyRooms = useLankyMushGb()
const canReachSpydar = useForestSpiderBoss()
const hasClimbing = useClimbing()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasOranges = useOrange()
const hasDiving = useDive()
const hasBalloon = useBalloon()
const hasDiddy = useDiddy()
const hasChunky = useChunky()
const hasSlam = useSlamForest()
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
        name="Shuffled Kasplat: Frolicking with the Zingers"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={55011}
        name="Shuffled Kasplat: Behind the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55012}
        name="Shuffled Kasplat: Inside the front mill room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && isDay.out}
      />
      <ForestCheck
        id={55013}
        name="Shuffled Kasplat: In the Giant Shroom's moat"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={isBreathing.out && hasOranges && hasDiving.out}
      />
      <ForestCheck
        id={55014}
        name="Shuffled Kasplat: Lanky switch at the top of the Giant Shroom"
        region="Forest Area 3"
        canGetLogic={canReachLankySwitch.in}
        canGetBreak={canReachLankySwitch.out}
      />
      <ForestCheck
        id={55015}
        name="Shuffled Kasplat: Near Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasClimbing || hasBalloon)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBalloon)}
      />
      <ForestCheck
        id={55016}
        name="Shuffled Kasplat: At the minecart exit"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55017}
        name="Shuffled Kasplat: In Lanky's mushroom slam room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankyRooms.in}
        canGetBreak={canReachLankyRooms.out}
      />
      <ForestCheck
        id={55018}
        name="Shuffled Kasplat: Not afraid of spiders"
        region="Forest Area 1"
        canGetLogic={canReachSpydar.in}
        canGetBreak={canReachSpydar.out}
      />
      <ForestCheck
        id={55019}
        name="Shuffled Kasplat: In the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <ForestCheck
        id={55020}
        name="Shuffled Kasplat: In Chunky's face puzzle room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachTopOfShroom.in && hasChunky && hasSlam}
        canGetBreak={canReachTopOfShroom.out && hasChunky && hasSlam}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
