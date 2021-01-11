import * as React from "react";

import {
  BuyScreenFormValues,
  BuyScreenParams,
  BuyScreenProps,
  NewPurchaseType,
  SaveDataType,
} from "./buyScreen.models";
import { i18n } from "./buyScreen.i18n";
import SuperScreen from "../../components/SuperScreen";
import { Formik, FormikErrors } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { Box } from "../../components/Box";
import InputWrapper from "../../components/InputWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { PrimaryButton } from "../../components/buttons";
import Navigation from "../../main/navigation";
import { PrivateValueStore, useNavigation } from "@react-navigation/native";
import { P } from "../../components/Typography";

export const BuyScreen: React.FunctionComponent<BuyScreenProps> = (props) => {
  const [loading, setLoading] = React.useState(false);
  const { ticker, price }: BuyScreenParams = props.route.params;
  const navigation = useNavigation();

  const validate = React.useCallback((values: BuyScreenFormValues) => {
    const errors: FormikErrors<BuyScreenFormValues> = {};

    // handle validation here

    return errors;
  }, []);

  const onSubmit = React.useCallback(async (values: BuyScreenFormValues) => {
    // do something on submit
    setLoading(true);
    let oldData: SaveDataType = {};

    let newData: NewPurchaseType;

    let coinAlreadPurchase: NewPurchaseType | undefined;
    try {
      const value = await AsyncStorage.getItem("mycurrencies");
      if (value !== null) {
        // We have old data!!
        oldData = JSON.parse(value);
        coinAlreadPurchase = (oldData && oldData[values.ticker]) ?? undefined;
      }
    } catch (error) {
      console.log("we dont own any currencies");
      setLoading(false);
    }

    if (coinAlreadPurchase) {
      newData = {
        price:
          (Number(price) + Number(coinAlreadPurchase.price)) /
          (Number(values.amountToBuy) + Number(coinAlreadPurchase.amount)), //usdt average
        amount: Number(values.amountToBuy) + Number(coinAlreadPurchase.amount), // 2BTC
        ticker: values.ticker,

        total:
          Number(price) * Number(values.amountToBuy) +
          Number(coinAlreadPurchase.total),
      };
    } else {
      newData = {
        price: Number(price),
        amount: Number(values.amountToBuy), // 2BTC
        ticker: values.ticker,
        total: Number(price) * Number(values.amountToBuy),
      };
    }

    try {
      await AsyncStorage.setItem(
        "mycurrencies",
        JSON.stringify((oldData = { ...oldData, [values.ticker]: newData }))
      );
      console.log(
        "newPurchase:",
        JSON.stringify((oldData = { ...oldData, [values.ticker]: newData }))
      );
      setLoading(false);
      navigation.navigate("CoinDetail", { ticker: values.ticker });
    } catch (error) {
      Alert.alert("Failed", "Coudn't buy the currency, please try again.");
      setLoading(false);
    }
  }, []);

  return (
    <>
      <SuperScreen>
        <Formik
          initialValues={{ amountToBuy: "", ticker: ticker }}
          onSubmit={onSubmit}
          validate={validate}
        >
          {(formikProps) => (
            <>
              <Box flex={1}>
                <InputWrapper
                  errorVisible={!!formikProps.errors.amountToBuy}
                  errorMessage={formikProps.errors.amountToBuy}
                  testID="lossOrStolenRadioButtonError"
                >
                  <TextInput
                    placeholder="Amount"
                    keyboardType="decimal-pad"
                    value={formikProps.values.amountToBuy}
                    onChangeText={(value) =>
                      formikProps.setFieldValue("amountToBuy", value)
                    }
                  />
                </InputWrapper>
                <P>You are buying {formikProps.values.ticker}</P>

                <P>Amount: {formikProps.values.amountToBuy}</P>
                <P>
                  Total USDT:
                  {Number(formikProps.values.amountToBuy) * Number(price)}
                </P>

                <Box spacing={{ top: 4 }}>
                  <P color="error" size="small">
                    {i18n.t("skipPaymentNotice")}
                  </P>
                </Box>
              </Box>
              <Box>
                <PrimaryButton
                  onPress={() => formikProps.handleSubmit()}
                  loading={loading}
                >
                  {i18n.t("payLabel")}
                </PrimaryButton>
              </Box>
            </>
          )}
        </Formik>
      </SuperScreen>
    </>
  );
};

export default BuyScreen;
