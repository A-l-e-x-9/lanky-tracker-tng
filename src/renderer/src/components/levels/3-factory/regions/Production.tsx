import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ChunkyProduction from '../gold-bananas/chunky/Production'
import DiddyProduction from '../gold-bananas/diddy/Production'
import CrusherRoom from '../gold-bananas/dk/Crusher'
import LankyProduction from '../gold-bananas/lanky/Production'
import TinyProduction from '../gold-bananas/tiny/Production'
import DiddyKasplat from '../kasplats/Diddy'
import DkKasplat from '../kasplats/Dk'
import ProductionEnemies from '../enemies/Production'

const ProductionChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <CrusherRoom />
    <ChunkyProduction />
    <DiddyProduction />
    <LankyProduction />
    <TinyProduction />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DiddyKasplat />
    <DkKasplat />
    <ProductionEnemies />
  </div>
  </>
)
}

export default ProductionChecks
