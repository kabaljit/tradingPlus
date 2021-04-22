import * as React from 'react';
import RNBottomSheet from 'reanimated-bottom-sheet';

import { BottomsheetProps } from './bottomsheet.models';
import { BottomsheetView } from './bottomsheet.styles';
import { i18n } from './bottomsheet.i18n';
import { View } from 'react-native';
import { P } from '../Typography';
import { ModalDragHeader } from '../ModalDragHeader';

export const Bottomsheet = React.forwardRef<RNBottomSheet, BottomsheetProps>(
  ({ renderContent }, ref) => {
    return (
      <RNBottomSheet
        ref={ref}
        initialSnap={2}
        snapPoints={[550, 300, 0]}
        renderHeader={() => <ModalDragHeader />}
        borderRadius={10}
        renderContent={renderContent}
      />
    );
  }
);
