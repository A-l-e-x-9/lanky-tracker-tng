import { usePoolMisc } from '@renderer/src/hooks/settings'

const MiscPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolMisc() ? <>{children}</> : null

export default MiscPool
