import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useFactoryKasplat, usePlayLobby } from '@renderer/hooks/isles'
import { useGrab, useHighGrab } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
const tinyKasplat = useFactoryKasplat()
const canReachFactoryLobby = usePlayLobby('Frantic Factory')
const hasGrab = useGrab()
const highGrab = useHighGrab()
return (
  <KasplatPool>
    <IslesCheck
      id={50003}
      name="Shuffled Kasplat: Tiny's Vanilla Location (a box in Factory Lobby)"
      region="Japes-Forest Lobbies"
      canGetLogic={tinyKasplat.in}
      canGetBreak={tinyKasplat.out}
    />
    <IslesCheck
      id={50006}
      name="Shuffled Kasplat: Factory Lobby, above the DK Portal"
      region="Japes-Forest Lobbies"
      canGetLogic={canReachFactoryLobby.in && hasGrab}
      canGetBreak={highGrab}
    />
  </KasplatPool>
)
}

const FactoryLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default FactoryLobbyKasplats
