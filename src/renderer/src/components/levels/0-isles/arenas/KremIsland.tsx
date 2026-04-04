import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import IslesCheck from '../check'
import { useShuffledArenas } from '@renderer/hooks/settings'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useSnideArena, useIslesKremAscent, useIslesKremTop } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const isBreathing = useAnyKong()
  const canDoIslesArena1 = useSnideArena()
  const canReachFactoryLobby = useIslesKremAscent()
  const canReachHelmLobby = useIslesKremTop()
  const [key1, key2, key3, key4, key5, key6, key7, key8] = useDonkStore(useShallow((state) => [state.key1, state.key2, state.key3, state.key4, state.key5, state.key6, state.key7, state.key8]))
  const hasAllEightKeys = key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8
    return (
    <ArenaPool>
      <IslesCheck
        id={10000}
        name="Shuffled Battle Arena: Vanilla Arena 1 (under the rock in Snide's room)"
        region="K. Rool's Island"
        canGetLogic={canDoIslesArena1}
      />
      <IslesCheck
        id={10008}
        name="Shuffled Battle Arena: Back of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10020}
        name="Shuffled Battle Arena: Outer rim of K. Lumsy's island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10021}
        name="Shuffled Battle Arena: Near the bottom Monkeyport pad"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10022}
        name="Shuffled Battle Arena: Back middle of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={10023}
        name="Shuffled Battle Arena: Under DK's caged Banana"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={10024}
        name="Shuffled Battle Arena: At the rotors"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10025}
        name="Shuffled Battle Arena: Behind Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={10026}
        name="Shuffled Battle Arena: To the right of the Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={10027}
        name="Shuffled Battle Arena: Behind Helm Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10028}
        name="Shuffled Battle Arena: Krem Isle's left arm, side"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10029}
        name="Shuffled Battle Arena: Krem Isle's left arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10030}
        name="Shuffled Battle Arena: Krem Isle's right arm, front"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby}
      />
      <IslesCheck
        id={10035}
        name="Shuffled Battle Arena: Vanilla Warp 1 at K. Lumsy"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10041}
        name="Shuffled Battle Arena: Vanilla Warp 4 at Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={10080}
        name="Shuffled Battle Arena: Next to Snide's"
        region="K. Rool's Island"
        canGetLogic={isBreathing && canReachFactoryLobby}
      />
      <IslesCheck
        id={10081}
        name="Shuffled Battle Arena: Back right of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10082}
        name="Shuffled Battle Arena: Front left of K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={10083}
        name="Shuffled Battle Arena: Under K. Lumsy himself"
        region="K. Rool's Island"
        canGetLogic={hasAllEightKeys}
      />
    </ArenaPool>
    )
}

const KremIslandArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default KremIslandArenas
