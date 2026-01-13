import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import NearAztecEnemies from '../enemies/NearAztec'
import TrombonePadBoulder from '../boulders/AztecLobbyTrombonePad'
import TrianglePadBoulder from '../boulders/AztecLobbyTrianglePad'
import TrianglePad from '../gold-bananas/chunky/TrianglePad'

const IslesMainUpperChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <TrombonePadBoulder />
    <TrianglePadBoulder />
    <TrianglePad />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <NearAztecEnemies />
  </div>
  </>
)
}

export default IslesMainUpperChecks
