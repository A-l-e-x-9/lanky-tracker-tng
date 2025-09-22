import { usePoolDrops } from '@renderer/src/hooks/settings'

const DropPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolDrops() ? <>{children}</> : null

export default DropPool
