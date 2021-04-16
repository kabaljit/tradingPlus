import * as React from 'react';

import {
  SettingsMenu,
  SettingsScreenFormValues,
  SettingsScreenProps,
} from './settingsScreen.models';
import { i18n } from './settingsScreen.i18n';
import { P } from '../../components/Typography';
import SuperScreen from '../../components/SuperScreen';
import { FlatList, Image, View } from 'react-native';
import { Row } from '../../components/Box';
import { images } from '../../data';
import theme from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = ({
  navigation,
}) => {
  const menu: SettingsMenu[] = [
    {
      title: i18n.t('menuProfile'),
      route: 'Home',
    },
    {
      title: i18n.t('menuChangePassword'),
      route: 'Market',
    },
  ];

  const renderItem = React.useCallback(({ item }: { item: SettingsMenu }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <Row
          flexDirection="row"
          spacing={{ left: 4, right: 4, top: 4, bottom: 0 }}
          // background="error"
        >
          <Image
            source={images.user}
            style={{ tintColor: theme.colors.tradingZ.white }}
            width={25}
            height={25}
          />
          <Row spacing={{ left: 5 }}>
            <P>{item.title}</P>
          </Row>
        </Row>
      </TouchableOpacity>
    );
  }, []);

  return (
    <>
      <SuperScreen background="charcoal">
        <FlatList
          data={menu}
          renderItem={renderItem}
          keyExtractor={(item, key) => `${key}`}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: theme.borders.hairlineWidth,
                borderColor: theme.colors.tradingZ.white,
              }}
            />
          )}
        />
      </SuperScreen>
    </>
  );
};

export default SettingsScreen;
