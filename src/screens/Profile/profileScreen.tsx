import * as React from 'react';
import { FlatList, View } from 'react-native';

import firebase from '../../firebase';
import { P } from '../../components/Typography';
import SuperScreen from '../../components/SuperScreen';
import { Box } from '../../components/Box';

import {
  ProfileItems,
  ProfileScreenFormValues,
  ProfileScreenProps,
} from './profileScreen.models';
import { i18n } from './profileScreen.i18n';

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({}) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    firebase
      .database()
      .ref('users')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        setUsers(data);
      });
  }, [setUsers]);

  const fields: ProfileItems[] = [
    {
      title: 'Full Name',
      value: `${users[0]?.firstname} ${users[0]?.surname}`,
    },
    {
      title: 'Email',
      value: `${users[0]?.email}`,
    },
  ];

  const renderItem = React.useCallback(({ item }: { item: ProfileItems }) => {
    return (
      <Box spacing={{ top: 2, bottom: 4 }}>
        <P size={'large'}>{item.title}</P>
        <P size={'large'} weight={'bold'}>
          {item.value}
        </P>
      </Box>
    );
  }, []);

  return (
    <>
      <SuperScreen background="charcoal">
        <FlatList
          data={fields}
          renderItem={renderItem}
          keyExtractor={(item, key) => `${key}`}
        />
      </SuperScreen>
    </>
  );
};

export default ProfileScreen;
