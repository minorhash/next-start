import Link from 'next/link'
import Head from 'next/head'
import NavBar from './_navbar'
import NavBarBottom from './_navbarBottom'

export default ({ children, title = 'Next.js Default Title' }) => (
  <div>

    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
    </Head>

    <header>
      <NavBar />
    </header>

    <div className="container-fluid">
      <div className="row">

        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link href="/" prefetch><a className="nav-link active">Overview <span className="sr-only">(current)</span></a></Link>
            </li>

         </ul>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <p className="nav-link">Nav item</p>
            </li>
         </ul>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <p className="nav-link">Nav item again</p>
            </li>
         </ul>
        </nav>

        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">

{ children }

</main>
</div>
</div>

<footer>
      <NavBarBottom />
    </footer>

    <style jsx>{`
          .sidebar .nav-link {
            border-radius: 0;
            margin: 0 -15px 0 -15px;
          }
        `}</style>

  </div>

)
