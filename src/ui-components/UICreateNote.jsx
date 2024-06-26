/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { useState } from "react";
import { API } from "aws-amplify";
import { createNote } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function UICreateNote(props) {
  const { Notes, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldFourOneThreeZeroTwoZeroSevenSevenValue,
    setTextFieldFourOneThreeZeroTwoZeroSevenSevenValue,
  ] = useState("");
  const [
    textFieldFourOneThreeZeroTwoZeroEightFourValue,
    setTextFieldFourOneThreeZeroTwoZeroEightFourValue,
  ] = useState("");
  const [
    textFieldFourOneThreeZeroTwoZeroFiveSixValue,
    setTextFieldFourOneThreeZeroTwoZeroFiveSixValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await API.graphql({
      query: createNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourOneThreeZeroTwoZeroSevenSevenValue,
          description: textFieldFourOneThreeZeroTwoZeroEightFourValue,
          image: textFieldFourOneThreeZeroTwoZeroFiveSixValue,
          author: authAttributes["email"],
        },
      },
    });
  };
  const buttonOnMouseLeave = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UICreateNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create New Note"
            {...getOverrideProps(overrides, "Create New Note")}
          ></Text>
        </Flex>
        <View
          width="272px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Divider")}
        >
          <Icon
            width="272px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 272, height: 1 }}
            paths={[
              {
                d: "M0 0L272 0L272 -1L0 -1L0 0Z",
                stroke: "rgba(174,179,183,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="calc(50% - 0px - 1px)"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Line 141302024")}
          ></Icon>
        </View>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Upload New Image")}
          ></Text>
        </Flex>
        <TextField
          width="272px"
          height="unset"
          label="Name"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourOneThreeZeroTwoZeroSevenSevenValue}
          onChange={(event) => {
            setTextFieldFourOneThreeZeroTwoZeroSevenSevenValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField41302077")}
        ></TextField>
        <TextField
          width="272px"
          height="unset"
          label="description"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourOneThreeZeroTwoZeroEightFourValue}
          onChange={(event) => {
            setTextFieldFourOneThreeZeroTwoZeroEightFourValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField41302084")}
        ></TextField>
        <TextField
          width="272px"
          height="unset"
          label="image"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourOneThreeZeroTwoZeroFiveSixValue}
          onChange={(event) => {
            setTextFieldFourOneThreeZeroTwoZeroFiveSixValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField41302056")}
        ></TextField>
        <Icon
          width="272px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 272, height: 1 }}
          paths={[
            {
              d: "M0 0L272 0L272 -1L0 -1L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 141302032")}
        ></Icon>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          backgroundColor="rgba(4,125,149,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseLeave={() => {
            buttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
