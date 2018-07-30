import React, { Component, Fragment } from 'react'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

class ZoomImg extends Component {
  initGallery = () => {
    const items = [this.props.img]
    const options = {
      history: false,
      captionEl: false,
      shareEl: false,
      counterEl: false,
      fullscreenEl: false,
      showHideOpacity: true,
      bgOpacity: 0.8,
      getThumbBoundsFn: () => {
        const pageYScroll =
          window.pageYOffset || document.documentElement.scrollTop
        const rect = this.thumbnail.getBoundingClientRect()

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
      },
    }

    this.gallery = new PhotoSwipe(
      this.pswpElement,
      PhotoSwipeUI_Default,
      items,
      options
    )
    this.gallery.init()
  }

  render() {
    const {
      img: { src, alt },
      ...rest
    } = this.props

    return (
      <Fragment>
        <div
          ref={ref => (this.thumbnail = ref)}
          onClick={this.initGallery}
          role="img"
          aria-label={alt}
          css={{
            position: 'relative',
            zIndex: 0,
            borderRadius: 5,
            backgroundImage: `url(${src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            border: 'solid 1px #e0ebf1',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: 0,
              position: 'relative',
              zIndex: 1,
              paddingBottom: '58%',
              // borderRadius: 'inherit',
              // backgroundColor: '#CCE0EA',
              // transition: '.5s',
              // mixBlendMode: 'color',
            },
            ':hover': {
              cursor: 'zoom-in',
              '::after': {
                opacity: 0,
              },
            },
          }}
          {...rest}
        />
        <div
          ref={ref => (this.pswpElement = ref)}
          className="pswp"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ZoomImg
