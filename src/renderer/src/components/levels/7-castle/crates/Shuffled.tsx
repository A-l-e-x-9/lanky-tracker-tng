import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useLankyGreenhouseGb, useArena, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffleCrates } from '@renderer/hooks/settings'
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
    <CratePool>
      <CastleCheck
        id={27000}
        name="Shuffled Melon Crate: In Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={canDoGreenhouse.in}
        canGetBreak={canDoGreenhouse.out}
      />
      <CastleCheck
        id={27001}
        name="Shuffled Melon Crate: Behind Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27002}
        name="Shuffled Melon Crate: Where the Banana spawns in the Greenhouse"
        region="Creepy Castle Main"
        canGetLogic={canDoGreenhouse.in}
        canGetBreak={canDoGreenhouse.out}
      />
      <CastleCheck
        id={27003}
        name="Shuffled Melon Crate: Near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27004}
        name="Shuffled Melon Crate: Next to lowest Troff 'n' Scoff"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27005}
        name="Shuffled Melon Crate: Right of crypt area entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27006}
        name="Shuffled Melon Crate: Lowest ledge near a ladder"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27007}
        name="Shuffled Melon Crate: Graveyard, behind &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27008}
        name="Shuffled Melon Crate: Near Tiny's Kasplat"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27009}
        name="Shuffled Melon Crate: Near crypt entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27010}
        name="Shuffled Melon Crate: On the &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27011}
        name="Shuffled Melon Crate: Near steps to lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27012}
        name="Shuffled Melon Crate: Near the lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27013}
        name="Shuffled Melon Crate: On a square stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27014}
        name="Shuffled Melon Crate: Near the lower Jetbarrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27015}
        name="Shuffled Melon Crate: Near the central area's Tag Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27016}
        name="Shuffled Melon Crate: Near the headphones"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27017}
        name="Shuffled Melon Crate: Near the drawbridge"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27018}
        name="Shuffled Melon Crate: Near Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27019}
        name="Shuffled Melon Crate: Near Chunky's shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27020}
        name="Shuffled Melon Crate: Next to Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27021}
        name="Shuffled Melon Crate: Next to Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27022}
        name="Shuffled Melon Crate: Near fence at the top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27023}
        name="Shuffled Melon Crate: Near Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27024}
        name="Shuffled Melon Crate: On top of Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <CastleCheck
        id={27025}
        name="Shuffled Melon Crate: Vanilla Warp 1, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27026}
        name="Shuffled Melon Crate: Vanilla Warp 1, dungeon lower entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27027}
        name="Shuffled Melon Crate: Vanilla Warp 2, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27028}
        name="Shuffled Melon Crate: Vanilla Warp 2 at halfway point"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27029}
        name="Shuffled Melon Crate: Vanilla Warp 3, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27030}
        name="Shuffled Melon Crate: Vanilla Warp 3, in front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27031}
        name="Shuffled Melon Crate: Vanilla Warp 4, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27032}
        name="Shuffled Melon Crate: Vanilla Warp 4, in front of the greenhouse and shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27033}
        name="Shuffled Melon Crate: Vanilla Warp 5, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27034}
        name="Shuffled Melon Crate: Vanilla Warp 5, top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27035}
        name="Shuffled Melon Crate: Near left ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27036}
        name="Shuffled Melon Crate: Near right ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27037}
        name="Shuffled Melon Crate: Ballroom back left"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27038}
        name="Shuffled Melon Crate: Ballroom back right"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <CastleCheck
        id={27039}
        name="Shuffled Melon Crate: In DK's face puzzle room"
        region="Castle Dungeon"
        canGetLogic={hasDK && hasSlam}
      />
      <CastleCheck
        id={27040}
        name="Shuffled Melon Crate: Near the Diddy switch in the dungeon"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27041}
        name="Shuffled Melon Crate: In a dungeon Primate Punch gate"
        region="Castle Dungeon"
        canGetLogic={hasPunch}
      />
      <CastleCheck
        id={27042}
        name="Shuffled Melon Crate: In the shed"
        region="Creepy Castle Main"
        canGetLogic={hasPunch}
      />
      <CastleCheck
        id={27043}
        name="Shuffled Melon Crate: Lower portion of crypt entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27044}
        name="Shuffled Melon Crate: Vanilla Location (behind mausoleum entrance)"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27045}
        name="Shuffled Melon Crate: Also behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27046}
        name="Shuffled Melon Crate: Near Funky's"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27047}
        name="Shuffled Melon Crate: At crypt entrance"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27048}
        name="Shuffled Melon Crate: Near Diddy's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPeanuts || cryptPreOpened) && hasClimbing}
        canGetBreak={hasPeanuts || cryptPreOpened}
      />
      <CastleCheck
        id={27049}
        name="Shuffled Melon Crate: Near Chunky's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27050}
        name="Shuffled Melon Crate: Crypt Vanilla Warp 1, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27051}
        name="Shuffled Melon Crate: Crypt Vanilla Warp 1, outside Diddy's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27052}
        name="Shuffled Melon Crate: Crypt Vanilla Warp 2, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27053}
        name="Shuffled Melon Crate: Crypt Vanilla Warp 2, outside DK's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27054}
        name="Shuffled Melon Crate: Crypt Vanilla Warp 3, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27055}
        name="Shuffled Melon Crate: Crypt Vanilla Warp 3, outside Chunky's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <CastleCheck
        id={27056}
        name="Shuffled Melon Crate: Mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || hasFeathers || cryptPreOpened) && hasClimbing}
        canGetBreak={hasGrapes || hasFeathers || cryptPreOpened}
      />
      <CastleCheck
        id={27057}
        name="Shuffled Melon Crate: In Lanky's mausoleum tunnel"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || cryptPreOpened) && hasSprint && hasClimbing}
        canGetBreak={(hasGrapes || cryptPreOpened) && hasDK}
      />
      <CastleCheck
        id={27058}
        name="Shuffled Melon Crate: Near the upper cave's pit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27059}
        name="Shuffled Melon Crate: Near Candy's"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27060}
        name="Shuffled Melon Crate: In the enemy gauntlet area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={hasDK && hasSlam}
      />
      <CastleCheck
        id={27061}
        name="Shuffled Melon Crate: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={hasDK && hasSlam && hasStrongKong}
        canGetBreak={hasDK && hasSlam}
      />
      <CastleCheck
        id={27062}
        name="Shuffled Melon Crate: Near Tiny's race entrance"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={27063}
        name="Shuffled Melon Crate: In front of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={27064}
        name="Shuffled Melon Crate: Back right of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={27065}
        name="Shuffled Melon Crate: Behind the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={27066}
        name="Shuffled Melon Crate: Back left of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <CastleCheck
        id={27067}
        name="Shuffled Melon Crate: Main museum room"
        region="Various Castle Rooms"
        canGetLogic={hasChunky && hasSlam}
      />
      <CastleCheck
        id={27068}
        name="Shuffled Melon Crate: Inside the trash can"
        region="Creepy Castle Main"
        canGetLogic={hasMini}
      />
      <CastleCheck
        id={27069}
        name="Shuffled Melon Crate: Starting tree room"
        region="Creepy Castle Main"
        canGetLogic={hasBlast}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
