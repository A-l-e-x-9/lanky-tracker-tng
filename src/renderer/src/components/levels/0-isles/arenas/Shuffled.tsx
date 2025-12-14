import ArenaPool from '@renderer/components/pools/Arenas'
import { useAnyKong, useSnideArena, useForestArena, useIslandDirt, useAztecDirt, useUnderCaveDirt, useIslesFungiIsland, useIslesCrossFungi, useIslesUpper, useIslesKremAscent, usePlayLobby, useCheckBFIInitial, useCheckBananaFairyIsle } from '@renderer/hooks/isles'
import { useShuffle } from '@renderer/hooks/settings'
import { useClimbing, useTwirl, useDk, useVine, useAnyGun, useOrange, useDive } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import useDonkStore from '@renderer/store'

const ShuffledArenas: React.FC = () => {
const isBreathing = useAnyKong()
const canDoIslesArena1 = useSnideArena()
const canDoIslesArena2 = useForestArena()
const canDoIslesDirt1 = canReachFungiLobby
const canDoIslesDirt2.in = useIslesRocket() && canReachFungiLobby && useRocket()
const canDoIslesDirt2.out = ((canReachAztecLobby.out && hasBoulderTech && (useDiddy() || useTiny())) || (canReachWaterfall && (hasDK || isHinaKagiyama)))
const canDoIslesDirt3.in = hasClimbing || useBananaport() != 0 || canReachWaterfall.in
const canDoIslesDirt3.out = canReachWaterfall.out
const canDoIslesDirt4.in = canGetInCastleLobby.in && hasBoulderTech && useBalloon()
const canDoIslesDirt5 = hasVines && hasClimbing
const canReachFungiLobby = useIslesFungiIsland()
const canReachWaterfall = useIslesCrossFungi()
const canReachAztecLobby = useIslesUpper()
const canReachFactoryLobby = useIslesKremAscent()
const canReachHelmLobby = useIslesKremTop()
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const hasClimbing = useClimbing()
const isHinaKagiyama = useTwirl()
const hasDK = useDk()
const hasVines = useVine()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasDiving = useDive()
const canReachBFI = useCheckBFIInitial()
const canReachRareBanana = useCheckBananaFairyIsle()
const [key1, key2, key3, key4, key5, key6, key7, key8] = useDonkStore(useShallow((state) => [state.key1, state.key2, state.key3, state.key4, state.key5, state.key6, state.key7, state.key8]))
const hasAllEightKeys = key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8
const hasBoulderTech = useBoulderTech()
  return (
    <ArenaPool>
      <IslesCheck
        id={10000}
        name="Vanilla Arena 1: Under the rock in Snide's room"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={10001}
        name="Vanilla Arena 2: Check of Legends 2"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={10002}
        name="In front of the Fungi Lobby entrance"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={10003}
        name="On the Aztec Lobby roof"
        region="DK Island"
        canGetLogic={canDoIslesDirt2.in}
        canGetBreak={canDoIslesDirt2.out}
      />
      <IslesCheck
        id={10004}
        name="Under the Caves Lobby entrance"
        region="DK Island"
        canGetLogic={canDoIslesDirt3.in}
        canGetBreak={canDoIslesDirt3.out}
      />
      <IslesCheck
        id={10005}
        name="Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4.in}
        canGetBreak={canDoIslesDirt4.out}
      />
      <IslesCheck
        id={10006}
        name="At the Banana Hoard"
        region="DK Island"
        canGetLogic={canDoIslesDirt5}
      />
      <IslesCheck
        id={10007}
        name="Tunnel next to Cranky"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10008}
        name="Back of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10009}
        name="Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={10010}
        name="Somewhere on the Fungi Lobby island"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={10011}
        name="Top of the waterfall"
        region="DK Island"
        canGetLogic={canReachWaterfall.in}
        canGetBreak={canReachWaterfall.out}
      />
      <IslesCheck
        id={10012}
        name="Under tree on path to Aztec Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10013}
        name="Back of DK Island"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10014}
        name="Near the Fungi cannon"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10015}
        name="On the Fungi cannon's island"
        region="DK Island"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={10016}
        name="Next to the Aztec Lobby Tree"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10017}
        name="At the boulders near Caves Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={10018}
        name="In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={10019}
        name="Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={10020}
        name="Outer rim of K. Lumsy's island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10021}
        name="Near the bottom Monkeyport pad"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10022}
        name="Back middle of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={10023}
        name="Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={10024}
        name="At the rotors"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10025}
        name="Behind Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={10026}
        name="To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={10027}
        name="Behind Helm Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10028}
        name="Krem Isle's left arm, side"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10029}
        name="Krem Isle's left arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10030}
        name="Krem Isle's right arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10031}
        name="On BFI"
        region="OUter Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10032}
        name="Back of BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10033}
        name="The small island"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10034}
        name="Vanilla Warp 1 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10035}
        name="Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10036}
        name="Vanilla Warp 2 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10037}
        name="Vanilla Warp 2 at Aztec Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={10038}
        name="Vanilla Warp 3 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10039}
        name="Vanilla Warp 3 at back of DK Isle"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10040}
        name="Vanilla Warp 4 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10041}
        name="Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={10042}
        name="Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10043}
        name="Vanilla Warp 5 at BFI"
        region="OUter Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10044}
        name="At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={10045}
        name="At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={10046}
        name="In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={10047}
        name="Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={10048}
        name="Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={10049}
        name="Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={10050}
        name="On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={10051}
        name="Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={10052}
        name="To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={10053}
        name="To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={10055}
        name="On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in}
        canGetBreak={canGetInForestLobby.out}
      />
      <IslesCheck
        id={10057}
        name="To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={10058}
        name="Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={10059}
        name="Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={10060}
        name="Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10061}
        name="To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10062}
        name="To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10063}
        name="Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={10064}
        name="Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={10065}
        name="On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={10066}
        name="On the mountain next to Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={10067}
        name="On the Treehouse Area's rear hill"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={10068}
        name="On the Treehouse Area's entrance hill"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={10069}
        name="On the mountain over the Treehouse Area exit"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={10070}
        name="In the cave next to Cranky's, behind the vanilla dirt location"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10071}
        name="In the back of the Banana Hoard"
        region="DK Island"
        canGetLogic={hasClimbing && hasVines}
      />
      <IslesCheck
        id={10073}
        name="In front of the Treehouse's pool"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10074}
        name="Inside the Treehouse itself"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={10075}
        name="To the right of the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={10076}
        name="Behind the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={10077}
        name="Behind the Banana Fairy Queen's chair"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={10078}
        name="Inside the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={10079}
        name="In the right side of the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={10080}
        name="Next to Snide's"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={10081}
        name="Back right of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10082}
        name="Front left of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10083}
        name="Under K. Lumsy himself"
        region="K. Rool's Island"
        canGetLogic={hasAllEightKeys}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffle() ? <Shuffled /> : null)
export default ShuffledArenas
