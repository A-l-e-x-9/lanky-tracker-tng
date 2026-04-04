import IslesCheck from '../check'
import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useIslesRocket, useIslesFungiIsland, useIslesUpper, useIslesCrossFungi } from '@renderer/hooks/isles'
import { useAnyKong, useRocket, useBoulderTech, useDiddy, useTiny, useDk, useTwirl, useClimbing, useVine, useAnyGun, useDive, useOrange } from '@renderer/hooks/kongs'
import { useBananaport } from '@renderer/hooks/settings'

const Shuffled: React.FC = () => {
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
  const bananaportState = useBananaport()
  const hasVines = useVine()
  const hasAGun = useAnyGun()
  const hasDiving = useDive()
  const hasOranges = useOrange()
    return (
    <CratePool>
      <IslesCheck
        id={20003}
        name="Shuffled Melon Crate: On the Aztec Lobby roof"
        region="DK Island"
        canGetLogic={jetbarrelExists && canReachFungiLobby && hasJetbarrel}
        canGetBreak={((canReachAztecLobby.out && hasBoulderTech && (hasDiddy || hasTiny)) || (canReachWaterfall && (hasDK || isHinaKagiyama)))}
      />
      <IslesCheck
        id={20004}
        name="Shuffled Melon Crate: Under the Caves Lobby entrance"
        region="DK Island"
        canGetLogic={isBreathing && (hasClimbing || bananaportState != 0 || canReachWaterfall.in)}
        canGetBreak={isBreathing && canReachWaterfall.out}
      />
      <IslesCheck
        id={20006}
        name="Shuffled Melon Crate: At the Banana Hoard"
        region="DK Island"
        canGetLogic={hasVines && hasClimbing}
      />
      <IslesCheck
        id={20007}
        name="Shuffled Melon Crate: Tunnel next to Cranky"
        region="DK Island"
        canGetLogic={isBreathing}
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
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={20018}
        name="Shuffled Melon Crate: In front of the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={20019}
        name="Shuffled Melon Crate: Behind the Aztec Lobby entrance"
        region="DK Island"
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
      />
      <IslesCheck
        id={20034}
        name="Shuffled Melon Crate: Vanilla Warp 1 at DK Isle start"
        region="DK Island"
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
        canGetLogic={isBreathing && canReachAztecLobby.in}
        canGetBreak={isBreathing && canReachAztecLobby.out}
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
        id={20042}
        name="Shuffled Melon Crate: Vanilla Warp 5 at DK Isle start"
        region="DK Island"
        canGetLogic={isBreathing}
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
    </CratePool>
    )
}

const DKIslandCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default DKIslandCrates
