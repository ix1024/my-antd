import React from 'react';
import styles from './Block.less';
/**
 * 模块与模块之间的距离，统一，美观
 * @param {type} props vertical Or  horizontal
 */
const Block = props => {
  const {
    children,
    justifyContent,
    varticalMargin = 20,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    horizontalMargin = 10,
    itemStyle = {},
    type = 'vertical',
    alignitems = 'center',
    ...rest
  } = props;

  if (children && children.map) {
    if (type === 'horizontal') {
      return (
        // eslint-disable-next-line no-underscore-dangle
        <div
          className={[
            // eslint-disable-next-line no-underscore-dangle
            styles.__blockArea,
            styles[`__${justifyContent}`],
            styles[`__alignItems${alignitems}`],
          ].join(' ')}
          {...rest}
        >
          {(children || []).map((item, index) => {
            return (
              <div key={index} style={{ ...itemStyle }}>
                {item}
              </div>
            );
          })}
        </div>
      );
    }

    return (children || []).map((item, index) => {
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
