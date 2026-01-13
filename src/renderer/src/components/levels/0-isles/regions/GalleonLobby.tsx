import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonSwim from '../gold-bananas/tiny/GalleonSwim'
import ChunkyKasplat from '../kasplats/Chunky'
import GalleonLobbyDK from '../wrinkly/GalleonLobbyDK'
import GalleonLobbyDiddy from '../wrinkly/GalleonLobbyDiddy'
import GalleonLobbyLanky from '../wrinkly/GalleonLobbyLanky'
import GalleonLobbyTiny from '../wrinkly/GalleonLobbyTiny'
import GalleonLobbyChunky from '../wrinkly/GalleonLobbyChunky'

const GalleonLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <GalleonSwim />
    <GalleonLobbyDK />
    <GalleonLobbyDiddy />
    <GalleonLobbyLanky />
    <GalleonLobbyTiny />
    <GalleonLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ChunkyKasplat />
  </div>
  </>
)
}

export default GalleonLobbyChecks
