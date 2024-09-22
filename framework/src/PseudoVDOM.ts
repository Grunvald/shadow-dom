import { TConfig } from './types/TConfig';
import { VNode } from './VNode';
import { Renderer } from './Renderer';

export class PseudoVDOM {
  private vNode: VNode;
  private renderer: Renderer;
  private root: HTMLElement;

  constructor(config: TConfig, rootId = 'app') {
    this.renderer = new Renderer();
    this.vNode = this.createVNode(config);
    this.init(rootId);
  }

  private init(rootId = 'app'): void {
    this.root = document.getElementById(rootId);
    this.renderer.render(this.vNode, this.root);
  }

  update(newConfig: TConfig): void {
    const newVNode = this.createVNode(newConfig);
    this.vNode = this.renderer.update(newVNode, this.vNode, this.root);
  }

  private createVNode(config: TConfig): VNode {
    const children = Array.isArray(config.props.children) ? config.props.children.map(child => typeof child === 'string' ? child : this.createVNode(child as TConfig)) : [];
    return new VNode(config.tag, config.props, children);
  }
}
