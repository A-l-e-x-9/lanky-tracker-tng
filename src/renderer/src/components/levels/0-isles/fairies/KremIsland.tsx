import IslesCheck from '../check'
import FairyPool from '@renderer/components/pools/Fairies'

const KremIslandFairies: React.FC = () => {
  return (
    <FairyPool>
      <IslesCheck
        id={40001}
        name="Shuffled Fairy: Vanilla Location #2 (top of K. Rool's Island)"
        region="K. Rool's Island"
        canGetLogic={vanillaFairy2}
      />
      <IslesCheck
        id={40007}
        name="Shuffled Fairy: Near Factory Lobby entrance"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasCam}
      />
      <IslesCheck
        id={40008}
        name="Shuffled Fairy: Over K. Lumsy's Island"
        region="K. Rool's Island"
        canGetLogic={canReachForestLobby && canUseJetbarrel && hasJetbarrel && hasCam}
        canGetBreak={isBreathing}
      />
      <IslesCheck
        id={40009}
        name="Shuffled Fairy: Bottom of K. Rool's Island"
        region="K. Rool's Island"
        canGetLogic={isBreathing}
      />
      <IslesCheck
        id={40014}
        name="Shuffled Fairy: In Snide's room"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby && hasCam}
      />
    </FairyPool>
  )
}

export default KremIslandFairies
