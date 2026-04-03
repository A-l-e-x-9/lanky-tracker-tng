import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useSnideArena, useIslesFungiIsland, useIslesKremAscent, useIslesKremTop, usePlayLobby, useCheckBFIInitial, useCheckBananaFairyIsle, useAztecLobbyChunky, useFactoryLobbyUpper, useCavesKasplat, useCheckChunkyHelm, useHelmKasplat, useCheckTinyGalleonLobby } from '@renderer/hooks/isles'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useAnyKong, useDiddy, useTiny, useBoulderTech, useTwirl, useRocket, useBalloon, useStrong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import useDonkStore from '@renderer/store'
import DKIslandCrates from './DKIsland'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasBoulderTech = useBoulderTech()
const isHinaKagiyama = useTwirl()
const hasJetbarrel = useRocket()
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canDoIslesArena1 = useSnideArena()
const canDoIslesArena2 = canGetInForestLobby
const canReachFungiLobby = useIslesFungiIsland()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canDoIslesDirt1 = canReachFungiLobby
const canReachFactoryLobby = useIslesKremAscent()
const canReachHelmLobby = useIslesKremTop()
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
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
const hasBalloon = useBalloon()
return (
    <CratePool>
      <DKIslandCrates />
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
        id={20005}
        name="Shuffled Melon Crate: Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasBoulderTech && hasBalloon}
        canGetBreak={canGetInCastleLobby.out && (hasDiddy || hasTiny)}
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
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={20023}
        name="Shuffled Melon Crate: Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
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
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={20026}
        name="Shuffled Melon Crate: To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
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
        id={20035}
        name="Shuffled Melon Crate: Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={20041}
        name="Shuffled Melon Crate: Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
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
        canGetLogic={isBreathing && canGetInFactoryLobby.in}
        canGetBreak={isBreathing && canGetInFactoryLobby.out}
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
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama}
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
        canGetLogic={isBreathing && canGetInHelmLobby.in}
        canGetBreak={isBreathing && canGetInHelmLobby.out}
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
        canGetLogic={isBreathing && canReachFactoryLobby}
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
