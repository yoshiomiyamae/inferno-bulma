import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Colors, Sizes} from '../modifiers';


interface ProgressBarProps {
  children?: any;
  color?: Colors;
  size?: Sizes;
  value?: number;
  max?: number;

  [x: string]: any;
}

export class ProgressBar extends Component<ProgressBarProps, {}> {
  render () {
    return (
      <progress className={classNameBuilder(['progress',
                                             this.props.color,
                                             this.props.size,
                                           ])}
                value={this.props.value}
                max={this.props.max}
                >
        {this.props.children}
      </progress>
    );
  }
}
