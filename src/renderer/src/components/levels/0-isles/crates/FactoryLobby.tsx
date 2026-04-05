import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useFactoryLobbyUpper } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInFactoryUpper = useFactoryLobbyUpper()
return (
    <CratePool>
      <IslesCheck
        id={20049}
        name="Shuffled Melon Crate: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInFactoryLobby.in}
        canGetBreak={isBreathing && canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={20050}
        name="Shuffled Melon Crate: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={20051}
        name="Shuffled Melon Crate: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
    </CratePool>
  )
}

const FactoryLobbyCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default FactoryLobbyCrates
