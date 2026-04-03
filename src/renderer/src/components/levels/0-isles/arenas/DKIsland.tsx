import IslesCheck from '../check'
import { useIslesRocket, useIslesFungiIsland, useIslesUpper, useIslesCrossFungi } from '@renderer/hooks/isles'
import { useAnyKong, useRocket, useBoulderTech, useDiddy, useTiny, useDk, useTwirl, useClimbing, useVine } from '@renderer/hooks/kongs'
import { useBananaport } from '@renderer/hooks/settings'

const DKIslandArenas: React.FC = () => {
  const isBreathing = useAnyKong()
  const jetbarrelExists = useIslesRocket()
  const canReachFungiLobby = useIslesFungiIsland()
  const hasJetbarrel = useRocket()
  const canReachAztecLobby = useIslesUpper()
  const hasBoulderTech = useBoulderTech()
  const hasDiddy = useDiddy()
  const hasTiny = useTiny()
  const canReachWaterfall = useIslesCrossFungi()
  const hasDK = useDk()
  const isHinaKagiyama = useTwirl()
  const hasClimbing = useClimbing()
  const bananaportSettings = useBananaport()
  const hasVines = useVine()
    return (
    <>
      <IslesCheck
        id={10003}
        name="Shuffled Battle Arena: On the Aztec Lobby roof"
        region="DK Island"
        canGetLogic={jetbarrelExists && canReachFungiLobby && hasJetbarrel}
        canGetBreak={((canReachAztecLobby.out && hasBoulderTech && (hasDiddy || hasTiny)) || (canReachWaterfall && (hasDK || isHinaKagiyama)))}
      />
      <IslesCheck
        id={10004}
        name="Shuffled Battle Arena: Under the Caves Lobby entrance"
        region="DK Island"
        canGetLogic={isBreathing && (hasClimbing || bananaportSettings != 0 || canReachWaterfall.in)}
        canGetBreak={isBreathing && canReachWaterfall.out}
      />
      <IslesCheck
        id={10006}
        name="Shuffled Battle Arena: At the Banana Hoard"
        region="DK Island"
        canGetLogic={hasVines && hasClimbing}
      />
      <IslesCheck
        id={10007}
        name="Shuffled Battle Arena: Tunnel next to Cranky"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10011}
        name="Shuffled Battle Arena: Top of the waterfall"
        region="DK Island"
        canGetLogic={canReachWaterfall.in}
        canGetBreak={canReachWaterfall.out}
      />
      <IslesCheck
        id={10012}
        name="Shuffled Battle Arena: Under tree on path to Aztec Lobby"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10013}
        name="Shuffled Battle Arena: Back of DK Island"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10014}
        name="Shuffled Battle Arena: Near the Fungi cannon"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10015}
        name="Shuffled Battle Arena: On the Fungi cannon's island"
        region="DK Island"
        canGetLogic={isBreathing && canReachFungiLobby}
      />
      <IslesCheck
        id={10016}
        name="Shuffled Battle Arena: Next to the Aztec Lobby Tree"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10017}
        name="Shuffled Battle Arena: At the boulders near Caves Lobby"
        region="DK Island"
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={10018}
        name="Shuffled Battle Arena: In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={10019}
        name="Shuffled Battle Arena: Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={10034}
        name="Shuffled Battle Arena: Vanilla Warp 1 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10036}
        name="Shuffled Battle Arena: Vanilla Warp 2 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10037}
        name="Shuffled Battle Arena: Vanilla Warp 2 at Aztec Lobby"
        region="DK Island"
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={10038}
        name="Shuffled Battle Arena: Vanilla Warp 3 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10039}
        name="Shuffled Battle Arena: Vanilla Warp 3 at back of DK Isle"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10040}
        name="Shuffled Battle Arena: Vanilla Warp 4 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10042}
        name="Shuffled Battle Arena: Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10066}
        name="Shuffled Battle Arena: On the mountain next to Cranky's"
        region="DK Island"
        canGetLogic={isBreathing && hasClimbing}
      />
      <IslesCheck
        id={10067}
        name="Shuffled Battle Arena: On the Treehouse Area's rear hill"
        region="DK Island"
        canGetLogic={isBreathing && hasClimbing}
      />
      <IslesCheck
        id={10068}
        name="Shuffled Battle Arena: On the Treehouse Area's entrance hill"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={10069}
        name="Shuffled Battle Arena: On the mountain over the Treehouse Area exit"
        region="DK Island"
        canGetLogic={hasClimbing && isHinaKagiyama}
        canGetBreak={hasClimbing && hasDK}
      />
      <IslesCheck
        id={10070}
        name="Shuffled Battle Arena: In the cave next to Cranky's, behind the vanilla dirt location"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10071}
        name="Shuffled Battle Arena: In the back of the Banana Hoard"
        region="DK Island"
        canGetLogic={hasClimbing && hasVines}
      />
      <IslesCheck
        id={10073}
        name="Shuffled Battle Arena: In front of the Treehouse's pool"
        region="DK Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10074}
        name="Shuffled Battle Arena: Inside the Treehouse itself"
        region="DK Island"
        canGetLogic={isBreathing && hasClimbing}
      />
    </>
    )
}

export default DKIslandArenas
