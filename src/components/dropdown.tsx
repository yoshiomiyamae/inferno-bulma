import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Alignments} from '../modifiers';

interface DropdownProps {
  children?: any;
  active?: boolean;
  hoverable?: boolean;
  alignment?: Alignments;
  dropUp?: boolean;

  [x: string]: any;
}

interface DropdownTriggerProps {
  children?: any;

  [x: string]: any;
}

interface DropdownMenuProps {
  children?: any;

  [x: string]: any;
}

interface DropdownContentProps {
  children?: any;

  [x: string]: any;
}

interface DropdownItemProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

export class Dropdown extends Component<DropdownProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['dropdown',
                                        (this.props.active ? 'is-active' : ''),
                                        (this.props.hoverable ? 'is-hoverable' : ''),
                                        this.props.alignment,
                                        (this.props.dropUp ? 'is-up' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class DropdownTrigger extends Component<DropdownTriggerProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['dropdown-trigger'])}>
        {this.props.children}
      </div>
    );
  }
}

export class DropdownMenu extends Component<DropdownMenuProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['dropdown-menu'])}>
        {this.props.children}
      </div>
    );
  }
}

export class DropdownContent extends Component<DropdownContentProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['dropdown-content'])}>
        {this.props.children}
      </div>
    );
  }
}

export class DropdownItem extends Component<DropdownItemProps, {}> {
  render () {
    if (this.props.href) {
      return (
        <a className={classNameBuilder(['dropdown-item'])}
           href={this.props.href}
           {...getEventHandlerFromProps(this.props)}
           >
          {this.props.children}
        </a>
      );
    } else {
      return (
        <p className={classNameBuilder(['dropdown-item'])}>
          {this.props.children}
        </p>
      );
    }
  }
}
