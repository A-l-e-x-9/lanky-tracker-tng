import { usePoolKeys } from '@renderer/src/hooks/settings'

const BossPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolKeys() ? <>{children}</> : null

export default BossPool
