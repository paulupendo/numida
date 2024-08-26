import { css } from "styled-components/native";

export interface SpacingProps {
  padding?: number;
  margin?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
}

export const spacing = css<SpacingProps>`
  ${({ padding }) => padding && `padding: ${padding}px;`}
  ${({ margin }) => margin && `margin: ${margin}px;`}
  ${({ pt }) => pt && `padding-top: ${pt}px;`}
  ${({ pb }) => pb && `padding-bottom: ${pb}px;`}
  ${({ pl }) => pl && `padding-left: ${pl}px;`}
  ${({ pr }) => pr && `padding-right: ${pr}px;`}
  ${({ px }) => px && `padding-horizontal: ${px}px;`}
  ${({ py }) => py && `padding-vertical: ${py}px;`}
  ${({ mt }) => mt && `margin-top: ${mt}px;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
  ${({ ml }) => ml && `margin-left: ${ml}px;`}
  ${({ mr }) => mr && `margin-right: ${mr}px;`}
  ${({ mx }) => mx && `margin-horizontal: ${mx}px;`}
  ${({ my }) => my && `margin-vertical: ${my}px;`}
`;
