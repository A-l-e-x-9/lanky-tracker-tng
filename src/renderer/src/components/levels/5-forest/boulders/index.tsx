import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MillFrontKeg1 from './MillFrontKeg1'
import MillFrontKeg2 from './MillFrontKeg2'
import MillBackKeg from './MillBackKeg'

const BoulderLocations: React.FC = () => (
  <>
    <MillFrontKeg1 />
    <MillFrontKeg2 />
    <MillBackKeg />
  </>
)

export default BoulderLocations
