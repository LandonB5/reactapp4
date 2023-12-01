/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UIEditNoteOverridesProps = {
    UIEditNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Edit?: PrimitiveOverrideProps<TextProps>;
    Divider41111585?: PrimitiveOverrideProps<ViewProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField41111618?: PrimitiveOverrideProps<FlexProps>;
    label41111619?: PrimitiveOverrideProps<TextProps>;
    InputGroup41111621?: PrimitiveOverrideProps<FlexProps>;
    Input41111622?: PrimitiveOverrideProps<FlexProps>;
    placeholder41111623?: PrimitiveOverrideProps<TextProps>;
    TextField41111625?: PrimitiveOverrideProps<FlexProps>;
    label41111626?: PrimitiveOverrideProps<TextProps>;
    InputGroup41111628?: PrimitiveOverrideProps<FlexProps>;
    Input41111629?: PrimitiveOverrideProps<FlexProps>;
    placeholder41111630?: PrimitiveOverrideProps<TextProps>;
    TextField41111632?: PrimitiveOverrideProps<FlexProps>;
    label41111633?: PrimitiveOverrideProps<TextProps>;
    InputGroup41111635?: PrimitiveOverrideProps<FlexProps>;
    Input41111636?: PrimitiveOverrideProps<FlexProps>;
    placeholder41111637?: PrimitiveOverrideProps<TextProps>;
    Divider41111593?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type UIEditNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: any;
} & {
    overrides?: UIEditNoteOverridesProps | undefined | null;
}>;
export default function UIEditNote(props: UIEditNoteProps): React.ReactElement;
