import React, {FC} from 'react';
import styled from 'styled-components';

import theme from '../theme';

interface IIcon {
  size: number;
  color: string;
}

type Props = {
  /** specify what Icon to render  */
  render: string;
  /** set size of the Icon  */
  size?: number;
  /** set color of the Icon */
  color?: string;
};

export const Icon: FC<Props> = ({render, size = 32, color = 'blue7'}) => (
  <Container size={size} color={color}>
    {// CONTACT - AT
    render === 'contact-at' && (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors[color]}
          d="M16 6C10.486 6 6 10.486 6 16s4.486 10 10 10a1 1 0 1 0 0-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.103-.897 2-2 2s-2-.897-2-2c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382 2.206 0 4-1.794 4-4 0-5.514-4.486-10-10-10zm0 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        />
      </svg>
    )}

    {// MISC - PADLOCK
    render === 'misc-padlock' && (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12h-2v-2c0-3.309-2.691-6-6-6s-6 2.691-6 6v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2zm-8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-11h8v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2z"
        />
      </svg>
    )}

    {// INSURANCE - CAR
    render === 'car' && (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 14.424V9c0-2.757-2.243-5-5-5h-8C9.243 4 7 6.243 7 9v5.424A5.003 5.003 0 0 0 4 19v4a1 1 0 0 0 1 1h1v3a1 1 0 0 0 2 0v-3h16v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-1v-4a5.003 5.003 0 0 0-3-4.576zM9 17.995c-.552 0-1 .453-1 1.005a1 1 0 0 0 2 0v-.01a.996.996 0 0 0-1-.995zM12 6c-1.654 0-3 1.346-3 3v5h14V9c0-1.654-1.346-3-3-3h-8zm14 16H6v-3c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v3zm-4-3c0-.552.448-1.005 1-1.005s1 .443 1 .995V19a1 1 0 0 1-2 0z"
        />
      </svg>
    )}

    {// FINANCE - POLICY
    render === 'finance-policy' && (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors[color]}
          d="M25.707 11.293l-7-7A.996.996 0 0 0 18 4H9C7.346 4 6 5.346 6 7v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V12a.996.996 0 0 0-.293-.707zM24 25a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.586L24 12.414V25zm-10-9v1h-1a1 1 0 1 0 0 2h1v1h-1a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-2v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 1 1.867-.498 1 1 0 1 0 1.73-1.004A3.011 3.011 0 0 0 17 13c-1.654 0-3 1.346-3 3z"
        />
      </svg>
    )}
  </Container>
);

const Container = styled.span<IIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
`;
