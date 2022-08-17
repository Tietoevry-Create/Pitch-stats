import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";

import { useId } from "@reach/auto-id";

const InputWithPlaceholder = React.forwardRef((props, ref) => {
  const {
    type,
    value,
    readOnly,
    placeholder,
    markers,
    presence,
    compareValue,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const inputId = useId();

  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value;

      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <FormField
      description={type.description}
      title={type.title}
      __unstable_markers={markers}
      __unstable_presence={presence}
      compareValue={compareValue}
      inputId={inputId}
    >
      <TextInput
        id={inputId}
        onChange={handleChange}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </FormField>
  );
});

export default InputWithPlaceholder;
