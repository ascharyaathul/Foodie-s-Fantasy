import React from 'react'

export default function Banner() {
  return (
    <div className="banner">
          <div className="bannercircle">
            <h2 className="h2">40%</h2>
            <h6 className="h6">business lunch</h6>
          </div>

          <div className="bannerlast">
            <h5 style={{ marginTop: "30px" }}>SAMPLE HEADLINE</h5>
            <h5>
              Image from <span style={{ color: "green" }}>Freepik </span>
            </h5>
            <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
              Where every ingredient tells a story
            </h1>

            <button type="button" class="btn btn-outline-warning">
              READMORE
            </button>
          </div>
        </div>
  )
}
