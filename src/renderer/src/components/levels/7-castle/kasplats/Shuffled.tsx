import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useTreeKasplat, useMausoleumKasplat, usePathKasplat, useLonelyKasplat, useDungeonKasplat, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyGun, useAnyMusic, useDive, useBalloon, useHighGrab, useMonkeyport, useGuitar, useBongos, useDiddy, useLanky, usePunch, useCoconut, useDk, useRocket } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useTreeKasplat()
const diddyVanillaKasplat = useMausoleumKasplat()
const lankyVanillaKasplat = usePillarKasplat()
const tinyVanillaKasplat = useLonelyKasplat()
const chunkyVanillaKasplat = useDungeonKasplat()
const isBreathing = useGeneralThing()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasDiving = useDive()
const hasBalloon = useBalloon()
const hasSlam = useSlamCastle()
const canHighGrab = useHighGrab()
const hasMonkeyport = useMonkeyport()
const hasGuitar = useGuitar()
const hasBongoes = useBongos()
const hasDiddy = useDiddy()
const hasLanky = useLanky()
const hasPrimatePunch = usePunch()
const hasCoconuts = useCoconut()
const cryptPreOpened = useOpenCrypt()
const hasDK = useDk()
const hasJetbarrel = useRocket()
  return (
    <KasplatPool>
      <CastleCheck
        id={57000}
        name="Shuffled Kasplat: DK's Vanilla Location (in the tree)"
        region="Creepy Castle Main"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <CastleCheck
        id={57001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (between the Crypt and Mausoleum)"
        region="Castle Crypt"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <CastleCheck
        id={57002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (by upper vanilla warp 2)"
        region="Creepy Castle Main"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <CastleCheck
        id={57003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (past the Crypt, almost to the vanilla level start)"
        region="Creepy Castle Main"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <CastleCheck
        id={57004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (in front of Candy's)"
        region="Castle Dungeon"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CastleCheck
        id={57005}
        name="Shuffled Kasplat: Where the vanilla Melon Crate would be"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57006}
        name="Shuffled Kasplat: Near the Dungeon's exit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57007}
        name="Shuffled Kasplat: At the lowest Troff 'n' Scoff portal"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57008}
        name="Shuffled Kasplat: Inside Diddy's Ballroom"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam}
      />
      <CastleCheck
        id={57009}
        name="Shuffled Kasplat: Behind Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57010}
        name="Shuffled Kasplat: In the pool near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={isBreathing.out && hasOranges && hasDiving.out}
      />
      <CastleCheck
        id={57011}
        name="Shuffled Kasplat: In front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57012}
        name="Shuffled Kasplat: At the Jetbarrel near the central warp area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57013}
        name="Shuffled Kasplat: Inside Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasLanky && hasSlam}
        canGetBreak={isBreathing.out && hasLanky && hasSlam}
      />
      <CastleCheck
        id={57014}
        name="Shuffled Kasplat: At the useless pedestal in the Museum"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDiddy && hasSlam && hasMonkeyport}
        canGetBreak={isBreathing.out && hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={57015}
        name="Shuffled Kasplat: Caged near DK's face puzzle"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <CastleCheck
        id={57016}
        name="Shuffled Kasplat: Outside DK's minecart game"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && (hasCoconuts || cryptPreOpened) && hasClimbing}
        canGetBreak={isBreathing.out && (hasCoconuts || cryptPreOpened)}
      />
      <CastleCheck
        id={57017}
        name="Shuffled Kasplat: In DK's library"
        region="Various Castle Rooms"
        canGetLogic={isBreathing.in && hasDK && hasSlam}
        canGetBreak={isBreathing.out && hasDK && hasSlam}
      />
      <CastleCheck
        id={57018}
        name="Shuffled Kasplat: The cloud platforms near Diddy's Bonus Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
