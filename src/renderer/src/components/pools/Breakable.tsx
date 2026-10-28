import { usePoolBreakables } from '@renderer/hooks/settings'

const BreakablePool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBreakables() ? <>{children}</> : null

export default BreakablePool
