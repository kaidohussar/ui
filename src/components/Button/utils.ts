// Util func

import {Theme} from '../../theming/types';
import {ButtonAppearance} from './';

export const getButtonBackgroundColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.colors.accentColor;
      case 'secondary':
         return theme.colors.backgroundColor;
      case 'destructive':
         return theme.colors.dangerColor;
      case 'text':
         return 'transparent';
   }
};

export const getButtonTextColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colors.textColorDarkBg : theme.colors.textColorLightBg;
      case 'secondary':
      case 'text':
         return theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg;
      case 'destructive':
         return theme.colors.textColorDarkBg;
   }
};

export const getButtonBorderColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colors.accentColor : theme.colors.textColorLightBg;
      case 'secondary':
         return theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg;
      case 'destructive':
         return theme.colors.dangerColor;
      case 'text':
         return 'transparent';
   }
};
