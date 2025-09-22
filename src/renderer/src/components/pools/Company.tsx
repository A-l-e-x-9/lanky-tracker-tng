import { usePoolCompanyCoins } from '@renderer/src/hooks/settings'

const CompanyPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolCompanyCoins() ? <>{children}</> : null

export default CompanyPool
