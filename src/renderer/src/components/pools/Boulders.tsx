import { usePoolBoulders } from '@renderer/hooks/settings'

const BoulderPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBoulders() ? <>{children}</> : null

export default BoulderPool
