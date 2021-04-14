import * as React from 'react';

import {
  DetailScreenFormValues,
  DetailScreenProps,
} from './detailScreen.models';
import { i18n } from './detailScreen.i18n';
import SuperScreen from '../../../components/SuperScreen';
import { Title } from '../../../components/Typography';
import { PrimaryButton } from '../../../components/buttons/Primary/primaryButton';

export const DetailScreen: React.FunctionComponent<DetailScreenProps> = ({
  navigation,
}) => {
  return (
    <>
      <SuperScreen background="charcoal">
        <Title>Detail screen</Title>

        <PrimaryButton backgroundColor="success">Buy</PrimaryButton>
        <PrimaryButton backgroundColor="error">Sell</PrimaryButton>
      </SuperScreen>
    </>
  );
};

export default DetailScreen;
