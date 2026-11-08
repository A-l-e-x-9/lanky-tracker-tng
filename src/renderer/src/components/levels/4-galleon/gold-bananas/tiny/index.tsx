import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import TreasureClams from './Clams'
import MermaidReward from './Mermaid'
import Tiny5Ship from './Ship'
import TinySub from './Sub'
import Tiny2Ship from './Switch'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const TinyBananas: React.FC = () => {
const isPearlSeed = useKRoolKontracts('Pearls') ? 'foolish' : ''
const pearlsInRotation = useDonkStore(useShallow((state) => state.settings.poolPearls)) ? '' : 'foolish'
return (
<>
  <div className="grid">
    <MermaidReward />
    <TinySub />
    <Tiny2Ship />
    <Tiny5Ship />
  </div>
  <div className={`grid ${isPearlSeed && pearlsInRotation}`}>
    <TreasureClams />
  </div>
</>
)
}

export default TinyBananas
