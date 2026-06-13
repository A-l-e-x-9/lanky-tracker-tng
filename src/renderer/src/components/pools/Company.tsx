import { usePoolNintendoCoin, usePoolRarewareCoin } from '@renderer/hooks/settings'

export const NintendoCoinPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolNintendoCoin() ? <>{children}</> : null

export const RarewareCoinPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolRarewareCoin() ? <>{children}</> : null
