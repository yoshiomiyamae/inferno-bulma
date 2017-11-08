import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {TextColors, Sizes} from '../modifiers';


interface IconProps {
  children?: any;
  color?: TextColors;
  size?: Sizes;

  [x: string]: any;
}

export class Icon extends Component<IconProps, {}> {
  render () {
    return (
      <span className={classNameBuilder(['icon',
                                         this.props.color,
                                         this.props.size,
                                       ])}>
        {this.props.children}
      </span>
    );
  }
}
