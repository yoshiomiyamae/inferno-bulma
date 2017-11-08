import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Sizes} from '../modifiers';
import {ColumnSizes, TwelveColumnsSystem} from '../columns';

export enum Context {
  Unspecified = '',
  Ancestor = 'is-ancestor',
  Parent = 'is-parent',
  Child = 'is-child',
}

interface TileProps {
  children?: any;
  context?: Context;
  vertical?: boolean;
  size?: ColumnSizes | TwelveColumnsSystem;
}

export class Tile extends Component<TileProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['tile',
                                        this.props.context,
                                        (this.props.vertical ? 'is-vertical' : ''),
                                        this.props.size,
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
