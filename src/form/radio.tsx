import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';

interface RadioProps {
  children?: any;
  name?: string;
  disabled?: boolean;
  value?: any;

  [x: string]: any;
}

export class Radio extends Component<RadioProps, {}> {
  render () {
    return (
      <label className={classNameBuilder(['radio'])}>
        <input type="radio"
               name={this.props.name}
               disabled={this.props.disabled}
               value={this.props.value}
               {...getEventHandlerFromProps(this.props)}
               />
        {this.props.children}
      </label>
    );
  }
}
