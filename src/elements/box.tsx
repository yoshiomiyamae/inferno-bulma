import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

interface BoxProps {
  children?: any;

  [x: string]: any;
}

export class Box extends Component<BoxProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['box'])}>
        {this.props.children}
      </div>
    );
  }
}
