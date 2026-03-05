# TokenInput

## Structure Compliance

- Uses semantic token styles from `var(--uds-...)`.
- BEM naming with `.uds-token-input` as the block prefix.
- Public exports are limited to component and types through `index.ts`.

## API Notes

- Controlled tokens: `tokens` + `onTokensChange`
- Uncontrolled tokens: `defaultTokens`
- Controlled input text: `inputValue` + `onInputValueChange`
- Uncontrolled input text: `defaultInputValue`
- Supports `size`: `default | compact`
- Supports `state`: `default | focused | error | disabled`
- Supports duplicate control (`allowDuplicates`) and max token cap (`maxTokens`)
- Default token delimiters: comma, enter, tab
