import React, { Component } from 'react';

import ClassRowComp from './ClassRowComp/ClassRowComp';
import classes from './classBarRowComp.css';

export default class ClassBarRowComp extends Component {
  renderAllRowComp = () => {
    if (!this.props.groups) return;
    return this.props.groups.map(group => (
      <ClassRowComp
        key={group}
        classId={group.replace(/ /g, '').substr(5)}
        height={this.props.rowHeight}
      />
    ));
  };

  render() {
    // margin top is width of one extra element + the margin on both sides
    const { rowHeight, myRef } = this.props;
    const marginTop = +rowHeight + 8;
    // displaying one extra component to fill in the empty place in the top-left corner
    return (
      <div
        style={{ marginTop: marginTop + 'px' }}
        className={classes.container}
        ref={myRef}
      >
        {this.renderAllRowComp()}
      </div>
    );
  }
}
