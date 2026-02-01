import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BeforeOasisEnemies from '../enemies/BeforeOasis'
import VaseBanana from '../gold-bananas/chunky/Vase'
import DkKasplat from '../kasplats/Dk'
import CircleVase from '../boulders/CircleVase'
import ColonVase from '../boulders/ColonVase'
import PlusVase from '../boulders/PlusVase'
import TriangleVase from '../boulders/TriangleVase'

const BeforeOasisChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <CircleVase />
    <ColonVase />
    <PlusVase />
    <TriangleVase />
    <VaseBanana />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DkKasplat />
    <BeforeOasisEnemies />
  </div>
  </>
)
}

export default BeforeOasisChecks
