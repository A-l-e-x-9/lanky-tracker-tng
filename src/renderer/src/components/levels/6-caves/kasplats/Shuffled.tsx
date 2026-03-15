import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useIceCastleKasplat, useFunkyKasplat, usePillarKasplat, useCabinKasplat, useIglooKasplat } from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, useAnyGun, useAnyMusic, useOrange, useDive, useBalloon, useDiddy, useChunky } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useIceCastleKasplat()
const diddyVanillaKasplat = useFunkyKasplat()
const lankyVanillaKasplat = usePillarKasplat()
const tinyVanillaKasplat = useCabinKasplat()
const chunkyVanillaKasplat = useIglooKasplat()
const isBreathing = useGeneralThing()
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
      <CavesCheck
        id={56000}
        name="Shuffled Kasplat: DK's Vanilla Location (behind the Ice Castle)"
        region="Crystal Caves Main"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <CavesCheck
        id={56001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (in Tiny's room near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <CavesCheck
        id={56002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a high platform near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <CavesCheck
        id={56003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (a high platform near Candy's)"
        region="Caves Cabins"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <CavesCheck
        id={56004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (top of the 5DI)"
        region="Caves Igloos"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CavesCheck
        id={56005}
        name="Shuffled Kasplat: Behind Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56006}
        name="Shuffled Kasplat: Trying to plant The Bean™"
        region="Forest Area 2"
        canGetLogic={canPlantTheBean.in}
        canGetBreak={canPlantTheBean.out}
      />
      <CavesCheck
        id={56007}
        name="Shuffled Kasplat: By the Jetbarrel near Cranky's"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56008}
        name="Shuffled Kasplat: Near the Tag Barrel at the Giant Shroom's top"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in}
        canGetBreak={canReachTopOfShroom.out}
      />
      <CavesCheck
        id={56009}
        name="Shuffled Kasplat: Killing the Wabbit"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <CavesCheck
        id={56010}
        name="Shuffled Kasplat: Frolicking with the Zingers"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <CavesCheck
        id={56011}
        name="Shuffled Kasplat: Behind the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56012}
        name="Shuffled Kasplat: Inside the front mill room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && isDay.out}
      />
      <CavesCheck
        id={56013}
        name="Shuffled Kasplat: In the Giant Shroom's moat"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={isBreathing.out && hasOranges && hasDiving.out}
      />
      <CavesCheck
        id={56014}
        name="Shuffled Kasplat: Lanky switch at the top of the Giant Shroom"
        region="Forest Area 3"
        canGetLogic={canReachLankySwitch.in}
        canGetBreak={canReachLankySwitch.out}
      />
      <CavesCheck
        id={56015}
        name="Shuffled Kasplat: Near Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasClimbing || hasBalloon)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBalloon)}
      />
      <CavesCheck
        id={56016}
        name="Shuffled Kasplat: At the minecart exit"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56017}
        name="Shuffled Kasplat: In Lanky's mushroom slam room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankyRooms.in}
        canGetBreak={canReachLankyRooms.out}
      />
      <CavesCheck
        id={56018}
        name="Shuffled Kasplat: Not afraid of spiders"
        region="Forest Area 1"
        canGetLogic={canReachSpydar.in}
        canGetBreak={canReachSpydar.out}
      />
      <CavesCheck
        id={56019}
        name="Shuffled Kasplat: In the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <CavesCheck
        id={56020}
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
