import { usePoolPearls, useBean } from '@renderer/hooks/settings'

export const PearlPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolPearls() ? <>{children}</> : null

export const BeanPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useBean() ? <>{children}</> : null
