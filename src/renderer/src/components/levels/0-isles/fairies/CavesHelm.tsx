import FairyPool from '@renderer/components/pools/Fairies'
import CavesLobbyFairies from './CavesLobby'
import CastleLobbyFairies from './CastleLobby'

const CavesHelmFairies: React.FC = () => {
  return (
    <FairyPool>
      <CavesLobbyFairies />
      <CastleLobbyFairies />
    </FairyPool>
  )
}

export default CavesHelmFairies
