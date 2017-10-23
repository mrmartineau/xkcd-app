import { ds } from './index'

export default`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    font-family: ${ds.get('type.fontFamily.system')};
    line-height: ${ds.get('type.lineHeight.all')};
    color: ${ds.color('text')};
    font-weight: normal;
  }

  html {
    background: ${ds.color('bright')};
  }
`
