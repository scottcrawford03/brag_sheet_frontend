import fetch from "isomorphic-unfetch"

const Page = ({ brags }) =>
  <div className='brags'>
    <h3>Brags:</h3>
    {brags.map((brag) => {
        return(
          <p className='brag'>
            {brag.brag}
          </p>
        )
      })
    }
    <style jsx>{`
        .brags {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .brag {
          border: 2px solid red;
          color: blue;
        }
      `}</style>
  </div>

Page.getInitialProps = async ({ req }) => {
  const apiHost = process.env.API_HOST
  const res = await fetch(apiHost)
  const json = await res.json()
  debugger
  return { brags: json.brags }
}

export default Page
