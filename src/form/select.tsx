import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States} from '../modifiers';

interface SelectProps {
  children?: any;
  color?: Colors;
  size?: Sizes;
  state?: States;
  multiple?: number;
  value?: any;

  [x: string]: any;
}

export class Select extends Component<SelectProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['select',
                                        this.props.color,
                                        this.props.size,
                                        this.props.state,
                                      ])}>
        <select value={this.props.value}
                multiple={this.props.multiple}
                size={this.props.multiple}
                {...getEventHandlerFromProps(this.props)}
                >
          {this.props.children}
        </select>
      </div>
    );
  }
}
