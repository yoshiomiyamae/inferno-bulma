import Inferno from 'inferno';
import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Sizes, Alignments} from '../modifiers';

export enum TabsStyles {
  Boxed = 'is-boxed',
  Toggle = 'is-toggle',
  FullWidth = 'is-fullwidth',
}

interface TabsProps {
  children?: any;
  size?: Sizes;
  styles?: TabsStyles | TabsStyles[];
  alignment?: Alignments;

  [x: string]: any;
}

interface TabProps {
  children?: any;
  active?: boolean;
  href?: string;

  [x: string]: any;
}

export class Tabs extends Component<TabsProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['tabs',
                                        this.props.size,
                                        this.props.styles,
                                        this.props.alignment,
                                      ])}>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export class Tab extends Component<TabProps, {}> {
  render () {
    return (
      <li className={classNameBuilder([(this.props.active ? 'is-active' : '')])}>
        <a {...(() => {
             if(this.props.href){
               return {href: this.props.href}
             }
           })()}
           {...getEventHandlerFromProps(this.props)}
           >
          {this.props.children}
        </a>
      </li>
    );
  }
}
