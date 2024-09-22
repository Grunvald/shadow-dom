import { VNode } from './VNode';
import { TConfigProps } from './types/TConfig';

export class Renderer {
  render(vNode: VNode, container: HTMLElement) {
    if (!vNode) return;
    const element = this.createElement(vNode);
    container.innerHTML = '';
    container.appendChild(element);
  }

  update(newVNode: VNode, oldVNode: VNode, container: HTMLElement): VNode {
    if (!newVNode) return oldVNode;
    this.updateElement(container, newVNode, oldVNode);
    return newVNode;
  }

  createElement(node: VNode | string): HTMLElement | Text {
    if (typeof node === 'string') {
      return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);
    this.updateProps(element, node.props);
    node.children.forEach(child => element.appendChild(this.createElement(child)));
    return element;
  }

  updateElement(parent: HTMLElement, newNode: VNode | string, oldNode: VNode | string, index = 0) {
    if (oldNode === null) {
      this.appendChild(parent, newNode);
    } else if (newNode === null) {
      this.removeChildren(parent, index);
    } else if (this.changed(newNode, oldNode)) {
      this.replaceChild(parent, newNode, parent.childNodes[index] as HTMLElement);
    } else if (newNode instanceof VNode && oldNode instanceof VNode) {
      this.updateProps(parent.childNodes[index] as HTMLElement, newNode.props, oldNode.props);
      this.updateChildren(parent.childNodes[index] as HTMLElement, newNode, oldNode);
    }
  }

  updateChildren(parent: HTMLElement, newNode: VNode, oldNode: VNode) {
    const childrenLength = Math.max(newNode.children.length, oldNode.children.length);
    for (let i = 0; i < childrenLength; i++) {
      this.updateElement(parent, newNode.children[i] || null, oldNode.children[i] || null, i);
    }
  }

  removeChildren(parent: HTMLElement, fromIndex: number) {
    while (parent.childNodes.length > fromIndex) {
      this.removeChild(parent, parent.lastChild as HTMLElement);
    }
  }

  private updateProps(element: HTMLElement, newProps: TConfigProps, oldProps: TConfigProps = {}) {
    const allProps = Object.keys({ ...newProps, ...oldProps }).filter((prop) => prop !== 'children');

    allProps.forEach(prop => {
      if (newProps[prop] !== oldProps[prop]) element.setAttribute(prop, newProps[prop] || '');
    });
  }

  private appendChild(parent: HTMLElement, child: VNode | string) {
    parent.appendChild(this.createElement(child));
  }

  private removeChild(parent: HTMLElement, child: HTMLElement) {
    parent.removeChild(child);
  }

  private replaceChild(parent: HTMLElement, newChild: VNode | string, oldChild: HTMLElement) {
    parent.replaceChild(this.createElement(newChild), oldChild);
  }

  private changed(node1: VNode | string, node2: VNode | string): boolean {
    return typeof node1 !== typeof node2 ||
           (typeof node1 === 'string' && node1 !== node2) ||
           (node1 instanceof VNode && node2 instanceof VNode && node1.tag !== node2.tag);
  }
}
