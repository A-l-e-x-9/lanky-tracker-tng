import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import LighthouseDirt from '../dirt/Lighthouse'
import LighthouseEnemies from '../enemies/Lighthouse'
import SeasickShip from '../gold-bananas/chunky/Seasick'
import DiddyLighthouse from '../gold-bananas/diddy/Lighthouse'
import DkLighthouse from '../gold-bananas/dk/Lighthouse'
import EnguardeChest from '../gold-bananas/lanky/Chest'
import MermaidReward from '../gold-bananas/tiny/Mermaid'
import DiddyKasplat from '../kasplats/Diddy'

const LighthouseChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <DkLighthouse />
    <DiddyLighthouse />
    <EnguardeChest />
    <MermaidReward />
    <SeasickShip />
    <LighthouseDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DiddyKasplat />
    <LighthouseEnemies />
  </div>
  </>
)
}

export default LighthouseChecks
