import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import IslesCheck from '../check'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useGeneralDirt, useIslesKremAscent, useIslesKremTop } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
const canReachFactoryLobby = useIslesKremAscent()
const canDoIslesArena1 = canReachFactoryLobby && hasShockwave
const canReachHelmLobby = useIslesKremTop()
const [key1, key2, key3, key4, key5, key6, key7, key8] = useDonkStore(useShallow((state) => [state.key1, state.key2, state.key3, state.key4, state.key5, state.key6, state.key7, state.key8]))
const hasAllEightKeys = key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8
  return (
    <RainbowCoinPool>
      <IslesCheck
        id={30000}
        name="Shuffled Dirt Patch: Under the rock in Snide's room"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={30008}
        name="Shuffled Dirt Patch: Vanilla Location 7 (back of K. Lumsy's prison)"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
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
        canGetLogic={canReachFactoryLobby && hasShockwave}
      />
      <IslesCheck
        id={30023}
        name="Shuffled Dirt Patch: Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasShockwave}
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
        canGetLogic={canReachFactoryLobby && hasShockwave}
      />
      <IslesCheck
        id={30026}
        name="Shuffled Dirt Patch: To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasShockwave}
      />
      <IslesCheck
        id={30027}
        name="Shuffled Dirt Patch: Behind Helm Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby && hasShockwave}
      />
      <IslesCheck
        id={30028}
        name="Shuffled Dirt Patch: Krem Isle's left arm, side"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby && hasShockwave}
      />
      <IslesCheck
        id={30029}
        name="Shuffled Dirt Patch: Krem Isle's left arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby && hasShockwave}
      />
      <IslesCheck
        id={30030}
        name="Shuffled Dirt Patch: Krem Isle's right arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby && hasShockwave}
      />
      <IslesCheck
        id={30035}
        name="Shuffled Dirt Patch: Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={30041}
        name="Shuffled Dirt Patch: Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasShockwave}
      />
      <IslesCheck
        id={30080}
        name="Shuffled Dirt Patch: Next to Snide's"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasShockwave}
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
        canGetLogic={hasAllEightKeys && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const KremIslandDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default KremIslandDirt
