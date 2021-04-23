import { format, parse } from 'date-fns';
import firebase from '../../../firebase';
import { Formik, FormikHelpers } from 'formik';
import * as React from 'react';
import { ActivityIndicator, Button, Platform, View } from 'react-native';
import { Box, Row } from '../../../components/Box';
import { PrimaryButton } from '../../../components/buttons/Primary/primaryButton';
import InputWrapper from '../../../components/InputWrapper';
import TextInput from '../../../components/TextInput';
import { P } from '../../../components/Typography';
import theme from '../../../theme';
import { i18n } from './detailScreen.i18n';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  BuyValues,
  FormBuyProps,
  FormSellProps,
  OrderType,
  Transaction,
} from './detailScreen.models';

const user = firebase.auth().currentUser;

export const FormSell: React.FunctionComponent<FormSellProps> = ({
  currentInfo,
  sellRef,
}) => {
  const validate = React.useCallback(() => {}, []);
  const [mode, setMode] = React.useState('date');
  const [transactions, setTransactions] = React.useState();

  React.useEffect(() => {
    firebase
      .database()
      .ref(`/users/${user?.uid}/portfolio/${currentInfo.currency}`)
      .on('value', (snapshat) => {
        setTransactions;
      });
  }, []);

  const onSubmit = React.useCallback(
    async (values: BuyValues, actions: FormikHelpers<BuyValues>) => {
      // Adding a new transction histori

      await firebase
        .database()
        .ref(`/transactions/${user?.uid}/`)
        .push({
          ...values,
          amount: Number(values.amount),
          total: Number(values.total),
          price: Number(values.price),
          purchaseTime: new Date(values.purchaseTime).getTime(),
          finalCurrency: currentInfo.currency || '',
          initialCurrency: 'USDT',
          orderType: OrderType.BUY,
          receiverId: user?.uid,
          senderId: user?.uid,
          timestamp: new Date().getTime(),
        } as Transaction);

      // Updating the user portfolio

      //  Already there is a transaction for this Currency',
      const amount = transcation.amount + values.amount;
      const price =
        (Number(transcation.total) + Number(values.total)) / Number(amount);
      const total = Number(transcation.total) + Number(values.total);
      firebase
        .database()
        .ref(`/users/${user?.uid}/portfolio/${currentInfo.currency}`)
        .set({
          currentInfo,
          ...values,
          amount,
          price,
          total,
          timestamp: new Date().getTime(),
        });

      sellRef.current.snapTo(2);

      actions.setSubmitting(false);
    },
    []
  );

  return (
    <Formik
      initialValues={{
        amount: '',
        price: '',
        purchaseDate: new Date(),
        purchaseTime: new Date(),
        total: '200',
      }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        setFieldValue,
        setFieldTouched,
        handleSubmit,
        values,
        errors,
        isSubmitting,
      }) => (
        <View
          style={{
            backgroundColor: theme.colors.tradingZ.charcoal,
            padding: 16,
            height: 550,
          }}
        >
          <InputWrapper>
            <TextInput
              keyboardType="decimal-pad"
              label={i18n.t('formAmountLabel')}
              error={!!errors.amount}
              value={values.amount}
              onChangeText={(value) => {
                setFieldValue('amount', value);
                setFieldValue('total', Number(value) * Number(values.price));
              }}
            />
          </InputWrapper>

          <InputWrapper>
            <TextInput
              keyboardType="decimal-pad"
              label={i18n.t('formPriceLabel')}
              error={!!errors.price}
              value={values.price}
              onChangeText={(value) => {
                setFieldValue('price', value);
                setFieldValue('total', Number(value) * Number(values.amount));
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <>
              <P>{i18n.t('formPurchaseTimeLabel')} </P>

              <DateTimePicker
                testID="dateTimePicker"
                value={values.purchaseDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setFieldValue('purchaseDate', selectedDate);
                  if (mode === 'date') {
                    setMode('time');
                  } else {
                    setMode('date');
                  }
                }}
              />
              <P>{format(values.purchaseDate, 'dd/MM/yyyy hh:mm:ii')}</P>
            </>
          </InputWrapper>

          <P>
            {i18n.t('formTotalLabel')}: {values.total}$
          </P>

          <Row spacing={{ top: 1 }}>
            <PrimaryButton
              backgroundColor="error"
              onPress={() => handleSubmit()}
              loading={isSubmitting}
            >
              {i18n.t('sellLabel')}
            </PrimaryButton>
          </Row>
        </View>
      )}
    </Formik>
  );
};
