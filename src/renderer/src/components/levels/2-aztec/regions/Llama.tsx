import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import LlamaInsideCrate from '../crates/LlamaInside'
import LlamaTempleEnemies from '../enemies/Llama'
import LlamaFairy from '../fairies/Llama'
import FreeLanky from '../gold-bananas/dk/FreeLanky'
import LlamaBarrel from '../gold-bananas/lanky/Llama'
import MatchGame from '../gold-bananas/lanky/Match'
import LavaPedestal from '../gold-bananas/tiny/Lava'
import LankyKasplat from '../kasplats/Lanky'
import LankyCage from '../gold-bananas/dk/LankyCage'

const LlamaTempleChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <LankyCage />
    <FreeLanky />
    <LlamaBarrel />
    <MatchGame />
    <LavaPedestal />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <LlamaFairy />
  </div>
  <div className="grid">
    <LlamaInsideCrate />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <LankyKasplat />
    <LlamaTempleEnemies />
  </div>
  </>
)
}

export default LlamaTempleChecks
