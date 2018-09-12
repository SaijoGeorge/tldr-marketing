import React, { Component } from 'react'
import PhotoSwipe from 'photoswipe'
import { injectGlobal } from 'emotion'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

injectGlobal({
  '.pswp__top-bar': {
    background: 'none !important',
  },
})

class ZoomableImg extends Component {
  static defaultProps = { showHideOpacity: true }

  initGallery = () => {
    const items = [this.props.img]
    const options = {
      history: false,
      captionEl: false,
      shareEl: false,
      counterEl: false,
      fullscreenEl: false,
      showHideOpacity: this.props.showHideOpacity,
      bgOpacity: 0.8,
      getThumbBoundsFn: () => {
        const pageYScroll =
          window.pageYOffset || document.documentElement.scrollTop
        const rect = this.thumb.getBoundingClientRect()

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

  getOpenerProps = ({ onClick = () => {}, useInnerRef = false } = {}) => ({
    [useInnerRef ? 'innerRef' : 'ref']: ref => (this.thumb = ref),
    onClick: () => {
      onClick()
      this.initGallery()
    },
  })

  render() {
    return (
      <>
        {this.props.children({ getOpenerProps: this.getOpenerProps })}

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
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ZoomableImg
