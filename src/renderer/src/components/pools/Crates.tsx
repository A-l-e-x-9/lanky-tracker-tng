import { usePoolCrates } from '@renderer/src/hooks/settings'

const CratePool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolCrates() ? <>{children}</> : null

export default CratePool
