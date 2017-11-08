import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Sizes, Alignments} from '../modifiers';

interface PaginationProps {
  children?: any;
  size?: Sizes;
  alignment?: Alignments;

  [x: string]: any;
}

interface PaginationPreviousProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

interface PaginationNextProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

interface PaginationListProps {
  children?: any;

  [x: string]: any;
}

interface PaginationLinkProps {
  children?: any;
  current?: boolean;
  href?: string;

  [x: string]: any;
}

interface PaginationEllipsisProps {
  children?: any;

  [x: string]: any;
}

export class Pagination extends Component<PaginationProps, {}> {
  render () {
    return (
      <nav className={classNameBuilder(['pagination',
                                        this.props.size,
                                        this.props.alignment,
                                      ])}>
        {this.props.children}
      </nav>
    );
  }
}

export class PaginationPrevious extends Component<PaginationPreviousProps, {}> {
  render () {
    return (
      <a className={classNameBuilder(['pagination-previous'])}
         href={this.props.href}
         {...getEventHandlerFromProps(this.props)}
         >
        {this.props.children}
      </a>
    );
  }
}

export class PaginationNext extends Component<PaginationNextProps, {}> {
  render () {
    return (
      <a className={classNameBuilder(['pagination-next'])}
         href={this.props.href}
         {...getEventHandlerFromProps(this.props)}
         >
        {this.props.children}
      </a>
    );
  }
}

export class PaginationList extends Component<PaginationListProps, {}> {
  render () {
    return (
      <ul className={classNameBuilder(['pagination-list'])}>
        {this.props.children}
      </ul>
    );
  }
}

export class PaginationLink extends Component<PaginationLinkProps, {}> {
  render () {
    return (
      <li>
        <a className={classNameBuilder(['pagination-link',
                                        (this.props.current ? 'is-current' : '')
                                      ])}
           {...getEventHandlerFromProps(this.props)}
           >
          {this.props.children}
        </a>
      </li>
    );
  }
}

export class PaginationEllipsis extends Component<PaginationEllipsisProps, {}> {
  render () {
    return (
      <li>
        <span className={classNameBuilder(['pagination-ellipsis'])}>
          {(this.props.children ? this.props.children : '&hellip;')}
        </span>
      </li>
    );
  }
}
