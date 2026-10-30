import { usePoolBalloons } from '@renderer/hooks/settings'

const BalloonPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBalloons() ? <>{children}</> : null

export default BalloonPool
