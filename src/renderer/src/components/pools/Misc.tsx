import { usePoolPearls, useBean, useForestTimeSwitches } from '@renderer/hooks/settings'

export const PearlPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolPearls() ? <>{children}</> : null

export const BeanPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useBean() ? <>{children}</> : null
  
export const TimePool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useForestTimeSwitches() ? <>{children}</> : null
