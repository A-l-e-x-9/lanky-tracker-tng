import IslesCheck from '../check'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useGeneralDirt, useIslandDirt } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const canDoIslesDirt1 = useIslandDirt()
    return (
    <RainbowCoinPool>
      <IslesCheck
        id={30002}
        name="Shuffled Dirt Patch: Vanilla Location 1 (in front of the Fungi Lobby entrance)"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={30009}
        name="Shuffled Dirt Patch: Behind Forest Lobby building"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={30010}
        name="Shuffled Dirt Patch: Somewhere on the Fungi Lobby island"
        region="Outer Isles"
        canGetLogic={canDoIslesDirt1}
      />
      <IslesCheck
        id={30031}
        name="Shuffled Dirt Patch: On BFI"
        region="Outer Isles"
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
        id={30043}
        name="Shuffled Dirt Patch: Vanilla Warp 5 at BFI"
        region="Outer Isles"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30075}
        name="Shuffled Dirt Patch: To the right of the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI && hasShockwave}
      />
      <IslesCheck
        id={30076}
        name="Shuffled Dirt Patch: Behind the Banana Fairy Queen"
        region="Outer Isles"
        canGetLogic={canReachBFI && hasShockwave}
      />
      <IslesCheck
        id={30077}
        name="Shuffled Dirt Patch: Behind the Banana Fairy Queen's chair"
        region="Outer Isles"
        canGetLogic={canReachBFI && hasShockwave}
      />
      <IslesCheck
        id={30078}
        name="Shuffled Dirt Patch: Inside the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana && hasShockwave}
      />
      <IslesCheck
        id={30079}
        name="Shuffled Dirt Patch: In the right side of the Rareware GB room"
        region="Outer Isles"
        canGetLogic={canGetRareBanana && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const OuterDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default OuterDirt
