import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes} from '../modifiers';

interface MessageProps {
  children?: any;
  color?: Colors;
  size?: Sizes;

  [x: string]: any;
}

interface MessageHeaderProps {
  children?: any;

  [x: string]: any;
}

interface MessageBodyProps {
  children?: any;

  [x: string]: any;
}

interface MessageBodyItemProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

export class Message extends Component<MessageProps, {}> {
  render () {
    return (
      <article className={classNameBuilder(['message',
                                            this.props.color,
                                            this.props.size
                                          ])}>
        {this.props.children}
      </article>
    );
  }
}

export class MessageHeader extends Component<MessageHeaderProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['message-header'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MessageBody extends Component<MessageBodyProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['message-body'])}>
        {this.props.children}
      </div>
    );
  }
}
