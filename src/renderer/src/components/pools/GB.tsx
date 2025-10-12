import { usePoolGoldBananas } from '@renderer/hooks/settings'

const GBPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolGoldBananas() ? <>{children}</> : null

export default GBPool
