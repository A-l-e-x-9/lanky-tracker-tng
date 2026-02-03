import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useLankyGreenhouseGb, useArena, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useClimbing, useRocket, useDiddy, useDk, usePunch, useCoconut, usePeanut, usePineapple, useGrape, useFeather, useSprint, useStrong, useMonkeyport, useChunky, useMini, useBlast } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const canDoGreenhouse = useLankyGreenhouseGb()
const hasClimbing = useClimbing()
const hasJetbarrel = useRocket()
const hasDiddy = useDiddy()
const hasSlam = useSlamCastle()
const hasDK = useDk()
const hasPunch = usePunch()
const hasCoconuts = useCoconut()
const hasPeanuts = usePeanut()
const hasPineapples = usePineapple()
const cryptPreOpened = useOpenCrypt()
const hasGrapes = useGrape()
const hasFeathers = useFeather()
const hasSprint = useSprint()
const hasStrongKong = useStrong()
const hasMonkeyport = useMonkeyport()
const hasChunky = useChunky()
const hasMini = useMini()
const hasBlast = useBlast()
  return (
    <ArenaPool>
      <CastleCheck
        id={17000}
        name="Shuffled Battle Arena: Vanilla Arena (in Lanky's greenhouse)"
        region="Creepy Castle Main"
        canGetLogic={canReachVanillaArena}
      />
      <CastleCheck
        id={17001}
        name="Shuffled Battle Arena: Behind Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17002}
        name="Shuffled Battle Arena: Where the Banana spawns in the Greenhouse"
        region="Creepy Castle Main"
        canGetLogic={canDoGreenhouse.in}
        canGetBreak={canDoGreenhouse.out}
      />
      <CastleCheck
        id={17003}
        name="Shuffled Battle Arena: Near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17004}
        name="Shuffled Battle Arena: Next to lowest Troff 'n' Scoff"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17005}
        name="Shuffled Battle Arena: Right of crypt area entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17006}
        name="Shuffled Battle Arena: Lowest ledge near a ladder"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17007}
        name="Shuffled Battle Arena: Graveyard, behind &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17008}
        name="Shuffled Battle Arena: Near Tiny's Kasplat"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17009}
        name="Shuffled Battle Arena: Near crypt entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17010}
        name="Shuffled Battle Arena: On the &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17011}
        name="Shuffled Battle Arena: Near steps to lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17012}
        name="Shuffled Battle Arena: Near the lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17013}
        name="Shuffled Battle Arena: On a square stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17014}
        name="Shuffled Battle Arena: Near the lower Jetbarrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17015}
        name="Shuffled Battle Arena: Near the central area's Tag Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17016}
        name="Shuffled Battle Arena: Near the headphones"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17017}
        name="Shuffled Battle Arena: Near the drawbridge"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17018}
        name="Shuffled Battle Arena: Near Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17019}
        name="Shuffled Battle Arena: Near Chunky's shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17020}
        name="Shuffled Battle Arena: Next to Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17021}
        name="Shuffled Battle Arena: Next to Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17022}
        name="Shuffled Battle Arena: Near fence at the top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17023}
        name="Shuffled Battle Arena: Near Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17024}
        name="Shuffled Battle Arena: On top of Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <CastleCheck
        id={17025}
        name="Shuffled Battle Arena: Vanilla Warp 1, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17026}
        name="Shuffled Battle Arena: Vanilla Warp 1, dungeon lower entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17027}
        name="Shuffled Battle Arena: Vanilla Warp 2, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17028}
        name="Shuffled Battle Arena: Vanilla Warp 2 at halfway point"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17029}
        name="Shuffled Battle Arena: Vanilla Warp 3, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17030}
        name="Shuffled Battle Arena: Vanilla Warp 3, in front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17031}
        name="Shuffled Battle Arena: Vanilla Warp 4, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17032}
        name="Shuffled Battle Arena: Vanilla Warp 4, in front of the greenhouse and shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17033}
        name="Shuffled Battle Arena: Vanilla Warp 5, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17034}
        name="Shuffled Battle Arena: Vanilla Warp 5, top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17035}
        name="Shuffled Battle Arena: Near left ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={17036}
        name="Shuffled Battle Arena: Near right ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={17037}
        name="Shuffled Battle Arena: Ballroom back left"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={17038}
        name="Shuffled Battle Arena: Ballroom back right"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={17039}
        name="Shuffled Battle Arena: In DK's face puzzle room"
        region="Castle Dungeon"
        canGetLogic={hasDK && hasSlam}
      />
      <CastleCheck
        id={17040}
        name="Shuffled Battle Arena: Near the Diddy switch in the dungeon"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17041}
        name="Shuffled Battle Arena: In a dungeon Primate Punch gate"
        region="Castle Dungeon"
        canGetLogic={hasPunch}
      />
      <CastleCheck
        id={17042}
        name="Shuffled Battle Arena: In the shed"
        region="Creepy Castle Main"
        canGetLogic={hasPunch}
      />
      <CastleCheck
        id={17043}
        name="Shuffled Battle Arena: Lower portion of crypt entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17044}
        name="Shuffled Battle Arena: Behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17045}
        name="Shuffled Battle Arena: Also behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17046}
        name="Shuffled Battle Arena: Near Funky's"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17047}
        name="Shuffled Battle Arena: At crypt entrance"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17048}
        name="Shuffled Battle Arena: Near Diddy's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPeanuts || cryptPreOpened) && hasClimbing}
        canGetBreak={hasPeanuts || cryptPreOpened}
      />
      <CastleCheck
        id={17049}
        name="Shuffled Battle Arena: Near Chunky's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17050}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 1, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17051}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 1, outside Diddy's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17052}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 2, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17053}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 2, outside DK's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17054}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 3, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17055}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 3, outside Chunky's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={17056}
        name="Shuffled Battle Arena: Mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || hasFeathers || cryptPreOpened) && hasClimbing}
        canGetBreak={hasGrapes || hasFeathers || cryptPreOpened}
      />
      <CastleCheck
        id={17057}
        name="Shuffled Battle Arena: In Lanky's mausoleum tunnel"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || cryptPreOpened) && hasSprint && hasClimbing}
        canGetBreak={(hasGrapes || cryptPreOpened) && hasDK}
      />
      <CastleCheck
        id={17058}
        name="Shuffled Battle Arena: Near the upper cave's pit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17059}
        name="Shuffled Battle Arena: Near Candy's"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={17061}
        name="Shuffled Battle Arena: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={hasDK && hasSlam && hasStrongKong}
        canGetBreak={hasDK && hasSlam}
      />
      <CastleCheck
        id={17062}
        name="Shuffled Battle Arena: Near Tiny's race entrance"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={17063}
        name="Shuffled Battle Arena: In front of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={17064}
        name="Shuffled Battle Arena: Back right of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={17065}
        name="Shuffled Battle Arena: Behind the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={17066}
        name="Shuffled Battle Arena: Back left of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={17067}
        name="Shuffled Battle Arena: Main museum room"
        region="Various Castle Rooms"
        canGetLogic={hasChunky && hasSlam}
      />
      <CastleCheck
        id={17068}
        name="Shuffled Battle Arena: Inside the trash can"
        region="Creepy Castle Main"
        canGetLogic={hasMini}
      />
      <CastleCheck
        id={17069}
        name="Shuffled Battle Arena: Starting tree room"
        region="Creepy Castle Main"
        canGetLogic={hasBlast}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
