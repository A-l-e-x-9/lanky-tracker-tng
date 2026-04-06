import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useAnyKong, useBoulderTech, useBalloon, useDiddy, useTiny } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const hasBoulderTech = useBoulderTech()
const hasBalloon = useBalloon()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
  return (
    <ArenaPool>
      <IslesCheck
        id={10005}
        name="Shuffled Battle Arena: Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasBoulderTech && hasBalloon}
        canGetBreak={canGetInCastleLobby.out && (hasDiddy || hasTiny)}
      />
      <IslesCheck
        id={10060}
        name="Shuffled Battle Arena: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInCastleLobby.in}
        canGetBreak={isBreathing && canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10061}
        name="Shuffled Battle Arena: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInCastleLobby.in}
        canGetBreak={isBreathing && canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10062}
        name="Shuffled Battle Arena: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInCastleLobby.in}
        canGetBreak={isBreathing && canGetInCastleLobby.out}
      />
    </ArenaPool>
  )
}

const CastleLobbyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CastleLobbyArenas
