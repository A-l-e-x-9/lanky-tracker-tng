import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import DiddyGold from '../gold-bananas/diddy/Gold'
import LankyGold from '../gold-bananas/lanky/Gold'
import TreasureClams from '../gold-bananas/tiny/Clams'
import DkKasplat from '../kasplats/Dk'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const TreasureChecks: React.FC = () => {
const isPearlSeed = useKRoolKontracts('Pearls') ? 'foolish' : ''
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
const pearlsInRotation = useDonkStore(useShallow((state) => state.settings.poolPearls)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <DiddyGold />
    <LankyGold />
  </div>
  <div className={`grid ${isPearlSeed && pearlsInRotation}`}>
    <TreasureClams />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  </>
)
}

export default TreasureChecks
