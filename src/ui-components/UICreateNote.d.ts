/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UICreateNoteOverridesProps = {
    UICreateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create New Note"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    "Line 141302024"?: PrimitiveOverrideProps<IconProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    TextField41302077?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41302084?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41302056?: PrimitiveOverrideProps<TextFieldProps>;
    "Line 141302032"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UICreateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    Notes?: any;
} & {
    overrides?: UICreateNoteOverridesProps | undefined | null;
}>;
export default function UICreateNote(props: UICreateNoteProps): React.ReactElement;
