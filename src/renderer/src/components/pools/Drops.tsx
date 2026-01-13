import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePoolDrops } from '@renderer/hooks/settings'

const DropPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolDrops() ? <>{children}</> : null

export default DropPool
