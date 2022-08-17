import React from "react";

import { Stack, Heading } from "@sanity/ui";

const Placeholder = React.forwardRef((props, _ref) => {
  return (
    <Stack space={2}>
      <Heading as="h3" size={0}>
        {props.type.title}
      </Heading>
    </Stack>
  );
});

export default Placeholder;
