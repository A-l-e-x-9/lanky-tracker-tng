import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import IslesCheck from '../check'
import CratePool from '@renderer/components/pools/Crates'
import { useSnideArena, useIslesKremAscent, useIslesKremTop } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const KremIslandCrates: React.FC = () => {
const isBreathing = useAnyKong()
const canDoIslesArena1 = useSnideArena()
const canReachFactoryLobby = useIslesKremAscent()
const canReachHelmLobby = useIslesKremTop()
const [key1, key2, key3, key4, key5, key6, key7, key8] = useDonkStore(useShallow((state) => [state.key1, state.key2, state.key3, state.key4, state.key5, state.key6, state.key7, state.key8]))
const hasAllEightKeys = key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8
  return (
    <CratePool>
      <IslesCheck
        id={20000}
        name="Shuffled Melon Crate: Under the rock in Snide's room"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={20008}
        name="Shuffled Melon Crate: Back of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
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

export default KremIslandCrates
