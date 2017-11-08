import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Sizes, Alignments} from '../modifiers';

interface ModalProps {
  children?: any;
  active?: boolean;

  [x: string]: any;
}

interface ModalBackgroundProps {
  children?: any;

  [x: string]: any;
}

interface ModalContentProps {
  children?: any;

  [x: string]: any;
}

interface ModalCloseProps {
  children?: any;
  size?: Sizes;

  [x: string]: any;
}

export class Modal extends Component<ModalProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['modal',
                                        (this.props.active ? 'is-active' : '')
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalBackground extends Component<ModalBackgroundProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['modal-background'])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalContent extends Component<ModalContentProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['modal-content'])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalClose extends Component<ModalCloseProps, {}> {
  render () {
    return (
      <button className={classNameBuilder(['modal-close',
                                           this.props.size
                                         ])}
              {...getEventHandlerFromProps(this.props)}
              >
        {this.props.children}
      </button>
    );
  }
}

interface ModalCardProps {
  children?: any;

  [x: string]: any;
}

interface ModalCardHeadProps {
  children?: any;

  [x: string]: any;
}

interface ModalCardTitleProps {
  children?: any;
  alignment?: Alignments;

  [x: string]: any;
}

interface ModalCardFootProps {
  children?: any;

  [x: string]: any;
}
export class ModalCard extends Component<ModalCardProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['modal-card'])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalCardHead extends Component<ModalCardHeadProps, {}> {
  render () {
    return (
      <header className={classNameBuilder(['modal-card-head'])}>
        {this.props.children}
      </header>
    );
  }
}

export class ModalCardTitle extends Component<ModalCardTitleProps, {}> {
  render () {
    return (
      <p className={classNameBuilder(['modal-card-title',
                                      this.props.alignment
                                    ])}>
        {this.props.children}
      </p>
    );
  }
}

export class ModalCardFoot extends Component<ModalCardFootProps, {}> {
  render () {
    return (
      <footer className={classNameBuilder(['modal-card-foot'])}>
        {this.props.children}
      </footer>
    );
  }
}
