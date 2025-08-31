import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import TunnelBoulder from './TunnelBoulder'
import CircleVase from './CircleVase'
import ColonVase from './ColonVase'
import TriangleVase from './TriangleVase'
import PlusVase from './PlusVase'

const BoulderLocations: React.FC = () => (
  <>
    <TunnelBoulder />
    <CircleVase />
    <ColonVase />
    <TriangleVase />
    <PlusVase />
  </>
)

export default BoulderLocations
