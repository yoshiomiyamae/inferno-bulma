import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

interface ContainerProps {
  children?: any;
  fluid?: boolean;
}

export class Container extends Component<ContainerProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['container',
                                        (this.props.fluid ? 'is-fluid' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
