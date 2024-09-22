import { TConfigProps } from './types/TConfig';

export class VNode {
  constructor(
    public tag: string,
    public props: TConfigProps,
    public children: (VNode | string)[],
  ) { }
}
