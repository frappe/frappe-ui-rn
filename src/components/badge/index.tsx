import React, { PropsWithChildren } from 'react';
import { View, Text } from 'react-native';
import { badgeContainerStyles, badgeTextStyles } from './styles';

export type BadgeProps = {
  /* @default default */
  theme?: 'default' | 'blue' | 'orange' | 'green' | 'red';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'subtle' | 'outline' | 'ghost';
};

const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({
  children,
  size = 'md',
  theme = 'default',
  variant = 'solid',
}) => {
  return (
    <View style={badgeContainerStyles({ size, theme, variant })}>
      <Text style={badgeTextStyles({ size, theme, variant })}>{children}</Text>
    </View>
  );
};

export default Badge;
