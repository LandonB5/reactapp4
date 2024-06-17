/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    FourSome?: PrimitiveOverrideProps<TextProps>;
    "Elevate Your Game"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
