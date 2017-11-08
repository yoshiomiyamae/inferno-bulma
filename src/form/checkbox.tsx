import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';

interface CheckboxProps {
  children?: any;
  disabled?: boolean;
  value?: any;
  checked?: boolean;

  [x: string]: any;
}

export class Checkbox extends Component<CheckboxProps, {}> {
  render () {
    return (
      <label className={classNameBuilder(['checkbox'])}>
        <input type="checkbox"
               disabled={this.props.disabled}
               value={this.props.value}
               checked={this.props.checked}
               {...getEventHandlerFromProps(this.props)}
               />
        {this.props.children}
      </label>
    );
  }
}
