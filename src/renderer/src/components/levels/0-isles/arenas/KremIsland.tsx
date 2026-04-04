import IslesCheck from '../check'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useSnideArena } from '@renderer/hooks/isles'

const KremIslandArenas: React.FC = () => {
  const canDoIslesArena1 = useSnideArena()
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

export default KremIslandArenas
