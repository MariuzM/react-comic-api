import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Tooltip } from 'reactstrap'
import { ApiContext } from './_context'

export default function ComicButtonView() {
  const { loader, mainStyle, link, tooltipOpen, toggle } = useContext(ApiContext)
  const { title, img, alt } = loader.data

  return (
    <div>
      {loader.loading ? (
        <div>Loading...</div>
      ) : (
        <div style={mainStyle}>
          <Button href={link} id="Tooltip">
            <div>{title}</div>
            <img src={img} alt="" />
          </Button>

          <Tooltip
            placement="right"
            isOpen={tooltipOpen}
            target="Tooltip"
            toggle={toggle}
          >
            {alt}
          </Tooltip>
        </div>
      )}
    </div>
  )
}
