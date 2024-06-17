/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="354px"
      height="641px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    >
      <View
        width="354px"
        height="641px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(139,225,137,0.82)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="58px"
        fontWeight="200"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="70.19318389892578px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="291px"
        height="74px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="FourSome"
        {...getOverrideProps(overrides, "FourSome")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="58px"
        fontWeight="200"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="70.19318389892578px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="273px"
        height="328px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="194px"
        left="41px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Elevate Your Game"
        {...getOverrideProps(overrides, "Elevate Your Game")}
      ></Text>
    </View>
  );
}
