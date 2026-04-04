import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useIslesFungiIsland } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canReachFungiLobby = useIslesFungiIsland()
const canDoIslesDirt1 = canReachFungiLobby
  return (
    <CratePool>
      <IslesCheck
        id={20002}
        name="Shuffled Melon Crate: In front of the Fungi Lobby entrance"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
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
        id={20043}
        name="Shuffled Melon Crate: Vanilla Warp 5 at BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
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
    </CratePool>
  )
}

const OuterCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default OuterCrates
