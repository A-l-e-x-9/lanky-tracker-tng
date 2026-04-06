import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useCavesKasplat } from '@renderer/hooks/isles'
import { useRocket, useBoulderTech, useTwirl } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const hasJetbarrel = useRocket()
const hasBoulderTech = useBoulderTech()
const isHinaKagiyama = useTwirl()
const canGetInCavesKasplat = useCavesKasplat()
  return (
    <ArenaPool>
      <IslesCheck
        id={10057}
        name="Shuffled Battle Arena: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={10058}
        name="Shuffled Battle Arena: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel}
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama}
      />
      <IslesCheck
        id={10059}
        name="Shuffled Battle Arena: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in}
        canGetBreak={canGetInCavesKasplat.out}
      />
    </ArenaPool>
  )
}

const CavesLobbyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CavesLobbyArenas
