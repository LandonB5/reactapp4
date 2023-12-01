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
export declare type UICreateNoteOverridesProps = {
    UICreateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Create?: PrimitiveOverrideProps<TextProps>;
    Divider41161427?: PrimitiveOverrideProps<ViewProps>;
    "Line 141161428"?: PrimitiveOverrideProps<IconProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField41161433?: PrimitiveOverrideProps<FlexProps>;
    label41161434?: PrimitiveOverrideProps<TextProps>;
    InputGroup41161436?: PrimitiveOverrideProps<FlexProps>;
    Input41161437?: PrimitiveOverrideProps<FlexProps>;
    placeholder41161438?: PrimitiveOverrideProps<TextProps>;
    TextField41161440?: PrimitiveOverrideProps<FlexProps>;
    label41161441?: PrimitiveOverrideProps<TextProps>;
    InputGroup41161443?: PrimitiveOverrideProps<FlexProps>;
    Input41161444?: PrimitiveOverrideProps<FlexProps>;
    placeholder41161445?: PrimitiveOverrideProps<TextProps>;
    TextField41161447?: PrimitiveOverrideProps<FlexProps>;
    label41161448?: PrimitiveOverrideProps<TextProps>;
    InputGroup41161450?: PrimitiveOverrideProps<FlexProps>;
    Input41161451?: PrimitiveOverrideProps<FlexProps>;
    placeholder41161452?: PrimitiveOverrideProps<TextProps>;
    Divider41161454?: PrimitiveOverrideProps<ViewProps>;
    "Line 141161455"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label41161458?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UICreateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    textfeild?: String;
} & {
    overrides?: UICreateNoteOverridesProps | undefined | null;
}>;
export default function UICreateNote(props: UICreateNoteProps): React.ReactElement;
