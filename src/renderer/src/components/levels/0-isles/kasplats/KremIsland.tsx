import IslesCheck from '../check'
import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { usePlayLobby, useCheckLankyPrison } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
  const canReachFactoryLobby = usePlayLobby('Frantic Factory')
  const canReachHelmLobby = usePlayLobby('Hideout Helm')
  const canDoSprintGB = useCheckLankyPrison()
    return (
    <KasplatPool>
      <IslesCheck
        id={50008}
        name="Shuffled Kasplat: Behind Factory Lobby"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby.in}
        canGetBreak={canReachFactoryLobby.out}
      />
      <IslesCheck
        id={50012}
        name="Shuffled Kasplat: Inside the &quot;sprint cage&quot; in K. Lumsy's prison"
        region="K. Rool's Island"
        canGetLogic={canDoSprintGB.in}
        canGetBreak={canDoSprintGB.out}
      />
      <IslesCheck
        id={50014}
        name="Shuffled Kasplat: Behind Helm Lobby"
        region="K. Rool's Island"
        canGetLogic={canReachHelmLobby.in}
        canGetBreak={canReachHelmLobby.out}
      />
      <IslesCheck
        id={50015}
        name="Shuffled Kasplat: In Snide's room"
        region="K. Rool's Island"
        canGetLogic={canReachFactoryLobby.in}
        canGetBreak={canReachFactoryLobby.out}
      />
    </KasplatPool>
    )
}

const KremIslandKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default KremIslandKasplats
