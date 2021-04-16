import * as React from 'react';
import { Dimensions, Platform } from 'react-native';
import { BoxShadow as RNBoxShadow } from 'react-native-shadow';

import {
  BoxShadow,
  HeaderBar,
  HeaderView,
  HeaderViewTop,
} from './ModalDragHeader.styles';
import { ModalDragHeaderProps } from './ModalDragHeader.models';

export const ModalDragHeader: React.FunctionComponent<ModalDragHeaderProps> = () => {
  const width = React.useMemo(() => Dimensions.get('window').width, []);
  return (
    <HeaderView>
      {Platform.OS === 'android' ? (
        // Android box shadows are really poor so we're having to make up
        // for it by using this package which creates the shadow as a bitmap
        // (using SVGs and then using react-native-svg to convert it)
        <>
          <RNBoxShadow
            setting={{
              width,
              height: 20,
              color: '#000',
              border: 20,
              radius: 10,
              opacity: 0.1,
              x: 0,
              y: -0,
              style: { position: 'absolute', left: 0, right: 0, top: 0 },
            }}
          />
          <HeaderViewTop>
            <HeaderBar />
          </HeaderViewTop>
        </>
      ) : (
        <>
          <BoxShadow />
          <HeaderViewTop>
            <HeaderBar />
          </HeaderViewTop>
        </>
      )}
    </HeaderView>
  );
};
