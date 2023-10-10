import React from 'react'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['nav']}>
        <div className={styles['divcontainer']}>
          <div className={styles['link']}>
            <div className={styles['div']}>
              <img  alt="Logopng1630" className={styles['logopng']} />
            </div>
          </div>
          <div className={styles['divhidden']}>
            <div className={styles['link1']}>
              <img
                src="/svgmargin1633-b4ur.svg"
                alt="SVGmargin1633"
                className={styles['sv-gmargin']}
              />
              <div className={styles['psub-partner-semi-bold']}>
                <span className={styles['text']}>
                  <span>Home</span>
                </span>
              </div>
            </div>
            <div className={styles['linkmargin']}>
              <div className={styles['link2']}>
                <img
                  src="/svgmargin1641-ny2i.svg"
                  alt="SVGmargin1641"
                  className={styles['sv-gmargin1']}
                />
                <div className={styles['psub-partner-semi-bold1']}>
                  <span className={styles['text02']}>
                    <span>Trade</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['linkmargin1']}>
              <div className={styles['link3']}>
                <img
                  src="/svgmargin1649-ynyi.svg"
                  alt="SVGmargin1649"
                  className={styles['sv-gmargin2']}
                />
                <div className={styles['psub-partner-semi-bold2']}>
                  <span className={styles['text04']}>
                    <span>News</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['linkmargin2']}>
              <div className={styles['link4']}>
                <img
                  src="/svg1657-hchi.svg"
                  alt="SVG1657"
                  className={styles['svg']}
                />
                <div className={styles['psub-partner-semi-boldmargin']}>
                  <span className={styles['text06']}>
                    <span>Blog</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['linkmargin3']}>
              <div className={styles['link5']}>
                <div className={styles['div1']}>
                  <img
                    
                    alt="academynavbariconpng1664"
                    className={styles['academynavbariconpng']}
                  />
                </div>
                <div className={styles['psub-partner-semi-bold3']}>
                  <span className={styles['text08']}>
                    <span>Academy</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['link6']}>
              <button className={styles['button']}>
                <div className={styles['div2']}>
                  <img
                    
                    alt="searchiconpng1670"
                    className={styles['searchiconpng']}
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles['divhidden1']}>
            <div className={styles['link7']}>
              <div className={styles['div3']}>
                <img
                  
                  alt="barcodeiconpng1674"
                  className={styles['barcodeiconpng']}
                />
              </div>
              <div className={styles['pfontbold']}>
                <span className={styles['text10']}>
                  <span>Download app</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
