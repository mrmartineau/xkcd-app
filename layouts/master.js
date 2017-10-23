import Link from 'next/link'
import Head from 'next/head'
import { injectGlobal } from 'emotion'
import globalStyles from '../theme/globalStyles'

injectGlobal`
  ${globalStyles}
`

export default ({ children, title = 'XKCD' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    {children}
  </div>
)
