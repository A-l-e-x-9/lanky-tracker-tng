import { usePoolMisc, usePoolPearls, useBean } from '@renderer/hooks/settings'

const MiscPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolMisc() ? <>{children}</> : null

export const PearlPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolPearls() ? <>{children}</> : null

export const BeanPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useBean() ? <>{children}</> : null

export default MiscPool
