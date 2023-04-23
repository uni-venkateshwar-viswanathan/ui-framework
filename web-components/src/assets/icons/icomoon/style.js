import { css } from 'lit';

export const uniphoreIconMoonStyle = css`
 @font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?7szum1');
  src:  url('fonts/icomoon.eot?7szum1#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?7szum1') format('truetype'),
    url('fonts/icomoon.woff?7szum1') format('woff'),
    url('fonts/icomoon.svg?7szum1#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-play-arrow:before {
  content: "\\e908";
}
.icon-minus:before {
  content: "\\e90d";
}
.icon-plus-outline:before {
  content: "\\e90b";
}
.icon-checkmark:before {
  content: "\\e909";
}
.icon-arrow-down:before {
  content: "\\e903";
}
.icon-arrow-left:before {
  content: "\\e904";
}
.icon-arrow-right:before {
  content: "\\e906";
}
.icon-arrow-up:before {
  content: "\\e907";
}
.icon-close-solid:before {
  content: "\\e90a";
}
.icon-search:before {
  content: "\\e90c";
}
.icon-settings:before {
  content: "\\e900";
}
.icon-report:before {
  content: "\\e901";
}
.icon-robot-1:before {
  content: "\\e902";
}
.icon-resource:before {
  content: "\\e905";
}
`;
