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
  const res = await fetch('https://api.bragsheet.app')
  const json = await res.json()
  debugger
  return { brags: json.brags }
}

export default Page
