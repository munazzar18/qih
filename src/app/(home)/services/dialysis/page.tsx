import { getPublicPageBySlug } from '@/app/lib/getPages'
import React from 'react'

interface Data {
  id: number
  title: string
  short_description: string
  description: string
}

interface PagesData {
  status: string
  message: string
  data: string | Data // Data could be either a string or an object
}

const Page = async () => {
  const pageData: PagesData = await getPublicPageBySlug('dialysis')

  console.log('pageData', pageData)

 
  if (typeof pageData.data === 'string') {
    return (
      <div className="wrapper clearfix" id="wrapperParallax">
        <section className="features-bar" id="featuresBar-1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="entry-heading">{pageData.data}</h5>
                <p className="entry-desc strong">
                  No additional description available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // If the data is an object, display the detailed content
  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="features-bar" id="featuresBar-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="entry-bio">
                <h5 className="entry-heading">{pageData.data.title ? pageData.data.title : "hello"}</h5>
                <p className="entry-desc strong">
                  {pageData.data.short_description ? pageData.data.short_description : "hello"}
                </p>
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageData.data.description ? pageData.data.description : "hello",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
