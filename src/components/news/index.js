import React from 'react';
import { useState, createRef, useEffect } from 'react';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import media from '../../styles/media';
import NewsIcon from '../icons/news';
import axios from 'axios';
const { DateTime } = require("luxon");

const Oldnews = [
  {
    title: "new-5-title",
    date: "6.4.22",
    description: "new-5-desc",
    picture: "https://i.lensdump.com/i/rh3Xco.jpg",
    link: "https://www.coindesk.com/business/2022/04/06/senseinode-raises-36m-as-latams-first-blockchain-infrastructure-firm/",
    source: 'Coindesk'
  },
  {
    title: "new-4-title",
    date: "6.4.22",
    description: "new-4-desc",
    picture: "https://i1.lensdump.com/i/rh3GWC.webp",
    link: "https://www.infobae.com/economia/2022/04/06/senseinode-como-funciona-la-startup-de-infraestructura-blockchain-en-la-que-invirtieron-5-fundadores-de-unicornios/",
    source: 'Infobae',
  },
  {
    title: "new-3-title",
    date: "8.3.22",
    description: "new-3-desc",
    picture: "https://i.lensdump.com/i/rPHAse.png",
    link: "https://twitter.com/SenseiNode/status/1490717931939979267?s=20&t=ntC06_86ERaJQ9YuuVyRlQ",
    source: 'Twitter'
  },
  {
    title: "new-2-title",
    date: "9.3.22",
    description: "new-2-desc",
    picture: "https://i1.lensdump.com/i/rPHWDk.png",
    link: "https://algorand.senseinode.com/",
    source: 'SenseiNode',
  },
  {
    title: "new-1-title",
    date: "12.3.22",
    description: "new-1-desc",
    picture: "https://i2.lensdump.com/i/rnjtr7.png",
    link: "https://www.infobae.com/america/tecno/2021/12/07/el-mundo-de-los-nfts-la-tecnologia-que-transforma-industrias-como-el-arte-y-los-videojuegos-pero-con-riesgos/",
    source: 'Infobae Americas',
  }
];


const NewBox = ({title, date, description, picture, link, source}) => {
  let { locale } = useParams();
  locale = locale || 'us';

  return(
    <a className="new-container" target="_blank" href={link}>
      <h3>{title}</h3>
      <span className="date">{date}</span>
      <p className="title"> {description} </p>
      <div className="new-img" style={{backgroundImage: `url(${picture})`}}></div>
      <div className="link-icon">
        <div className="icon-container">
          <NewsIcon />
          <span >{source}</span>
        </div>
      </div>
    </a>
  );
}

const News = () => {
  let { locale } = useParams();
  locale = locale || 'us';
  const [ news, setNews ]  = useState(false);
  const [ isDragging, setIsDragging ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  const [ position, setPosition ] = useState({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  const Styles = css`
    z-index: 1;
    position: relative;
    width: 100vw;
    overflow: hidden;

    .container {
      flex-direction: column;
      align-items: flex-start;
    }
    p {
      margin-top: 20px;
    }
    h2 {
      color: #fff;
      font-weight: 300;
      text-align: left;
      padding-bottom: 40px;
    }
    .tag {
      background: #000;
      color: #fff;
      border-radius: 60px;
      padding: 5px 20px;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 60px;
    }
    .slider-container {
      width: 100vw;
      overflow:scroll;
      padding-left: calc((100vw - 1200px) / 2 );
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      cursor: ${ isDragging ? 'grab' : 'pointer' };
    }

    .news-container {
      max-width: 1000vw;
      width: auto;
      z-index:3;
      padding-top: 40px;
      float: left;
      display: flex;
      .new-container {
        width: 400px;
        position:relative;
        background: #14302B;
        border-radius: 15px;
        margin-right: 20px;
        padding:25px;

        .date {
          color: #B0EFA8;
        }

        p {
          color:white;
          font-size: 1.3rem;
          line-height: 2rem;
          font-weight:100;
          margin-bottom: 160px;
        }

        h3 {
          font-size: 1.6rem;
          font-weight: 300;
          padding-top:0;
          color: #fff;
        }
        .link-icon .icon-container  {
          display: flex;
          flex-direction: row;
          position: absolute;
          bottom: 20px;
          left: 20px;
          justify-content:center;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
          }
          span {
            color: #C8C8C8;
            font-weight: 100;
            margin-left: 10px;
          }
        }
        span {
          font-size: 1.5rem;
          font-weight: 100;
          color: #34C55D;
          width: 100%;
          display: block;
        }
        .new-img {
          margin-top: 30px;
          border-radius: 30px;
          float:right;
          margin-bottom:40px;
          width: 125px;
          height: 125px;
          position:absolute;
          bottom:20px;
          right:30px;
          background-size:cover;
          background-repeat:no-repeat;
          background-position:center;
        }
      }
    }

    ${media.medium} {
      .container {padding:20px;}
      .slider-container {
        padding-left: 20px;
        .new-container {
          max-width: 80vw;
        }
      }
      h2 { font-size: 3rem; line-height: 3.5rem; padding-right: 20px;}
    }
  `;
  
  const myRef = createRef();

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - position.x;
      const dy = e.clientY - position.y;

      // Scroll the element
      myRef.current.scrollTop = position.top - dy;
      myRef.current.scrollLeft = position.left - dx;
    }
  }

  const handleMouseDown = (e) => {
    setPosition({
      left: myRef.current.scrollLeft,
      top: myRef.current.scrollTop,
      x: e.clientX,
      y: e.clientY,
    })
    setIsDragging(true);
  }

  const handleMouseUp = (e) => {
    setIsDragging(false);
  }

  useEffect( () => {
    if (!isFetching) {
      setIsFetching(true);
      let lang;
      if(!locale || locale == 'us'){
        lang = 'en';
      } else {
        lang = locale
      }
    	axios
			.get(`https://us-central1-senseiweb-d1c41.cloudfunctions.net/api/news/${lang}`)
			.then((response) => {
        const news = response.data
        news.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return DateTime.fromFormat(a.date, 'd.m.yy').diff(DateTime.fromFormat(b.date, 'd.m.yy')).milliseconds
        });
				setNews(news);
			})
			.catch((err) => {
				console.log(err);
			});
    }

  }, []);

  return (
    <div id="news" css={[Styles]}>
      <div className="container">
        <span className="tag" dangerouslySetInnerHTML={i18n(locale, 'news-subtitle')} />
        <h2 dangerouslySetInnerHTML={i18n(locale, 'news-title')} />
      </div>

      <div className="slider-container"
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp} 
        onMouseMove={handleMouseMove}
        ref={myRef}>
        <div className="news-container">
          {news && news.map((newdata, index) => <NewBox key={index} {...newdata} />) }
        </div>
      </div>
    </div>
  );
}

export default News;

