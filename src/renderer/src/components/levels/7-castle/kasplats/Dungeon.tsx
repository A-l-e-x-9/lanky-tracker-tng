import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useTreeKasplat, useMausoleumKasplat, usePathKasplat, useLonelyKasplat, useDungeonKasplat, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyGun, useAnyMusic, useDive, useMonkeyport, useDiddy, useLanky, usePunch, useCoconut, useDk, useRocket, useClimbing, useOrange } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useTreeKasplat()
const diddyVanillaKasplat = useMausoleumKasplat()
const lankyVanillaKasplat = usePathKasplat()
const tinyVanillaKasplat = useLonelyKasplat()
const chunkyVanillaKasplat = useDungeonKasplat()
const isBreathing = useGeneralThing()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasDiving = useDive()
const hasSlam = useSlamCastle()
const hasMonkeyport = useMonkeyport()
const hasDiddy = useDiddy()
const hasLanky = useLanky()
const hasPrimatePunch = usePunch()
const hasCoconuts = useCoconut()
const cryptPreOpened = useOpenCrypt()
const hasDK = useDk()
const hasJetbarrel = useRocket()
const hasClimbing = useClimbing()
const hasOranges = useOrange()
  return (
    <KasplatPool>
      <CastleCheck
        id={57004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (in front of Candy's)"
        region="Castle Dungeon"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CastleCheck
        id={57006}
        name="Shuffled Kasplat: Near the Dungeon's exit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57015}
        name="Shuffled Kasplat: Caged near DK's face puzzle"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
    </KasplatPool>
  )
}

const DungeonKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default DungeonKasplats
