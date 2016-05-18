import React, {Component, PropTypes, Children, createElement} from 'react';
import shallowEqual from 'shallowequal';

class Iterate extends Component {
  constructor(...args) {
    super(...args);

    this.previousProps = null;
  }
  shouldComponentUpdate(nextProps) {
    const {root, rootProps, items, children, ...props} = nextProps;
    return children !== this.props.children ||
      items !== this.props.items ||
      root !== this.props.root ||
      !shallowEqual(rootProps, this.props.rootProps) ||
      !shallowEqual(props, this.previousProps);
  }
  render() {
    const {root, rootProps, items, children, ...props} = this.props;
    this.previousProps = props;
    return createElement(root, {
      ...rootProps,
      children: Children.toArray(items).map((item, index) => children(item, props, index))
    });
  }
}
Iterate.propTypes = {
  children: PropTypes.func.isRequired,
  items: PropTypes.array,
  root: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rootProps: PropTypes.object
};
Iterate.defaultProps = {
  root: 'div'
};

export default Iterate;
