'use client'
import { getTickers } from '@/app/lib/getTickers'
import Link from 'next/link'
import React, { useEffect } from 'react'

interface Ticker {
  id: number
  title: string
  url: string
  created_at: string
}

const Topbar = () => {
  const [tickers, setTickers] = React.useState<Ticker[]>([])

  const getAllTickers = async () => {
    const res = await getTickers()
    setTickers(res.data)
  }

  useEffect(() => {
    getAllTickers()
  }, [])

  return (
    <div className="top-bar py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="ticker-container">
          <div className="ticker-content">
            {tickers?.length > 0 ? (
              tickers?.map((ticker) => (
                <div key={ticker.id} className="ticker-item">
                  <Link
                    href={ticker.url}
                    className="text-white text-decoration-none"
                  >
                    {ticker.title}
                  </Link>
                </div>
              ))
            ) : (
              <p className="m-0 text-white">No tickers available</p>
            )}
          </div>
        </div>

        <div className="d-none d-lg-flex align-items-center contact-info hidden lg:flex">
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+92518449100">+92 (051) 8449100</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@qih.com.pk">info@qih.com.pk</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .top-bar {
          background-color: #343a40; /* Dark background */
          color: white;
        }

        /* Ticker Styling */
        .ticker-container {
          width: 70%;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-content {
          display: flex;
          min-width: 100%;
          animation: tickerScroll 30s linear infinite;
        }
        .ticker-item {
          display: inline-block;
          padding-right: 20px;
        }

        /* Contact Section Styling */
        .contact-info {
          gap: 20px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .contact-item i {
          color: #ffc107;
        }
        .contact-item a {
          color: white;
          text-decoration: none;
        }

        /* Ticker Animation */
        @keyframes tickerScroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

export default Topbar
