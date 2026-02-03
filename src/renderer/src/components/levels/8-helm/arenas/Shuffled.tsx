import ArenaPool from '@renderer/components/pools/Arenas'
import {  } from '@renderer/hooks/helm'
import { useShuffledArenas } from '@renderer/hooks/settings'
import {  } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <HelmCheck
        id={18000}
        name="Shuffled Battle Arena: Vanilla Arena (in Lanky's greenhouse)"
        region="Creepy Castle Main"
        canGetLogic={canReachVanillaArena}
      />
      <HelmCheck
        id={18001}
        name="Shuffled Battle Arena: Behind Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18002}
        name="Shuffled Battle Arena: Where the Banana spawns in the Greenhouse"
        region="Creepy Castle Main"
        canGetLogic={canDoGreenhouse.in}
        canGetBreak={canDoGreenhouse.out}
      />
      <HelmCheck
        id={18003}
        name="Shuffled Battle Arena: Near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18004}
        name="Shuffled Battle Arena: Next to lowest Troff 'n' Scoff"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18005}
        name="Shuffled Battle Arena: Right of crypt area entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18006}
        name="Shuffled Battle Arena: Lowest ledge near a ladder"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18007}
        name="Shuffled Battle Arena: Graveyard, behind &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18008}
        name="Shuffled Battle Arena: Near Tiny's Kasplat"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18009}
        name="Shuffled Battle Arena: Near crypt entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18010}
        name="Shuffled Battle Arena: On the &quot;useless&quot; stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18011}
        name="Shuffled Battle Arena: Near steps to lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18012}
        name="Shuffled Battle Arena: Near the lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18013}
        name="Shuffled Battle Arena: On a square stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18014}
        name="Shuffled Battle Arena: Near the lower Jetbarrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18015}
        name="Shuffled Battle Arena: Near the central area's Tag Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18016}
        name="Shuffled Battle Arena: Near the headphones"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18017}
        name="Shuffled Battle Arena: Near the drawbridge"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18018}
        name="Shuffled Battle Arena: Near Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18019}
        name="Shuffled Battle Arena: Near Chunky's shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18020}
        name="Shuffled Battle Arena: Next to Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18021}
        name="Shuffled Battle Arena: Next to Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18022}
        name="Shuffled Battle Arena: Near fence at the top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18023}
        name="Shuffled Battle Arena: Near Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18024}
        name="Shuffled Battle Arena: On top of Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <HelmCheck
        id={18025}
        name="Shuffled Battle Arena: Vanilla Warp 1, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18026}
        name="Shuffled Battle Arena: Vanilla Warp 1, dungeon lower entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18027}
        name="Shuffled Battle Arena: Vanilla Warp 2, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18028}
        name="Shuffled Battle Arena: Vanilla Warp 2 at halfway point"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18029}
        name="Shuffled Battle Arena: Vanilla Warp 3, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18030}
        name="Shuffled Battle Arena: Vanilla Warp 3, in front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18031}
        name="Shuffled Battle Arena: Vanilla Warp 4, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18032}
        name="Shuffled Battle Arena: Vanilla Warp 4, in front of the greenhouse and shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18033}
        name="Shuffled Battle Arena: Vanilla Warp 5, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18034}
        name="Shuffled Battle Arena: Vanilla Warp 5, top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18035}
        name="Shuffled Battle Arena: Near left ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <HelmCheck
        id={18036}
        name="Shuffled Battle Arena: Near right ballroom candle"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <HelmCheck
        id={18037}
        name="Shuffled Battle Arena: Ballroom back left"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <HelmCheck
        id={18038}
        name="Shuffled Battle Arena: Ballroom back right"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam}
      />
      <HelmCheck
        id={18039}
        name="Shuffled Battle Arena: In DK's face puzzle room"
        region="Castle Dungeon"
        canGetLogic={hasDK && hasSlam}
      />
      <HelmCheck
        id={18040}
        name="Shuffled Battle Arena: Near the Diddy switch in the dungeon"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18041}
        name="Shuffled Battle Arena: In a dungeon Primate Punch gate"
        region="Castle Dungeon"
        canGetLogic={hasPunch}
      />
      <HelmCheck
        id={18042}
        name="Shuffled Battle Arena: In the shed"
        region="Creepy Castle Main"
        canGetLogic={hasPunch}
      />
      <HelmCheck
        id={18043}
        name="Shuffled Battle Arena: Lower portion of crypt entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18044}
        name="Shuffled Battle Arena: Behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18045}
        name="Shuffled Battle Arena: Also behind mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18046}
        name="Shuffled Battle Arena: Near Funky's"
        region="Castle Crypt"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18047}
        name="Shuffled Battle Arena: At crypt entrance"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18048}
        name="Shuffled Battle Arena: Near Diddy's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPeanuts || cryptPreOpened) && hasClimbing}
        canGetBreak={hasPeanuts || cryptPreOpened}
      />
      <HelmCheck
        id={18049}
        name="Shuffled Battle Arena: Near Chunky's coffin"
        region="Castle Crypt"
        canGetLogic={(hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18050}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 1, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18051}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 1, outside Diddy's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18052}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 2, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18053}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 2, outside DK's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18054}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 3, central area"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18055}
        name="Shuffled Battle Arena: Crypt Vanilla Warp 3, outside Chunky's room"
        region="Castle Crypt"
        canGetLogic={(hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened) && hasClimbing}
        canGetBreak={hasCoconuts || hasPeanuts || hasPineapples || cryptPreOpened}
      />
      <HelmCheck
        id={18056}
        name="Shuffled Battle Arena: Mausoleum entrance"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || hasFeathers || cryptPreOpened) && hasClimbing}
        canGetBreak={hasGrapes || hasFeathers || cryptPreOpened}
      />
      <HelmCheck
        id={18057}
        name="Shuffled Battle Arena: In Lanky's mausoleum tunnel"
        region="Castle Crypt"
        canGetLogic={(hasGrapes || cryptPreOpened) && hasSprint && hasClimbing}
        canGetBreak={(hasGrapes || cryptPreOpened) && hasDK}
      />
      <HelmCheck
        id={18058}
        name="Shuffled Battle Arena: Near the upper cave's pit"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18059}
        name="Shuffled Battle Arena: Near Candy's"
        region="Castle Dungeon"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18061}
        name="Shuffled Battle Arena: In the flying book area of DK's library"
        region="Various Castle Rooms"
        canGetLogic={hasDK && hasSlam && hasStrongKong}
        canGetBreak={hasDK && hasSlam}
      />
      <HelmCheck
        id={18062}
        name="Shuffled Battle Arena: Near Tiny's race entrance"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <HelmCheck
        id={18063}
        name="Shuffled Battle Arena: In front of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <HelmCheck
        id={18064}
        name="Shuffled Battle Arena: Back right of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <HelmCheck
        id={18065}
        name="Shuffled Battle Arena: Behind the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <HelmCheck
        id={18066}
        name="Shuffled Battle Arena: Back left of the infamous museum pillar"
        region="Various Castle Rooms"
        canGetLogic={hasDiddy && hasSlam && hasMonkeyport}
      />
      <HelmCheck
        id={18067}
        name="Shuffled Battle Arena: Main museum room"
        region="Various Castle Rooms"
        canGetLogic={hasChunky && hasSlam}
      />
      <HelmCheck
        id={18068}
        name="Shuffled Battle Arena: Inside the trash can"
        region="Creepy Castle Main"
        canGetLogic={hasMini}
      />
      <HelmCheck
        id={18069}
        name="Shuffled Battle Arena: Starting tree room"
        region="Creepy Castle Main"
        canGetLogic={hasBlast}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
