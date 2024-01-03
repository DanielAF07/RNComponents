import React from 'react';

export interface MenuItem {
  name: string;
  label?: string;
  hidden?: boolean;
  icon?: string;
  component: Element | React.FC | React.ComponentType<any> | any;
}
