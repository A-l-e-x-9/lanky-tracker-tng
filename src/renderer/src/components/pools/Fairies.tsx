import { usePoolFairies } from '@renderer/src/hooks/settings'

const FairyPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolFairies() ? <>{children}</> : null

export default FairyPool
