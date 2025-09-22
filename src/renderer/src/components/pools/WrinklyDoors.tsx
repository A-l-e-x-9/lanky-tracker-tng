import { usePoolWrinkly } from '@renderer/src/hooks/settings'

const WrinklyPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolWrinkly() ? <>{children}</> : null

export default WrinklyPool
