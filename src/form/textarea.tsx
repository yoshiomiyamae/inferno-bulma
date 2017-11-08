import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States} from '../modifiers';

interface TextareaProps {
  color?: Colors;
  size?: Sizes;
  state?: States;
  placeholder?: string;
  readonly?: boolean;

  [x: string]: any;
}

export class Textarea extends Component<TextareaProps, {}> {
  render () {
    return (
      <textarea className={classNameBuilder(['textarea',
                                             this.props.color,
                                             this.props.size,
                                             this.props.state,
                                           ])}
             placeholder={this.props.placeholder}
             readOnly={this.props.readonly}
             {...getEventHandlerFromProps(this.props)}
             />
    );
  }
}
