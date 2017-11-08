import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Sizes, Alignments} from '../modifiers';

export enum SeparatorTypes {
  Arrow = 'has-arrow-separator',
  Bullet = 'has-bullet-separator',
  Dot = 'has-dot-separator',
  Succeeds = 'has-succeeds-separator',
}

interface BreadcrumbProps {
  children?: any;
  size?: Sizes;
  alignment?: Alignments;
  separatorTypes?: SeparatorTypes;

  [x: string]: any;
}

interface BreadcrumbItemProps {
  children?: any;
  active?: boolean
  href?: string;

  [x: string]: any;
}

export class Breadcrumb extends Component<BreadcrumbProps, {}> {
  render () {
    return (
      <nav className={classNameBuilder(['breadcrumb',
                                        this.props.size,
                                        this.props.alignment,
                                        this.props.separatorTypes,
                                      ])}>
        <ul>
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

export class BreadcrumbItem extends Component<BreadcrumbItemProps, {}> {
  render () {
    return (
      <li className={classNameBuilder([(this.props.active ? 'is-active' : '')])}>
        <a href={this.props.href}
           {...getEventHandlerFromProps(this.props)}
           >
          {this.props.children}
        </a>
      </li>
    );
  }
}
