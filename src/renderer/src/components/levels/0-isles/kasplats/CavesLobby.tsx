import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useCavesKasplat, useCavesLobbyGeneric } from '@renderer/hooks/isles'
import { useRocket, useBoulderTech, useTwirl } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const lankyKasplat = useCavesKasplat()
const canDoGuitarGB = useCavesLobbyGeneric()
const hasJetbarrel = useRocket()
const boulderTech = useBoulderTech()
const hinaKagiyama = useTwirl()
  return (
    <KasplatPool>
      <IslesCheck
        id={50002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a wall in Caves Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={lankyKasplat.in}
        canGetBreak={lankyKasplat.out}
      />
      <IslesCheck
        id={50011}
        name="Shuffled Kasplat: On Diddy's platform in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoGuitarGB.in && hasJetbarrel}
        canGetBreak={canDoGuitarGB.out && boulderTech && hinaKagiyama}
      />
    </KasplatPool>
  )
}

const CavesLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CastleLobbyKasplats
