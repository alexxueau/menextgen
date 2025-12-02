import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Head} from "./screens/Head";
import { WhatIsMeydIt } from "./screens/WhatIsMeydIt/WhatIsMeydIt";
import { Embracing } from "./screens/Embracing/Embracing";
import { WhyBecomeAVip } from "./screens/WhyBecomeAVip/WhyBecomeAVip"
import { SpreadTheWord } from "./screens/SpreadTheWord/SpreadTheWord";
import { HowItWorks} from "./screens/HowItWorks";

import theme from "./op1000theme";
import{ ThemeProvider} from "@mui/material";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <Head />
    <WhatIsMeydIt />
    <Embracing />
    <WhyBecomeAVip />
    <SpreadTheWord />
    <HowItWorks />
    </ThemeProvider>
  </StrictMode>,
);
