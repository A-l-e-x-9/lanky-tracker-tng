import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useIslesFungiIsland, useCheckBFIInitial, useCheckBananaFairyIsle } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canReachFungiLobby = useIslesFungiIsland()
const canDoIslesDirt1 = canReachFungiLobby
const canReachBFI = useCheckBFIInitial()
const canGetRareBanana = useCheckBananaFairyIsle()
  return (
    <ArenaPool>
      <IslesCheck
        id={10002}
        name="Shuffled Battle Arena: In front of the Fungi Lobby entrance"
        region="Outer Isles"
        canGetLogic={isBreathing && canDoIslesDirt1}
      />
      <IslesCheck
        id={10009}
        name="Shuffled Battle Arena: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={isBreathing && canReachFungiLobby}
      />
      <IslesCheck
        id={10010}
        name="Shuffled Battle Arena: Somewhere on the Fungi Lobby island"
        region="Outer Isles"
        canGetLogic={isBreathing && canReachFungiLobby}
      />
      <IslesCheck
        id={10031}
        name="Shuffled Battle Arena: On BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10032}
        name="Shuffled Battle Arena: Back of BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10033}
        name="Shuffled Battle Arena: The small island"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10043}
        name="Shuffled Battle Arena: Vanilla Warp 5 at BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10075}
        name="Shuffled Battle Arena: To the right of the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={10076}
        name="Shuffled Battle Arena: Behind the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={10077}
        name="Shuffled Battle Arena: Behind the Banana Fairy Queen's chair"
        region="Outer Isles"
        canGetLogic={canReachBFI}
      />
      <IslesCheck
        id={10078}
        name="Shuffled Battle Arena: Inside the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
      <IslesCheck
        id={10079}
        name="Shuffled Battle Arena: In the right side of the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana}
      />
    </ArenaPool>
  )
}

const OuterArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default OuterArenas
