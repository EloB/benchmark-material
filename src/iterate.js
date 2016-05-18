import React, {Component, PropTypes, Children, cloneElement} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Iterate extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.previousItems = [];
    this.previousRendered = null;
  }
  renderItems(items) {
    if (this.previousItems === items) {
      return this.previousRendered;
    }
    this.previousItems = items;
    this.previousRendered = Children.toArray(items).map(this.props.children);
    return this.previousRendered;
  }
  render() {
    const {root, items} = this.props;

    return cloneElement(root, {
      children: this.renderItems(items)
    });
  }
}
Iterate.propTypes = {
  children: PropTypes.func,
  items: PropTypes.array,
  root: PropTypes.element
};

export default Iterate;