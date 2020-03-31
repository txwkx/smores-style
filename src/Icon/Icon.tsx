import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'

type Props = {
  /** specify what Icon to render  */
  render: string
  /** set size of the Icon  */
  size?: number
  /** set color of the Icon */
  color?: string
  /** rotation degrees */
  rotate?: number
  /** margins TOP-RIGHT-BOTTOM-LEFT */
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

export const Icon: FC<Props> = ({
  render,
  size = 32,
  color = 'blue7',
  rotate = 0,
  mt = '0',
  mr = '0',
  mb = '0',
  ml = '0',
}) => (
  <Container
    size={size}
    color={color}
    rotate={rotate}
    mt={mt}
    mr={mr}
    mb={mb}
    ml={ml}
  >
    {// MISC - PADLOCK
    render === 'padlock' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12h-2v-2c0-3.309-2.691-6-6-6s-6 2.691-6 6v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2zm-8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-11h8v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2z"
        />
      </svg>
    )}

    {// MISC - RENEWAL
    render === 'renewal' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M24.75 6a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h4.708c-1.648-3.079-4.69-5-8.083-5-3.863 0-7.273 2.49-8.686 6.344a1 1 0 1 1-1.878-.689C6.516 8.005 10.663 5 15.375 5c3.838 0 7.301 1.995 9.375 5.248V6zm.061 12.656a.999.999 0 1 1 1.878.689C24.984 23.995 20.837 27 16.125 27c-3.838 0-7.301-1.995-9.375-5.248V26a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H8.042c1.648 3.079 4.69 5 8.083 5 3.863 0 7.273-2.49 8.686-6.344z"
        />
      </svg>
    )}

    {// MISC - CALENDAR
    render === 'calendar' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M25 6h-2V5a1 1 0 00-2 0v1H11V5a1 1 0 00-2 0v1H7C5.346 6 4 7.346 4 9v16c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3zm1 19c0 .552-.449 1-1 1H7c-.552 0-1-.449-1-1V15h20v10zm0-12H6V9c0-.552.449-1 1-1h2v2a1 1 0 002 0V8h10v2a1 1 0 002 0V8h2c.552 0 1 .449 1 1v4zm-5.5 11c1.93 0 3.5-1.57 3.5-3.5S22.43 17 20.5 17 17 18.57 17 20.5s1.57 3.5 3.5 3.5zm0-5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z"
        />
      </svg>
    )}

    {// FINANCE - CARD
    render === 'card' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M12 20.995c.553 0 1-.453 1-1.005a1 1 0 10-2 0V20c0 .552.447.995 1 .995zM25 7H7c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V10c0-1.654-1.346-3-3-3zm1 15c0 .551-.448 1-1 1H7c-.552 0-1-.449-1-1v-7h20v7zm0-9H6v-3c0-.551.448-1 1-1h18c.552 0 1 .449 1 1v3zM9 20.995c.553 0 1-.453 1-1.005a1 1 0 10-2 0V20c0 .552.447.995 1 .995z"
        />
      </svg>
    )}

    {// CONTACT - EMAIL
    render === 'contact-email' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M25 6H7C5.346 6 4 7.346 4 9v14c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3zm1 17c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1v-9.514l7.905 3.649a5 5 0 0 0 4.19-.001L26 13.486V23zm0-11.717l-8.743 4.035a2.995 2.995 0 0 1-2.515 0L6 11.283V9c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v2.283z"
        />
      </svg>
    )}

    {// CONTACT - AT
    render === 'at' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M16 6C10.486 6 6 10.486 6 16s4.486 10 10 10a1 1 0 1 0 0-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.103-.897 2-2 2s-2-.897-2-2c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382 2.206 0 4-1.794 4-4 0-5.514-4.486-10-10-10zm0 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        />
      </svg>
    )}

    {// CONTACT - UPLOAD-EMAIL
    render === 'upload-email' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M27.611 12.709l-11-8.5a1.001 1.001 0 0 0-1.223 0l-11 8.5c-.244.19-.388.482-.388.792V25c0 1.653 1.346 3 3 3h5a1 1 0 1 0 0-2H7c-.552 0-1-.45-1-1v-9.246l5.459 3.512a1 1 0 0 0 1.082-1.682l-6.108-3.93L16 6.266l9.567 7.393-6.108 3.93a1 1 0 1 0 1.082 1.681L26 15.757V25c0 .552-.448 1-1 1h-5a1 1 0 1 0 0 2h5c1.654 0 3-1.346 3-3V13.5c0-.31-.144-.601-.389-.791zM19.999 15a1 1 0 0 0 .601-1.8l-4-3c-.041-.032-.088-.046-.132-.07-.039-.02-.074-.043-.115-.06a.989.989 0 0 0-.346-.07H15.994a.989.989 0 0 0-.346.07c-.042.017-.076.04-.115.06-.044.024-.092.04-.133.07l-4 3a1 1 0 1 0 1.199 1.6L15 13v14a1 1 0 1 0 2 0V13l2.4 1.8c.18.134.39.2.599.2z"
        />
      </svg>
    )}

    {// PEOPLE - PROFILE
    render === 'profile' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M16 9.995c.553 0 1-.453 1-1.005a1 1 0 1 0-2 0V9c0 .552.447.995 1 .995zM23 7h-2.432A4.99 4.99 0 0 0 16 4a4.99 4.99 0 0 0-4.568 3H9c-1.654 0-3 1.346-3 3v15c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V10c0-1.654-1.346-3-3-3zm-3 19h-8v-.161C12 24.3 13.832 23 16 23s4 1.3 4 2.839V26zm4-1a1 1 0 0 1-1 1h-1v-.161C22 23.171 19.309 21 16 21s-6 2.171-6 4.839V26H9a1 1 0 0 1-1-1V10c0-.551.448-1 1-1h3.142a1 1 0 0 0 .968-.749A2.993 2.993 0 0 1 16 6c1.358 0 2.547.926 2.891 2.251a.998.998 0 0 0 .967.749H23c.552 0 1 .449 1 1v15zm-8-12c-1.93 0-3.5 1.57-3.5 3.5S14.07 20 16 20s3.5-1.57 3.5-3.5S17.93 13 16 13zm0 5c-.827 0-1.5-.673-1.5-1.5S15.173 15 16 15s1.5.673 1.5 1.5S16.827 18 16 18z"
        />
      </svg>
    )}

    {// INSURANCE - CAR
    render === 'car' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 14.424V9c0-2.757-2.243-5-5-5h-8C9.243 4 7 6.243 7 9v5.424A5.003 5.003 0 0 0 4 19v4a1 1 0 0 0 1 1h1v3a1 1 0 0 0 2 0v-3h16v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-1v-4a5.003 5.003 0 0 0-3-4.576zM9 17.995c-.552 0-1 .453-1 1.005a1 1 0 0 0 2 0v-.01a.996.996 0 0 0-1-.995zM12 6c-1.654 0-3 1.346-3 3v5h14V9c0-1.654-1.346-3-3-3h-8zm14 16H6v-3c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v3zm-4-3c0-.552.448-1.005 1-1.005s1 .443 1 .995V19a1 1 0 0 1-2 0z"
        />
      </svg>
    )}

    {// FINANCE - POLICY
    render === 'policy' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M25.707 11.293l-7-7A.996.996 0 0 0 18 4H9C7.346 4 6 5.346 6 7v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V12a.996.996 0 0 0-.293-.707zM24 25a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.586L24 12.414V25zm-10-9v1h-1a1 1 0 1 0 0 2h1v1h-1a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-2v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 1 1.867-.498 1 1 0 1 0 1.73-1.004A3.011 3.011 0 0 0 17 13c-1.654 0-3 1.346-3 3z"
        />
      </svg>
    )}

    {// INTERFACE - EDIT
    render === 'edit' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M24.121 12.122A2.982 2.982 0 0 0 25 10c0-.801-.312-1.555-.879-2.121A2.976 2.976 0 0 0 22 7c-.801 0-1.555.312-2.121.879l-1.464 1.464 4.243 4.243 1.463-1.464zM21.243 15L17 10.757 8.667 19.09 7 25l5.91-1.667L21.243 15z"
        />
      </svg>
    )}

    {// INTERFACE - SEARCH
    render === 'search' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M7 14a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm7-9a9 9 0 1 0 5.618 16.032l5.675 5.675a1 1 0 0 0 1.414-1.414l-5.675-5.675A9 9 0 0 0 14 5z"
        />
      </svg>
    )}

    {// INTERFACE - TICK
    render === 'tick' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M24.641 9.232C24.214 8.878 23.586 8.937 23.232 9.36L13.807 20.67L8.55499 17.169C8.09399 16.861 7.47399 16.986 7.16799 17.446C6.86099 17.905 6.98499 18.527 7.44499 18.833L13.445 22.833C13.615 22.945 13.808 23 13.999 23C14.287 23 14.571 22.876 14.769 22.64L24.769 10.64C25.122 10.216 25.064 9.585 24.641 9.232Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// INTERFACE - CROSS
    render === 'cross' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M17.4139 15.5L22.7068 9.82913C23.0977 9.41022 23.0977 8.7331 22.7068 8.31418C22.3158 7.89527 21.6838 7.89527 21.2928 8.31418L16 13.985L10.7072 8.31418C10.3162 7.89527 9.68423 7.89527 9.29324 8.31418C8.90225 8.7331 8.90225 9.41022 9.29324 9.82913L14.5861 15.5L9.29324 21.1709C8.90225 21.5898 8.90225 22.2669 9.29324 22.6858C9.48823 22.8947 9.74422 22.9997 10.0002 22.9997C10.2562 22.9997 10.5122 22.8947 10.7072 22.6858L16 17.0149L21.2928 22.6858C21.4878 22.8947 21.7438 22.9997 21.9998 22.9997C22.2558 22.9997 22.5118 22.8947 22.7068 22.6858C23.0977 22.2669 23.0977 21.5898 22.7068 21.1709L17.4139 15.5Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// INTERFACE - UP-DOWN
    render === 'up-down' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M15.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L16 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4zM16.707 24.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 22.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z"
        />
      </svg>
    )}

    {// INTERFACE - CARET
    render === 'caret' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          d="M23.66 12.248a1 1 0 0 0-1.412.095L16 19.482l-6.248-7.14a1 1 0 1 0-1.504 1.317l7 8a.995.995 0 0 0 1.504 0l7-8a1 1 0 0 0-.093-1.411z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// INTERFACE - PLUS CIRCLE
    render === 'plus-circle' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.49 7.51c-4.681-4.68-12.299-4.68-16.98 0-4.68 4.682-4.68 12.298 0 16.98A11.97 11.97 0 0016 28c3.073 0 6.148-1.17 8.488-3.51 4.682-4.682 4.682-12.3.001-16.98zM20.001 15h-3.001v-3.001a1 1 0 00-2.001 0v3.001h-3.002a1 1 0 000 2H15v3.002a1 1 0 002 0V17h3.002a1 1 0 000-2.001zM8.925 23.074c3.9 3.9 10.249 3.9 14.15 0 3.9-3.901 3.9-10.248 0-14.149A9.974 9.974 0 0016 6a9.977 9.977 0 00-7.075 2.924c-3.9 3.901-3.9 10.249 0 14.15z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// INTERFACE - DOC-DOWNLOAD
    render === 'doc-download' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M20.707 22.293a.999.999 0 0 0-1.414 0L17 24.586V17a1 1 0 0 0-2 0v7.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414l4 4A1.01 1.01 0 0 0 16 28a1.01 1.01 0 0 0 .707-.293l4-4a.999.999 0 0 0 0-1.414zm5-12l-6-6A.997.997 0 0 0 19 4H9C7.346 4 6 5.346 6 7v18c0 1.654 1.346 3 3 3h2a1 1 0 0 0 0-2H9c-.551 0-1-.449-1-1V7c0-.551.449-1 1-1h9.586L24 11.414V25c0 .551-.449 1-1 1h-2a1 1 0 0 0 0 2h2c1.654 0 3-1.346 3-3V11a.997.997 0 0 0-.293-.707z"
        />
      </svg>
    )}

    {// FEEDBACK - QUESTION
    render === 'question' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M17.3 19.4c.16-1.313 1.164-2.202 2.156-2.932C20.962 15.36 22 13.935 22 11.996 22 8.802 19 7 16.08 7 12.92 7 10 8.996 10 12.373c0 .388.034.775.091 1.152l3.628.296a4.273 4.273 0 01-.092-.855c0-1.426.924-2.59 2.419-2.59 1.106 0 2.144.57 2.144 1.803 0 2.6-4.403 3.17-4.403 6.524 0 .229.023.468.046.696H17.3zm-3.89 4.186c0-1.244 1.016-2.27 2.236-2.27a2.28 2.28 0 012.293 2.27c0 1.243-1.015 2.258-2.293 2.258-1.22 0-2.235-1.015-2.235-2.258z"
        />
      </svg>
    )}

    {// FEEDBACK - CHAT-BUBBLE
    render === 'chat-bubble' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M18 16h-4a1 1 0 100 2h4a1 1 0 100-2zm3-4H11a1 1 0 100 2h10a1 1 0 100-2zm-2.5-7h-5C8.262 5 4 9.262 4 14.5a9.481 9.481 0 007 9.16V27a1 1 0 001.555.832L18.303 24h.197c5.238 0 9.5-4.262 9.5-9.5S23.738 5 18.5 5zm0 17H18c-.197 0-.391.059-.555.168L13 25.131V22.86a1 1 0 00-.824-.984A7.486 7.486 0 016 14.5C6 10.364 9.364 7 13.5 7h5c4.136 0 7.5 3.364 7.5 7.5S22.636 22 18.5 22z"
        />
      </svg>
    )}

    {// REFUND (Box with arrow facing left)
    render === 'refund' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 9a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V10a1 1 0 00-1-1H7zm-3 1a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V10z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.324 12.341a1 1 0 01-.094 1.412L13.661 16l2.569 2.247a1 1 0 01-1.317 1.506l-3.429-3a1 1 0 010-1.506l3.429-3a1 1 0 011.411.095z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.143 16a1 1 0 011-1h7.714a1 1 0 110 2h-7.714a1 1 0 01-1-1z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// CHARGE (Box with arrow facing right)
    render === 'charge' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 9a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V10a1 1 0 00-1-1H7zm-3 1a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V10z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.676 19.659a1 1 0 01.094-1.412L18.339 16l-2.569-2.247a1 1 0 011.317-1.506l3.429 3a1 1 0 010 1.506l-3.429 3a1 1 0 01-1.411-.095z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.857 16a1 1 0 01-1 1h-7.714a1 1 0 110-2h7.714a1 1 0 011 1z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// CAR CLAIM (Car going over a bump)
    render === 'car-claim' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          d="M23.942 22.667A4.005 4.005 0 0020.171 20a4.006 4.006 0 00-3.772 2.667 1 1 0 001.886.666 2 2 0 013.773 0 .998.998 0 001.275.61.997.997 0 00.609-1.276zm-17.697-7.62a.996.996 0 00-1.211-.725 1.003 1.003 0 00.242 1.974 1 1 0 00.971-1.242l-.002-.008zM4.016 20.31l16.751-4.489.652 2.432a1 1 0 001.932-.518l-.91-3.397v-.002l-1.73-6.457a2.733 2.733 0 00-.47-.957L16.565 2.09a2.744 2.744 0 00-2.909-.995L2.811 4A2.75 2.75 0 00.788 6.315l-.767 6.027a2.75 2.75 0 00.072 1.06l2.642 9.856a1 1 0 101.932-.517l-.651-2.43zM2.772 6.568a.755.755 0 01.556-.637l10.844-2.905a.753.753 0 01.8.274l2.983 3.924L2.15 11.458l.622-4.89zm.726 11.811l-1.303-4.862 16.751-4.489 1.303 4.861-16.751 4.49zm14.64-6.506a.996.996 0 00-1.202-.74 1.001 1.001 0 00.46 1.952c.537-.127.87-.665.744-1.203l-.002-.009z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// ARROW
    render === 'arrow' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M6.087 16.401C6.101 16.434 6.129 16.459 6.147 16.49C6.197 16.577 6.251 16.66 6.324 16.728C6.332 16.735 6.334 16.746 6.342 16.753L14.342 23.753C14.757 24.116 15.389 24.075 15.753 23.659C16.116 23.243 16.074 22.612 15.658 22.248L9.661 17L25 17C25.553 17 26 16.552 26 16C26 15.448 25.553 15 25 15L9.661 15L15.658 9.752C16.074 9.388 16.116 8.757 15.753 8.341C15.555 8.116 15.278 8 15 8C14.766 8 14.531 8.082 14.342 8.248L6.342 15.248C6.334 15.255 6.331 15.266 6.324 15.273C6.251 15.341 6.197 15.424 6.147 15.511C6.129 15.542 6.102 15.567 6.087 15.6C6.032 15.722 6 15.857 6 16C6 16.143 6.032 16.278 6.087 16.401Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// TRASH
    render === 'trash' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M9.5064 23.7C9.5592 24.5432 10.2584 25.2 11.1032 25.2H20.8968C21.7416 25.2 22.4408 24.5432 22.4936 23.7L23.2 12.4H8.8L9.5064 23.7ZM23.2 9.2H20.8V8.4C20.8 7.0768 19.7232 6 18.4 6H13.6C12.2768 6 11.2 7.0768 11.2 8.4V9.2H8.8C8.3584 9.2 8 9.5584 8 10C8 10.4416 8.3584 10.8 8.8 10.8H23.2C23.6416 10.8 24 10.4416 24 10C24 9.5584 23.6416 9.2 23.2 9.2ZM19.2 9.2H12.8V8.4C12.8 7.9592 13.1592 7.6 13.6 7.6H18.4C18.8408 7.6 19.2 7.9592 19.2 8.4V9.2Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// WARNING
    render === 'warning' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          fill={theme.colors[color]}
          d="M16 11a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm0 10.005a1.003 1.003 0 000 2.005 1 1 0 001-1V22a.995.995 0 00-1-.995zm11.42-.503L19.78 7.186A4.31 4.31 0 0016 5a4.31 4.31 0 00-3.78 2.186L4.58 20.502a4.288 4.288 0 00.009 4.327A4.313 4.313 0 008.36 27h15.28a4.313 4.313 0 003.771-2.171 4.288 4.288 0 00.009-4.327zm-1.739 3.324A2.333 2.333 0 0123.64 25H8.36a2.331 2.331 0 01-2.041-1.174 2.306 2.306 0 01-.005-2.328l7.64-13.316A2.332 2.332 0 0116 7c.856 0 1.621.441 2.046 1.182l7.64 13.316c.418.73.417 1.6-.005 2.328z"
        />
      </svg>
    )}

    {// INFO
    render === 'info' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 4C9.383 4 4 9.383 4 16C4 22.617 9.383 28 16 28C22.617 28 28 22.617 28 16C28 9.383 22.617 4 16 4ZM15 10.99C15 10.437 15.447 9.99001 16 9.99001C16.553 9.99001 17 10.437 17 10.99C17 11.543 16.553 11.995 16 11.995C15.447 11.995 15 11.553 15 11V10.99ZM15 15C15 14.447 15.447 14 16 14C16.553 14 17 14.447 17 15V22C17 22.553 16.553 23 16 23C15.447 23 15 22.553 15 22V15ZM6 16C6 21.514 10.486 26 16 26C21.514 26 26 21.514 26 16C26 10.486 21.514 6 16 6C10.486 6 6 10.486 6 16Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// ID
    render === 'id' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 7H7C5.346 7 4 8.34601 4 10V22C4 23.654 5.346 25 7 25H25C26.654 25 28 23.654 28 22V10C28 8.34601 26.654 7 25 7ZM9.184 23C9.598 21.839 10.698 21 12 21C13.302 21 14.402 21.839 14.816 23H9.184ZM25 23C25.551 23 26 22.551 26 22V10C26 9.44901 25.551 9 25 9H7C6.449 9 6 9.44901 6 10V22C6 22.551 6.449 23 7 23H7.101C7.566 20.721 9.585 19 12 19C14.415 19 16.434 20.721 16.899 23H25ZM23 12H19C18.448 12 18 12.448 18 13C18 13.552 18.448 14 19 14H23C23.552 14 24 13.552 24 13C24 12.448 23.552 12 23 12ZM19 16H23C23.552 16 24 16.448 24 17C24 17.552 23.552 18 23 18H19C18.448 18 18 17.552 18 17C18 16.448 18.448 16 19 16ZM12 11C10.07 11 8.5 12.57 8.5 14.5C8.5 16.43 10.07 18 12 18C13.93 18 15.5 16.43 15.5 14.5C15.5 12.57 13.93 11 12 11ZM10.5 14.5C10.5 15.327 11.173 16 12 16C12.827 16 13.5 15.327 13.5 14.5C13.5 13.673 12.827 13 12 13C11.173 13 10.5 13.673 10.5 14.5Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// INTERCOM
    render === 'intercom' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M24.4733 25.9622C24.4733 25.9622 21.5219 24.8159 19.1347 23.8984L9.1123 23.9428C7.92669 23.9481 6.95967 22.9311 6.95409 21.673L6.89487 8.31752C6.88929 7.06065 7.84726 6.03577 9.03287 6.03051L22.2359 5.97196C23.4221 5.9667 24.3885 6.98243 24.3941 8.24054L24.4451 19.7429L24.4457 19.7429L24.4733 25.9622ZM21.8532 18.485C21.8062 18.4252 21.7472 18.3757 21.68 18.3398C21.6128 18.3039 21.5389 18.2824 21.463 18.2766C21.387 18.2707 21.3107 18.2807 21.2388 18.3059C21.167 18.3311 21.1011 18.371 21.0454 18.423C21.0268 18.4393 19.1685 20.107 15.6967 20.1224C12.268 20.1376 10.3663 18.4985 10.3324 18.4686C10.2762 18.4174 10.21 18.3784 10.138 18.3541C10.066 18.3297 9.98973 18.3206 9.914 18.3272C9.83827 18.3338 9.76473 18.356 9.69803 18.3925C9.63133 18.429 9.57291 18.4789 9.52647 18.5391C9.42698 18.6643 9.37876 18.8227 9.39156 18.9822C9.40283 19.1408 9.47464 19.2891 9.59215 19.3963C9.68125 19.4759 11.8115 21.3552 15.7021 21.338C19.5933 21.3207 21.7068 19.4226 21.7952 19.3422C21.9115 19.2338 21.9817 19.085 21.9914 18.9263C22.0028 18.767 21.9534 18.6093 21.8532 18.485Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// CONTACT - CHAT
    render === 'chat' && (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path
          d="M14.25 3H9.75C6.02175 3 3 6.02175 3 9.75C3 12.9615 5.24475 15.6442 8.25 16.3267V21L13.5 16.5H14.25C17.9783 16.5 21 13.4783 21 9.75C21 6.02175 17.9783 3 14.25 3Z"
          fill={theme.colors[color]}
        />
        <path
          d="M7.875 10.875C8.49632 10.875 9 10.3713 9 9.75C9 9.12868 8.49632 8.625 7.875 8.625C7.25368 8.625 6.75 9.12868 6.75 9.75C6.75 10.3713 7.25368 10.875 7.875 10.875Z"
          fill="white"
        />
        <path
          d="M12 10.875C12.6213 10.875 13.125 10.3713 13.125 9.75C13.125 9.12868 12.6213 8.625 12 8.625C11.3787 8.625 10.875 9.12868 10.875 9.75C10.875 10.3713 11.3787 10.875 12 10.875Z"
          fill="white"
        />
        <path
          d="M16.125 10.875C16.7463 10.875 17.25 10.3713 17.25 9.75C17.25 9.12868 16.7463 8.625 16.125 8.625C15.5037 8.625 15 9.12868 15 9.75C15 10.3713 15.5037 10.875 16.125 10.875Z"
          fill="white"
        />
      </svg>
    )}

    {// INTERFACE - CAMERA
    render === 'camera' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 12C12.967 12 10.5 14.467 10.5 17.5C10.5 20.533 12.967 23 16 23C19.033 23 21.5 20.533 21.5 17.5C21.5 14.467 19.033 12 16 12ZM16 21C14.07 21 12.5 19.43 12.5 17.5C12.5 15.57 14.07 14 16 14C17.93 14 19.5 15.57 19.5 17.5C19.5 19.43 17.93 21 16 21ZM25 8H22.535L20.832 5.445C20.646 5.167 20.334 5 20 5H12C11.666 5 11.354 5.167 11.168 5.445L9.465 8H7C5.346 8 4 9.346 4 11V24C4 25.654 5.346 27 7 27H25C26.654 27 28 25.654 28 24V11C28 9.346 26.654 8 25 8ZM26 24C26 24.551 25.551 25 25 25H7C6.449 25 6 24.551 6 24V11C6 10.449 6.449 10 7 10H10C10.334 10 10.646 9.833 10.832 9.555L12.536 7H19.465L21.168 9.555C21.354 9.833 21.666 10 22 10H25C25.551 10 26 10.449 26 11V24ZM23 11.995C22.448 11.995 22 12.448 22 13C22 13.552 22.448 14 23 14C23.552 14 24 13.552 24 13V12.99C24 12.438 23.552 11.995 23 11.995Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}
  </Container>
)

interface IIcon {
  size: number
  color: string
  rotate: number
  mt: string
  mr: string
  mb: string
  ml: string
}

const Container = styled.span<IIcon>(
  ({ size, rotate, mt, mr, mb, ml }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${size}px;
    height: ${size}px;
    transform: rotate(${rotate}deg);
    margin-top: ${mt};
    margin-right: ${mr};
    margin-bottom: ${mb};
    margin-left: ${ml};
  `,
)
