import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useFactoryLobbyUpper } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInFactoryUpper = useFactoryLobbyUpper()
  return (
    <ArenaPool>
      <IslesCheck
        id={10049}
        name="Shuffled Battle Arena: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInFactoryLobby.in}
        canGetBreak={isBreathing && canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={10050}
        name="Shuffled Battle Arena: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={10051}
        name="Shuffled Battle Arena: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
    </ArenaPool>
  )
}

const FactoryLobbyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default FactoryLobbyArenas
