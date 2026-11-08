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
import { useKRoolKontracts } from '@renderer/hooks/isles'

const ProductionChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CrusherRoom />
    <ChunkyProduction />
    <DiddyProduction />
    <LankyProduction />
    <TinyProduction />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
    <DkKasplat />
  </div>
  <div className="grid">
    <ProductionEnemies />
  </div>
  </>
)
}

export default ProductionChecks
