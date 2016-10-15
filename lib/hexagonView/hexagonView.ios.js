import React, { PropTypes } from 'react';
import { View, requireNativeComponent, processColor } from 'react-native';

export const HexagonView = ({
  children,
  borderWidth,
  borderColor,
  backgroundColor,
  size,
  isHorizontal,
  ...props
}) => (
  <RNHexagonView
      {...props}
      borderColor={processColor(borderColor).toString()}
      borderWidth={borderWidth}
      background_Color={processColor(backgroundColor).toString()}
      isHorizontal={isHorizontal}
      size={size}
  >
          {children}
  </RNHexagonView>
);

HexagonView.propTypes = {
  ...View.propTypes,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number.isRequired,
  isHorizontal: PropTypes.bool,
  prop: PropTypes.any
};
HexagonView.defaultProps = {
  isHorizontal: false,
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundColor: 'white',
};

const RNHexagonView = requireNativeComponent('RNShapeView', HexagonView);
