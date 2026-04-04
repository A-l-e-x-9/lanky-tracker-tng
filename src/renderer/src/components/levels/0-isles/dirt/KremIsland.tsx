import IslesCheck from '../check'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'

const KremIslandDirt: React.FC = () => {
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

export default KremIslandDirt
