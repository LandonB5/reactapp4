/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Frame2OverridesProps = {
    Frame2?: PrimitiveOverrideProps<ViewProps>;
    "dean-SuGEzQkeJno-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Frame2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame2OverridesProps | undefined | null;
}>;
export default function Frame2(props: Frame2Props): React.ReactElement;
