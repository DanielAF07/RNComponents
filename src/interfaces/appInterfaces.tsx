import React from 'react';

export interface MenuItem {
  name: string;
  label?: string;
  hide?: boolean;
  icon?: string;
  component: Element | React.FC | React.ComponentType<any> | any;
}
