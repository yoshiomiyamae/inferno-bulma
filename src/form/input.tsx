import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States} from '../modifiers';

export enum InputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Tel = 'tel',
}

interface InputProps {
  color?: Colors;
  size?: Sizes;
  state?: States;
  type: InputTypes;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  value?: any;

  [x: string]: any;
}

export class Input extends Component<InputProps, {}> {
  render () {
    return (
      <input className={classNameBuilder(['input',
                                          this.props.color,
                                          this.props.size,
                                          this.props.state,
                                        ])}
             type={this.props.type}
             placeholder={this.props.placeholder}
             readOnly={this.props.readonly}
             disabled={this.props.disabled}
             value={this.props.value}
             {...getEventHandlerFromProps(this.props)}
             />
    );
  }
}
