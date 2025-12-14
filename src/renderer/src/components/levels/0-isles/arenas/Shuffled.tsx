import Pool from '@renderer/components/pools/'
import { useGeneral, useSnideArena, useForestArena, useIslandDirt, useAztecDirt, useUnderCaveDirt, useIslesFungiIsland, useIslesCrossFungi, useIslesUpper, useIslesKremAscent, usePlayLobby } from '@renderer/hooks/isles'
import { useShuffle } from '@renderer/hooks/settings'
import {  } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneral()
const canDoIslesArena1 = useSnideArena()
const canDoIslesArena2 = useForestArena()
const canDoIslesDirt1 = useIslandDirt()
const canDoIslesDirt2 = useAztecDirt()
const canDoIslesDirt3 = useUnderCaveDirt()
const canDoIslesDirt4 = useCastleDirt()
const canDoIslesDirt5 = useHoardDirt()
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
  return (
    <Pool>
      <IslesCheck
        id={00000}
        name="Under the rock in Snide's room"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={00001}
        name="Check of Legends 2"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={00002}
        name="In front of the Fungi Lobby entrance"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={00003}
        name="On the Aztec Lobby roof"
        region="DK Island"
        canGetLogic={canDoIslesDirt2.in}
        canGetBreak={canDoIslesDirt2.out}
      />
      <IslesCheck
        id={00004}
        name="Under the Caves Lobby entrance"
        region="DK Island"
        canGetLogic={canDoIslesDirt3.in}
        canGetBreak={canDoIslesDirt3.out}
      />
      <IslesCheck
        id={00005}
        name="Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4.in}
        canGetBreak={canDoIslesDirt4.out}
      />
      <IslesCheck
        id={00006}
        name="At the Banana Hoard"
        region="DK Island"
        canGetLogic={canDoIslesDirt5}
      />
      <IslesCheck
        id={00007}
        name="Tunnel next to Cranky"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00008}
        name="Back of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00009}
        name="Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={00010}
        name="Somewhere on the Fungi Lobby island"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={00011}
        name="Top of the waterfall"
        region="DK Island"
        canGetLogic={canReachWaterfall.in}
        canGetBreak={canReachWaterfall.out}
      />
      <IslesCheck
        id={00012}
        name="Under tree on path to Aztec Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00013}
        name="Back of DK Island"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00014}
        name="Near the Fungi cannon"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00015}
        name="On the Fungi cannon's island"
        region="DK Island"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={00016}
        name="Next to the Aztec Lobby Tree"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00017}
        name="At the boulders near Caves Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={00018}
        name="In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={00019}
        name="Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={00020}
        name="Outer rim of K. Lumsy's island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00021}
        name="Near the bottom Monkeyport pad"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00022}
        name="Back middle of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={00023}
        name="Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={00024}
        name="At the rotors"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00025}
        name="Behind Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={00026}
        name="To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={00027}
        name="Behind Helm Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={00028}
        name="Krem Isle's left arm, side"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={00029}
        name="Krem Isle's left arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={00030}
        name="Krem Isle's right arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={00031}
        name="On BFI"
        region="OUter Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00032}
        name="Back of BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00033}
        name="The small island"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00034}
        name="Vanilla Warp 1 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00035}
        name="Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00036}
        name="Vanilla Warp 2 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00037}
        name="Vanilla Warp 2 at Aztec Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={00038}
        name="Vanilla Warp 3 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00039}
        name="Vanilla Warp 3 at back of DK Isle"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00040}
        name="Vanilla Warp 4 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00041}
        name="Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={00042}
        name="Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00043}
        name="Vanilla Warp 5 at BFI"
        region="OUter Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00044}
        name="At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={00045}
        name="At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={00046}
        name="In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={00047}
        name="Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={00048}
        name="Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={00049}
        name="Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={00050}
        name="On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={00051}
        name="Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={00052}
        name="To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={00053}
        name="To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={00054}
        name="Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={00055}
        name="On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in}
        canGetBreak={canGetInForestLobby.out}
      />
      <IslesCheck
        id={00056}
        name="Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={00057}
        name="To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={00058}
        name="Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={00059}
        name="Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={00060}
        name="Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={00061}
        name="To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={00062}
        name="To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={00063}
        name="Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
/*      <IslesCheck
        id={00000}
        name="Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={00001}
        name="On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesArena2}
      />
      <IslesCheck
        id={00002}
        name="On the mountain next to Cranky's"
        region="DK Island"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={00003}
        name="On the Treehouse Area's rear hill"
        region="DK Island"
        canGetLogic={canDoIslesDirt2}
      />
      <IslesCheck
        id={00004}
        name="On the Treehouse Area's entrance hill"
        region="DK Island"
        canGetLogic={canDoIslesDirt3}
      />
      <IslesCheck
        id={00005}
        name="On the mountain over the Treehouse Area exit"
        region="DK Island"
        canGetLogic={canDoIslesDirt4}
      />
      <IslesCheck
        id={00006}
        name="In the cave next to Cranky's, behind the vanilla dirt location"
        region="DK Island"
        canGetLogic={canDoIslesDirt5}
      />
      <IslesCheck
        id={00007}
        name="In the back of the Banana Hoard"
        region="DK Island"
        canGetLogic={canDoIslesDirt6}
      />
      <IslesCheck
        id={00008}
        name="In the pool next to the Treehouse"
        region="DK Island"
        canGetLogic={canDoIslesDirt7}
      />
      <IslesCheck
        id={00009}
        name="In front of the Treehouse's pool"
        region="DK Island"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={00010}
        name="Inside the Treehouse itself"
        region="DK Island"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={00011}
        name="To the right of the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachWaterfall}
      />
      <IslesCheck
        id={00012}
        name="Behind the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00013}
        name="Behind the Banana Fairy Queen's chair"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00014}
        name="Inside the Rareware GB room"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00015}
        name="In the right side of the Rareware GB room"
        region="Outer Isles"
        canGetLogic={hasKey4}
      />
/*      <IslesCheck
        id={00012}
        name="Next to Snide's"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00013}
        name="Back right of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00014}
        name="Front left of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={00015}
        name="Under K. Lumsy himself"
        region="K. Rool's Island"
        canGetLogic={hasKey4}
      />*/
    </Pool>
  )
}

const Shuffled: React.FC = () => (useShuffle() ? <Shuffled /> : null)
export default Shuffled
