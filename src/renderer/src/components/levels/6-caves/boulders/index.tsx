import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KooshyKomeiji from './SmallRock'
import Okuu from './BeegRock'

const BoulderLocations: React.FC = () => (
  <>
    <KooshyKomeiji />
    <Okuu />
  </>
)

export default BoulderLocations
