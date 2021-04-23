import { format, parse } from 'date-fns';
import firebase from '../../../firebase';
import { Formik, FormikErrors, FormikHelpers } from 'formik';
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
  OrderType,
  Transaction,
} from './detailScreen.models';

export const FormBuy: React.FunctionComponent<FormBuyProps> = ({
  currentInfo,
  buyRef,
}) => {
  const validate = React.useCallback((values: BuyValues) => {
    const errors: FormikErrors<BuyValues> = {};

    if (Number(values.amount) === 0) {
      errors.amount = i18n.t('amountIsSuperiorAvailable');
    }
    return errors;
  }, []);

  const [mode, setMode] = React.useState('date');

  const onSubmit = React.useCallback(
    async (values: BuyValues, actions: FormikHelpers<BuyValues>) => {
      const user = firebase.auth().currentUser;
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
      console.log('loading: ');

      firebase
        .database()
        .ref(`/users/${user?.uid}/portfolio/${currentInfo.currency}`)
        .get()
        .then((snapshat) => {
          const transcation = snapshat.val();
          console.log('loadin2232g: ');
          if (transcation) {
            //  Already there is a transaction for this Currency',
            const amount = transcation.amount + values.amount;
            const price =
              (Number(transcation.total) + Number(values.total)) /
              Number(amount);
            const total = Number(transcation.total) + Number(values.total);
            console.log('sdfsd: ', amount);
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
          } else {
            // First transctions
            firebase
              .database()
              .ref(`/users/${user?.uid}/portfolio/${currentInfo.currency}`)
              .set({
                currentInfo,
                ...values,
                timestamp: new Date().getTime(),
              });
          }
        });

      buyRef.current.snapTo(2);

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
        touched,
        isSubmitting,
      }) => (
        <View
          style={{
            backgroundColor: theme.colors.tradingZ.charcoal,
            padding: 16,
            height: 550,
          }}
        >
          <InputWrapper
            errorVisible={touched.amount && !!errors.amount}
            errorMessage={errors.amount}
          >
            <TextInput
              keyboardType="decimal-pad"
              label={i18n.t('formAmountLabel')}
              error={!!errors.amount}
              value={values.amount}
              onBlur={() => {
                setFieldTouched('amount', true);
              }}
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
              backgroundColor="success"
              onPress={() => handleSubmit()}
              loading={isSubmitting}
            >
              {i18n.t('buyLabel')}
            </PrimaryButton>
          </Row>
        </View>
      )}
    </Formik>
  );
};
