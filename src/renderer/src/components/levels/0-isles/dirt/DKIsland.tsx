import IslesCheck from '../check'
import { useGeneralDirt, useIslesUpper, useIslesCrossFungi } from '@renderer/hooks/isles'
import { useDk, useTwirl, useClimbing } from '@renderer/hooks/kongs'

const DKIslandDirt: React.FC = () => {
  const isBreathing = useGeneralDirt()
  const canReachAztecLobby = useIslesUpper()
  const canReachWaterfall = useIslesCrossFungi()
  const hasDK = useDk()
  const isHinaKagiyama = useTwirl()
  const hasClimbing = useClimbing()
    return (
    <>
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
        id={30006}
        name="Shuffled Dirt Patch: Vanilla Location 5 (at the Banana Hoard)"
        region="DK Island"
        canGetLogic={isBreathing && canDoIslesDirt5}
      />
      <IslesCheck
        id={30007}
        name="Shuffled Dirt Patch: Vanilla Location 6 (tunnel next to Cranky)"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30011}
        name="Shuffled Dirt Patch: Top of the waterfall"
        region="DK Island"
        canGetLogic={canReachWaterfall.in && hasShockwave}
        canGetBreak={canReachWaterfall.out && hasShockwave}
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
        canGetLogic={canReachFungiLobby && hasShockwave}
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
        canGetLogic={canReachAztecLobby.in && hasShockwave}
        canGetBreak={canReachAztecLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30018}
        name="Shuffled Dirt Patch: In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in && hasShockwave}
        canGetBreak={canReachAztecLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30019}
        name="Shuffled Dirt Patch: Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={canReachAztecLobby.in && hasShockwave}
        canGetBreak={canReachAztecLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30034}
        name="Shuffled Dirt Patch: Vanilla Warp 1 at DK Isle start"
        region="DK Island"
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
        canGetLogic={canReachAztecLobby.in && hasShockwave}
        canGetBreak={canReachAztecLobby.out && hasShockwave}
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
        id={30042}
        name="Shuffled Dirt Patch: Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30066}
        name="Shuffled Dirt Patch: On the mountain next to Cranky's"
        region="DK Island"
        canGetLogic={hasClimbing && hasShockwave}
      />
      <IslesCheck
        id={30067}
        name="Shuffled Dirt Patch: On the Treehouse Area's rear hill"
        region="DK Island"
        canGetLogic={hasClimbing && hasShockwave}
      />
      <IslesCheck
        id={30068}
        name="Shuffled Dirt Patch: On the Treehouse Area's entrance hill"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama && hasShockwave}
        canGetBreak={hasClimbing && hasDK && hasShockwave}
      />
      <IslesCheck
        id={30069}
        name="Shuffled Dirt Patch: On the mountain over the Treehouse Area exit"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama && hasShockwave}
        canGetBreak={hasClimbing && hasDK && hasShockwave}
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
        canGetLogic={hasClimbing && hasVines && hasShockwave}
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
        canGetLogic={hasClimbing && hasShockwave}
      />
    </>
    )
}

export default DKIslandDirt
