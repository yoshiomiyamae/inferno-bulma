import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

interface MenuProps {
  children?: any;

  [x: string]: any;
}

interface MenuLabelProps {
  children?: any;

  [x: string]: any;
}

interface MenuListProps {
  children?: any;

  [x: string]: any;
}

interface MenuItemProps {
  children?: any;
  href?: string;
  text?: string;

  [x: string]: any;
}

export class Menu extends Component<MenuProps, {}> {
  render () {
    return (
      <aside className={classNameBuilder(['menu'])}>
        {this.props.children}
      </aside>
    );
  }
}

export class MenuLabel extends Component<MenuLabelProps, {}> {
  render () {
    return (
      <p className={classNameBuilder(['menu-label'])}>
        {this.props.children}
      </p>
    );
  }
}

export class MenuList extends Component<MenuListProps, {}> {
  render () {
    return (
      <ul className={classNameBuilder(['menu-list'])}>
        {this.props.children}
      </ul>
    );
  }
}

export class MenuItem extends Component<MenuItemProps, {}> {
  render () {
    return (
      <li>
        <a className={classNameBuilder([(this.props.href ? 'is-active' : '')])}>
          {(() => {
            if (this.props.text) {
              return this.props.text
            } else {
              return this.props.children
            }
          })()}
        </a>
        {(() => {
          if (this.props.text) {
            return this.props.children
          }
        })()}
      </li>
    );
  }
}
