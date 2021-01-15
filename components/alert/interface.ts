export type Kind = 'info' | 'positive' | 'negative' | 'warning';

export type KindMap = Record<Kind, string>;

export type AlertProps = {
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}
