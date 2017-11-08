import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

interface MediaProps {
  children?: any;
}
interface MediaLeftProps {
  children?: any;
}
interface MediaRightProps {
  children?: any;
}
interface MediaContentProps {
  children?: any;
}
interface MediaItemProps {
  children?: any;
}

export class Media extends Component<MediaProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['media'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaContent extends Component<MediaContentProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['media-content'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaLeft extends Component<MediaLeftProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['media-left'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaRight extends Component<MediaRightProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['media-right'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaItem extends Component<MediaItemProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['media-item'])}>
        {this.props.children}
      </div>
    );
  }
}
