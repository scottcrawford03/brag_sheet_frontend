import fetch from "isomorphic-unfetch"

const Page = ({ brags }) =>
  <div>
    Brags: {brags.map((brag) => {
        return(
          <p>
            {brag.brag}
          </p>
        )
      })
    }
  </div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:8080')
  const json = await res.json()
  debugger
  return { brags: json.brags }
}

export default Page
