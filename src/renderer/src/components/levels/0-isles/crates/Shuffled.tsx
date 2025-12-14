import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useSnideArena, useIslesFungiIsland, useIslesCrossFungi, useIslesUpper, useIslesKremAscent, useIslesKremTop, usePlayLobby, useCheckBFIInitial, useCheckBananaFairyIsle, useIslesRocket, useAztecLobbyChunky, useFactoryLobbyUpper, useCavesKasplat, useCheckChunkyHelm, useHelmKasplat, useCheckTinyGalleonLobby } from '@renderer/hooks/isles'
import { useShuffleCrates, useBananaport } from '@renderer/hooks/settings'
import { useAnyKong, useDiddy, useTiny, useBoulderTech, useClimbing, useTwirl, useDk, useVine, useRocket, useBalloon, useStrong, useAnyGun, useOrange, useDive } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const hasDK = useDk()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasBoulderTech = useBoulderTech()
const isHinaKagiyama = useTwirl()
const hasJetbarrel = useRocket()
const hasVines = useVine()
const hasClimbing = useClimbing()
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canDoIslesArena1 = useSnideArena()
const canDoIslesArena2 = canGetInForestLobby
const canReachAztecLobby = useIslesUpper()
const canReachFungiLobby = useIslesFungiIsland()
const canReachWaterfall = useIslesCrossFungi()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canDoIslesDirt1 = canReachFungiLobby
const canDoIslesDirt2InLogic = useIslesRocket() && canReachFungiLobby && useRocket()
const canDoIslesDirt2OutLogic = ((canReachAztecLobby.out && hasBoulderTech && (hasDiddy || hasTiny)) || (canReachWaterfall && (hasDK || isHinaKagiyama)))
const canDoIslesDirt3InLogic = hasClimbing || useBananaport() != 0 || canReachWaterfall.in
const canDoIslesDirt3OutLogic = canReachWaterfall.out
const canDoIslesDirt4InLogic = canGetInCastleLobby.in && hasBoulderTech && useBalloon()
const canDoIslesDirt4OutLogic = canGetInCastleLobby.out && (hasDiddy || hasTiny)
const canDoIslesDirt5 = hasVines && hasClimbing
const canReachFactoryLobby = useIslesKremAscent()
const canReachHelmLobby = useIslesKremTop()
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasDiving = useDive()
const canReachBFI = useCheckBFIInitial()
const canGetRareBanana = useCheckBananaFairyIsle()
const [key1, key2, key3, key4, key5, key6, key7, key8] = useDonkStore(useShallow((state) => [state.key1, state.key2, state.key3, state.key4, state.key5, state.key6, state.key7, state.key8]))
const hasAllEightKeys = key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8
const canGetInAztecBack = useAztecLobbyChunky()
const canGetInFactoryUpper = useFactoryLobbyUpper()
const canGetInGalleonTiny = useCheckTinyGalleonLobby()
const canGetInCavesKasplat = useCavesKasplat()
const canGetInHelmChunky = useCheckChunkyHelm()
const canGetInHelmDK = useHelmKasplat()
const hasStrongKong = useStrong()
  return (
    <CratePool>
      <IslesCheck
        id={20000}
        name="Shuffled Melon Crate: Under the rock in Snide's room"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={20001}
        name="Shuffled Melon Crate: Where the Check of Legends 2 Battle Arena would spawn in vanilla"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={20002}
        name="Shuffled Melon Crate: In front of the Fungi Lobby entrance"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={20003}
        name="Shuffled Melon Crate: On the Aztec Lobby roof"
        region="DK Island"
        canGetLogic={canDoIslesDirt2InLogic}
        canGetBreak={canDoIslesDirt2OutLogic}
      />
      <IslesCheck
        id={20004}
        name="Shuffled Melon Crate: Under the Caves Lobby entrance"
        region="DK Island"
        canGetLogic={canDoIslesDirt3InLogic}
        canGetBreak={canDoIslesDirt3OutLogic}
      />
      <IslesCheck
        id={20005}
        name="Shuffled Melon Crate: Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4InLogic}
        canGetBreak={canDoIslesDirt4OutLogic}
      />
      <IslesCheck
        id={20006}
        name="Shuffled Melon Crate: At the Banana Hoard"
        region="DK Island"
        canGetLogic={canDoIslesDirt5}
      />
      <IslesCheck
        id={20007}
        name="Shuffled Melon Crate: Tunnel next to Cranky"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20008}
        name="Shuffled Melon Crate: Back of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20009}
        name="Shuffled Melon Crate: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={20010}
        name="Shuffled Melon Crate: Somewhere on the Fungi Lobby island"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={20011}
        name="Shuffled Melon Crate: Top of the waterfall"
        region="DK Island"
        canGetLogic={canReachWaterfall.in}
        canGetBreak={canReachWaterfall.out}
      />
      <IslesCheck
        id={20012}
        name="Shuffled Melon Crate: Under tree on path to Aztec Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20013}
        name="Shuffled Melon Crate: Back of DK Island"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20014}
        name="Shuffled Melon Crate: Near the Fungi cannon"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20015}
        name="Shuffled Melon Crate: On the Fungi cannon's island"
        region="DK Island"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={20016}
        name="Shuffled Melon Crate: Next to the Aztec Lobby Tree"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20017}
        name="Shuffled Melon Crate: At the boulders near Caves Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={20018}
        name="Shuffled Melon Crate: In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={20019}
        name="Shuffled Melon Crate: Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={20020}
        name="Shuffled Melon Crate: Outer rim of K. Lumsy's island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20021}
        name="Shuffled Melon Crate: Near the bottom Monkeyport pad"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20022}
        name="Shuffled Melon Crate: Back middle of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={20023}
        name="Shuffled Melon Crate: Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={20024}
        name="Shuffled Melon Crate: At the rotors"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20025}
        name="Shuffled Melon Crate: Behind Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={20026}
        name="Shuffled Melon Crate: To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={20027}
        name="Shuffled Melon Crate: Behind Helm Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={20028}
        name="Shuffled Melon Crate: Krem Isle's left arm, side"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={20029}
        name="Shuffled Melon Crate: Krem Isle's left arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={20030}
        name="Shuffled Melon Crate: Krem Isle's right arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={20031}
        name="Shuffled Melon Crate: On BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20032}
        name="Shuffled Melon Crate: Back of BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20033}
        name="Shuffled Melon Crate: The small island"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20034}
        name="Shuffled Melon Crate: Vanilla Warp 1 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20035}
        name="Shuffled Melon Crate: Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20036}
        name="Shuffled Melon Crate: Vanilla Warp 2 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20037}
        name="Shuffled Melon Crate: Vanilla Warp 2 at Aztec Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={20038}
        name="Shuffled Melon Crate: Vanilla Warp 3 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20039}
        name="Shuffled Melon Crate: Vanilla Warp 3 at back of DK Isle"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20040}
        name="Shuffled Melon Crate: Vanilla Warp 4 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20041}
        name="Shuffled Melon Crate: Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={20042}
        name="Shuffled Melon Crate: Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20043}
        name="Shuffled Melon Crate: Vanilla Warp 5 at BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20044}
        name="Shuffled Melon Crate: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={20045}
        name="Shuffled Melon Crate: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={20046}
        name="Shuffled Melon Crate: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={20047}
        name="Shuffled Melon Crate: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
      <IslesCheck
        id={20048}
        name="Shuffled Melon Crate: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
      <IslesCheck
        id={20049}
        name="Shuffled Melon Crate: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={20050}
        name="Shuffled Melon Crate: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={20051}
        name="Shuffled Melon Crate: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={20052}
        name="Shuffled Melon Crate: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={20053}
        name="Shuffled Melon Crate: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={20054}
        name="Shuffled Melon Crate: Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonTiny.in}
        canGetBreak={canGetInGalleonTiny.out}
      />
      <IslesCheck
        id={20056}
        name="Shuffled Melon Crate: Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasStrongKong}
        canGetBreak={canGetInCavesKasplat.out && hasStrongKong}
      />
      <IslesCheck
        id={20057}
        name="Shuffled Melon Crate: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={20058}
        name="Shuffled Melon Crate: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel}
        canGetBreak={canGetInCavesLobby.out && hasJetbarrel}
      />
      <IslesCheck
        id={20059}
        name="Shuffled Melon Crate: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in}
        canGetBreak={canGetInCavesKasplat.out}
      />
      <IslesCheck
        id={20060}
        name="Shuffled Melon Crate: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20061}
        name="Shuffled Melon Crate: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20062}
        name="Shuffled Melon Crate: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20063}
        name="Shuffled Melon Crate: Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={20064}
        name="Shuffled Melon Crate: Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmChunky.in}
        canGetBreak={canGetInHelmChunky.out}
      />
      <IslesCheck
        id={20065}
        name="Shuffled Melon Crate: On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmDK.in}
        canGetBreak={canGetInHelmDK.out}
      />
      <IslesCheck
        id={20066}
        name="Shuffled Melon Crate: On the mountain next to Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={20067}
        name="Shuffled Melon Crate: On the Treehouse Area's rear hill"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={20068}
        name="Shuffled Melon Crate: On the Treehouse Area's entrance hill"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={20069}
        name="Shuffled Melon Crate: On the mountain over the Treehouse Area exit"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={20070}
        name="Shuffled Melon Crate: In the cave next to Cranky's, behind the vanilla dirt location"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20071}
        name="Shuffled Melon Crate: In the back of the Banana Hoard"
        region="DK Island"
        canGetLogic={hasClimbing && hasVines}
      />
      <IslesCheck
        id={20072}
        name="Shuffled Melon Crate: In the pool next to the Treehouse"
        region="DK Island"
        canGetLogic={hasAGun && hasDiving.in}
        canGetBreak={hasOranges && hasDiving.out}
      />
      <IslesCheck
        id={20073}
        name="Shuffled Melon Crate: In front of the Treehouse's pool"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20074}
        name="Shuffled Melon Crate: Inside the Treehouse itself"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={20075}
        name="Shuffled Melon Crate: To the right of the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={20076}
        name="Shuffled Melon Crate: Behind the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={20077}
        name="Shuffled Melon Crate: Behind the Banana Fairy Queen's chair"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={20078}
        name="Shuffled Melon Crate: Inside the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={20079}
        name="Shuffled Melon Crate: In the right side of the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={20080}
        name="Shuffled Melon Crate: Next to Snide's"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={20081}
        name="Shuffled Melon Crate: Back right of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20082}
        name="Shuffled Melon Crate: Front left of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20083}
        name="Shuffled Melon Crate: Under K. Lumsy himself"
        region="K. Rool's Island"
        canGetLogic={hasAllEightKeys}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
