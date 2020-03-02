import React from 'react';

/**
 * 模块与模块之间的距离，统一，美观
 * @param {type} props vertical Or  horizontal
 */
const Block = props => {
  const { children, varticalMargin = 20, horizontalMargin = 10, type = 'vertical' } = props;

  if (children && children.map) {
    return (children || []).map((item, index) => {
      if (type === 'horizontal') {
        return (
          <span key={index} style={{ marginLeft: index ? horizontalMargin : 0 }}>
            {item}
          </span>
        );
      }
      return (
        <div key={index} style={{ marginTop: index ? varticalMargin : 0 }}>
          {item}
        </div>
      );
    });
  }
  return children;
};

export { Block };
export default Block;
