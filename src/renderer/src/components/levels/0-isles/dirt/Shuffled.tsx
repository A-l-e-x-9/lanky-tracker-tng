import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useSnideArena, useForestArena, useIslandDirt, useAztecDirt, useUnderCaveDirt, useIslesFungiIsland, useIslesCrossFungi, useIslesUpper, useIslesKremAscent, usePlayLobby, useCheckBFIInitial, useCheckBananaFairyIsle } from '@renderer/hooks/isles'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useClimbing, useTwirl, useDk, useVine, useAnyGun, useOrange, useDive } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
const hasClimbing = useClimbing()
const hasVines = useVine()
const canReachFactoryLobby = useIslesKremAscent()
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canDoIslesArena1 = canReachFactoryLobby && hasShockwave
const canDoIslesArena2 = canGetInForestLobby && hasShockwave
const canDoIslesDirt1 = useIslandDirt()
const canDoIslesDirt2 = useAztecDirt()
const canDoIslesDirt3 = useUnderCaveDirt()
const canDoIslesDirt4 = useCastleDirt()
const canDoIslesDirt5 = hasVines && hasClimbing
const canReachFungiLobby = useIslesFungiIsland()
const canReachWaterfall = useIslesCrossFungi()
const canReachAztecLobby = useIslesUpper()
const canReachHelmLobby = useIslesKremTop()
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const isHinaKagiyama = useTwirl()
const hasDK = useDk()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasDiving = useDive()
const canReachBFI = useCheckBFIInitial()
const canReachRareBanana = useCheckBananaFairyIsle()
const [key1, key2, key3, key4, key5, key6, key7, key8] = useDonkStore(useShallow((state) => [state.key1, state.key2, state.key3, state.key4, state.key5, state.key6, state.key7, state.key8]))
const hasAllEightKeys = key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8
const hasBoulderTech = useBoulderTech()
  return (
    <RainbowCoinPool>
      <IslesCheck
        id={30000}
        name="Shuffled Dirt Patch: Under the rock in Snide's room"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={30001}
        name="Shuffled Dirt Patch: Check of Legends 2"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={30002}
        name="Shuffled Dirt Patch: Vanilla Location 1 (in front of the Fungi Lobby entrance)"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={30003}
        name="Shuffled Dirt Patch: Vanilla Location 2 (on the Aztec Lobby roof)"
        region="DK Island"
        canGetLogic={canDoIslesDirt2.in}
        canGetBreak={canDoIslesDirt2.out}
      />
      <IslesCheck
        id={30004}
        name="Shuffled Dirt Patch: Vanilla Location 3 (under the Caves Lobby entrance)"
        region="DK Island"
        canGetLogic={canDoIslesDirt3.in}
        canGetBreak={canDoIslesDirt3.out}
      />
      <IslesCheck
        id={30005}
        name="Shuffled Dirt Patch: Vanilla Location 4 (under Lanky's Castle Lobby barrel)"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4.in}
        canGetBreak={canDoIslesDirt4.out}
      />
      <IslesCheck
        id={30006}
        name="Shuffled Dirt Patch: Vanilla Location 5 (at the Banana Hoard)"
        region="DK Island"
        canGetLogic={canDoIslesDirt5}
      />
      <IslesCheck
        id={30007}
        name="Shuffled Dirt Patch: Vanilla Location 6 (tunnel next to Cranky)"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30008}
        name="Shuffled Dirt Patch: Vanilla Location 7 (back of K. Lumsy's prison)"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30009}
        name="Shuffled Dirt Patch: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={30010}
        name="Shuffled Dirt Patch: Somewhere on the Fungi Lobby island"
        region="Outer Isles"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={30011}
        name="Shuffled Dirt Patch: Top of the waterfall"
        region="DK Island"
        canGetLogic={canReachWaterfall.in}
        canGetBreak={canReachWaterfall.out}
      />
      <IslesCheck
        id={30012}
        name="Shuffled Dirt Patch: Under tree on path to Aztec Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30013}
        name="Shuffled Dirt Patch: Back of DK Island"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30014}
        name="Shuffled Dirt Patch: Near the Fungi cannon"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30015}
        name="Shuffled Dirt Patch: On the Fungi cannon's island"
        region="DK Island"
        canGetLogic={canReachFungiLobby}
      />
      <IslesCheck
        id={30016}
        name="Shuffled Dirt Patch: Next to the Aztec Lobby Tree"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30017}
        name="Shuffled Dirt Patch: At the boulders near Caves Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={30018}
        name="Shuffled Dirt Patch: In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={30019}
        name="Shuffled Dirt Patch: Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={30020}
        name="Shuffled Dirt Patch: Outer rim of K. Lumsy's island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30021}
        name="Shuffled Dirt Patch: Near the bottom Monkeyport pad"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30022}
        name="Shuffled Dirt Patch: Back middle of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={30023}
        name="Shuffled Dirt Patch: Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={30024}
        name="Shuffled Dirt Patch: At the rotors"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30025}
        name="Shuffled Dirt Patch: Behind Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={30026}
        name="Shuffled Dirt Patch: To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={30027}
        name="Shuffled Dirt Patch: Behind Helm Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={30028}
        name="Shuffled Dirt Patch: Krem Isle's left arm, side"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={30029}
        name="Shuffled Dirt Patch: Krem Isle's left arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={30030}
        name="Shuffled Dirt Patch: Krem Isle's right arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={30031}
        name="Shuffled Dirt Patch: On BFI"
        region="OUter Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30032}
        name="Shuffled Dirt Patch: Back of BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30033}
        name="Shuffled Dirt Patch: The small island"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30034}
        name="Shuffled Dirt Patch: Vanilla Warp 1 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30035}
        name="Shuffled Dirt Patch: Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30036}
        name="Shuffled Dirt Patch: Vanilla Warp 2 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30037}
        name="Shuffled Dirt Patch: Vanilla Warp 2 at Aztec Lobby"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in}
        canGetBreak={canReachAztecLobby.out}
      />
      <IslesCheck
        id={30038}
        name="Shuffled Dirt Patch: Vanilla Warp 3 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30039}
        name="Shuffled Dirt Patch: Vanilla Warp 3 at back of DK Isle"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30040}
        name="Shuffled Dirt Patch: Vanilla Warp 4 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30041}
        name="Shuffled Dirt Patch: Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={30042}
        name="Shuffled Dirt Patch: Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30043}
        name="Shuffled Dirt Patch: Vanilla Warp 5 at BFI"
        region="OUter Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30044}
        name="Shuffled Dirt Patch: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={30045}
        name="Shuffled Dirt Patch: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={30046}
        name="Shuffled Dirt Patch: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={30047}
        name="Shuffled Dirt Patch: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={30048}
        name="Shuffled Dirt Patch: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={30049}
        name="Shuffled Dirt Patch: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={30050}
        name="Shuffled Dirt Patch: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={30051}
        name="Shuffled Dirt Patch: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in}
        canGetBreak={canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={30052}
        name="Shuffled Dirt Patch: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={30053}
        name="Shuffled Dirt Patch: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={30054}
        name="Shuffled Dirt Patch: Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={30055}
        name="Shuffled Dirt Patch: On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in}
        canGetBreak={canGetInForestLobby.out}
      />
      <IslesCheck
        id={30056}
        name="Shuffled Dirt Patch: Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={30057}
        name="Shuffled Dirt Patch: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={30058}
        name="Shuffled Dirt Patch: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={30059}
        name="Shuffled Dirt Patch: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={30060}
        name="Shuffled Dirt Patch: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={30061}
        name="Shuffled Dirt Patch: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={30062}
        name="Shuffled Dirt Patch: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={30063}
        name="Shuffled Dirt Patch: Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={30064}
        name="Shuffled Dirt Patch: Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={30065}
        name="Shuffled Dirt Patch: On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in}
        canGetBreak={canGetInHelmLobby.out}
      />
      <IslesCheck
        id={30066}
        name="Shuffled Dirt Patch: On the mountain next to Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={30067}
        name="Shuffled Dirt Patch: On the Treehouse Area's rear hill"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={30068}
        name="Shuffled Dirt Patch: On the Treehouse Area's entrance hill"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={30069}
        name="Shuffled Dirt Patch: On the mountain over the Treehouse Area exit"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={30070}
        name="Shuffled Dirt Patch: In the cave next to Cranky's, behind the vanilla dirt location"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30071}
        name="Shuffled Dirt Patch: In the back of the Banana Hoard"
        region="DK Island"
        canGetLogic={hasClimbing && hasVines}
      />
      <IslesCheck
        id={30073}
        name="Shuffled Dirt Patch: In front of the Treehouse's pool"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30074}
        name="Shuffled Dirt Patch: Inside the Treehouse itself"
        region="DK Island"
        canGetLogic={hasClimbing}
      />
      <IslesCheck
        id={30075}
        name="Shuffled Dirt Patch: To the right of the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={30076}
        name="Shuffled Dirt Patch: Behind the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={30077}
        name="Shuffled Dirt Patch: Behind the Banana Fairy Queen's chair"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={30078}
        name="Shuffled Dirt Patch: Inside the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={30079}
        name="Shuffled Dirt Patch: In the right side of the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={30080}
        name="Shuffled Dirt Patch: Next to Snide's"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby}
      />
      <IslesCheck
        id={30081}
        name="Shuffled Dirt Patch: Back right of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30082}
        name="Shuffled Dirt Patch: Front left of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30083}
        name="Shuffled Dirt Patch: Under K. Lumsy himself"
        region="K. Rool's Island"
        canGetLogic={hasAllEightKeys}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
