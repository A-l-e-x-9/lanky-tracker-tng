import { usePoolCrowns } from '@renderer/src/hooks/settings'

const ArenaPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolCrowns() ? <>{children}</> : null

export default ArenaPool
