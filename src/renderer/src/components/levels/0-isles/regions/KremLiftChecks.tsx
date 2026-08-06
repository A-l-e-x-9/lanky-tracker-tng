import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KremLiftEnemies from '../enemies/KremLift'
import CoconutCage from '../gold-bananas/dk/CoconutCage'

const KremLiftChecks: React.FC = () => {
return (
  <>
    <CoconutCage />
    <KremLiftEnemies />
  </>
)
}

export default KremLiftChecks
