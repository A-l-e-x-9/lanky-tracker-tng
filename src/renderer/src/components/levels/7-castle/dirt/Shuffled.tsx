import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useSlamCastle, useOpenCrypt } from '@renderer/hooks/castle'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useClimbing, useRocket, useDiddy, useDk, usePunch, useCoconut, usePeanut, usePineapple, useGrape, useFeather, useSprint, useStrong, useMonkeyport, useChunky, useMini, useBlast } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
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
    <RainbowCoinPool>
      <CastleCheck
        id={37001}
        name="Shuffled Dirt Patch: Vanilla Location (behind Snide's)"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37003}
        name="Shuffled Dirt Patch: Near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37004}
        name="Shuffled Dirt Patch: Next to lowest Troff 'n' Scoff"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37005}
        name="Shuffled Dirt Patch: Right of crypt area entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37006}
        name="Shuffled Dirt Patch: Lowest ledge near a ladder"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37007}
        name="Shuffled Dirt Patch: Graveyard, behind &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37008}
        name="Shuffled Dirt Patch: Near Tiny's Kasplat"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37009}
        name="Shuffled Dirt Patch: Near crypt entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37010}
        name="Shuffled Dirt Patch: On the &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37011}
        name="Shuffled Dirt Patch: Near steps to lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37012}
        name="Shuffled Dirt Patch: Near the lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37013}
        name="Shuffled Dirt Patch: On a square stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37014}
        name="Shuffled Dirt Patch: Near the lower Jetbarrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37015}
        name="Shuffled Dirt Patch: Near the central area's Tag Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37016}
        name="Shuffled Dirt Patch: Near the headphones"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37017}
        name="Shuffled Dirt Patch: Near the drawbridge"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37018}
        name="Shuffled Dirt Patch: Near Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37019}
        name="Shuffled Dirt Patch: Near Chunky's shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37020}
        name="Shuffled Dirt Patch: Next to Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37021}
        name="Shuffled Dirt Patch: Next to Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37022}
        name="Shuffled Dirt Patch: Near fence at the top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37023}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37024}
        name="Shuffled Dirt Patch: On top of Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <CastleCheck
        id={37025}
        name="Shuffled Dirt Patch: Vanilla Warp 1, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37026}
        name="Shuffled Dirt Patch: Vanilla Warp 1, dungeon lower entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37027}
        name="Shuffled Dirt Patch: Vanilla Warp 2, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37028}
        name="Shuffled Dirt Patch: Vanilla Warp 2 at halfway point"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37029}
        name="Shuffled Dirt Patch: Vanilla Warp 3, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37030}
        name="Shuffled Dirt Patch: Vanilla Warp 3, in front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37031}
        name="Shuffled Dirt Patch: Vanilla Warp 4, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37032}
        name="Shuffled Dirt Patch: Vanilla Warp 4, in front of the greenhouse and shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37033}
        name="Shuffled Dirt Patch: Vanilla Warp 5, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37034}
        name="Shuffled Dirt Patch: Vanilla Warp 5, top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37035}
        name="Shuffled Dirt Patch: Near left ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37036}
        name="Shuffled Dirt Patch: Near right ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37037}
        name="Shuffled Dirt Patch: Ballroom back left"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37038}
        name="Shuffled Dirt Patch: Ballroom back right"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37039}
        name="Shuffled Dirt Patch: In DK's face puzzle room"
        region="Castle Dungeon"
        canGetLogic={hasDK && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37040}
        name="Shuffled Dirt Patch: Near the Diddy switch in the dungeon"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37041}
        name="Shuffled Dirt Patch: In a dungeon Primate Punch gate"
        region="Castle Dungeon"
        canGetLogic={hasPunch && hasShockwave}
      />
      <CastleCheck
        id={37042}
        name="Shuffled Dirt Patch: In the shed"
        region="Creepy Castle Main"
        canGetLogic={hasPunch && hasShockwave}
      />
      <CastleCheck
        id={37043}
        name="Shuffled Dirt Patch: Lower portion of crypt entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37044}
        name="Shuffled Dirt Patch: Behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37045}
        name="Shuffled Dirt Patch: Also behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37046}
        name="Shuffled Dirt Patch: Near Funky's"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37047}
        name="Shuffled Dirt Patch: At crypt entrance"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37048}
        name="Shuffled Dirt Patch: Near Diddy's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPeanuts || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasPeanuts || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37049}
        name="Shuffled Dirt Patch: Near Chunky's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37050}
        name="Shuffled Dirt Patch: Crypt Vanilla Warp 1, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37051}
        name="Shuffled Dirt Patch: Crypt Vanilla Warp 1, outside Diddy's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37052}
        name="Shuffled Dirt Patch: Crypt Vanilla Warp 2, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37053}
        name="Shuffled Dirt Patch: Crypt Vanilla Warp 2, outside DK's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37054}
        name="Shuffled Dirt Patch: Crypt Vanilla Warp 3, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37055}
        name="Shuffled Dirt Patch: Crypt Vanilla Warp 3, outside Chunky's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37056}
        name="Shuffled Dirt Patch: Mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || hasFeathers || cryptPreOpened) && hasClimbing && hasShockwave}
        canGetBreak={(hasGrapes || hasFeathers || cryptPreOpened) && hasShockwave}
      />
      <CastleCheck
        id={37057}
        name="Shuffled Dirt Patch: In Lanky's mausoleum tunnel"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || cryptPreOpened) && hasSprint && hasClimbing && hasShockwave}
        canGetBreak={(hasGrapes || cryptPreOpened) && hasDK && hasShockwave}
      />
      <CastleCheck
        id={37058}
        name="Shuffled Dirt Patch: Near the upper cave's pit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37059}
        name="Shuffled Dirt Patch: Near Candy's"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={37060}
        name="Shuffled Dirt Patch: In the enemy gauntlet area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={hasDK && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37061}
        name="Shuffled Dirt Patch: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={hasDK && hasSlam && hasStrongKong && hasShockwave}
        canGetBreak={hasDK && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37062}
        name="Shuffled Dirt Patch: Near Tiny's race entrance"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport && hasShockwave}
      />
      <CastleCheck
        id={37063}
        name="Shuffled Dirt Patch: In front of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport && hasShockwave}
      />
      <CastleCheck
        id={37064}
        name="Shuffled Dirt Patch: Back right of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport && hasShockwave}
      />
      <CastleCheck
        id={37065}
        name="Shuffled Dirt Patch: Behind the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport && hasShockwave}
      />
      <CastleCheck
        id={37066}
        name="Shuffled Dirt Patch: Back left of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport && hasShockwave}
      />
      <CastleCheck
        id={37067}
        name="Shuffled Dirt Patch: Main museum room"
        region="Various Castle Rooms"
        canGetLogic={hasChunky && hasSlam && hasShockwave}
      />
      <CastleCheck
        id={37068}
        name="Shuffled Dirt Patch: Inside the trash can"
        region="Creepy Castle Main"
        canGetLogic={hasMini && hasShockwave}
      />
      <CastleCheck
        id={37069}
        name="Shuffled Dirt Patch: Starting tree room"
        region="Creepy Castle Main"
        canGetLogic={hasBlast && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
