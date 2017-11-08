import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Colors} from '../modifiers';


interface NotificationProps {
  children?: any;
  color?: Colors;

  [x: string]: any;
}

export class Notification extends Component<NotificationProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['notification',
                                        this.props.color,
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
