import Image from 'next/image'
import Link from 'next/link';
import {links, priceTables, services, testimonials} from '../lib/constants';
import React from 'react';
import PriceTable from '../components/common/PriceTable';
import Snippet from '../components/common/Snippet';
import Testimonial from '../components/common/Testimonial';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SectionHeading from '../components/common/SectionHeading';
import Head from 'next/head';
import {getPublicBrand} from '../lib/utils';

export default function Home() {
  return (
      <DefaultLayout mainClass="p-6 md:p-10 mt-10 pb-0" footerClass="mx-10">
          <Head>
              <title>{`Home - ${getPublicBrand()}`}</title>
          </Head>
          <section className="relative bottom-5 flex py-[76px] bg-primary-400 bg-opacity-50 items-start">
              <div className="z-3 absolute bottom-6 right-6  min-h-full w-full bg-primary-500"></div>
              <Image src="/images/home-bg.jpg" alt="Learn more call to action" layout="fill" objectFit="cover" />
              <div className="min-h-full top-0 bg-primary-400 bg-opacity-50 absolute w-full" ></div>
              <div className=" z-2 px-10 top-2 w-full relative drop-shadow-md">
                {/*
                  <h1 className="text-2xl md:text-4xl text-white font-semibold">Amazing Websites With Next.Js</h1>
                  <div className="text-white text-xl my-2">&lt;<span className="text-secondary-100">code</span>&gt;
                      <Link href="/" passHref={true}>
                          <a className="text-white hover:text-secondary-100">Check out my best work now by clicking right here...</a>
                      </Link>
                       &lt;/<span className="text-secondary-100">code</span>&gt;</div>
  */}

              </div>
          </section>

          <section className="flex flex-col md:flex-col justify-center items-start md:justify-between flex-wrap">
              <div className="flex justify-center items-center">
                  <span className="text-secondary-100 font-bold text-2xl">7</span>
                  <span className="text-white ml-4">Completed Projects</span>
              </div>
              {/*<SectionHeading>Short Bio</SectionHeading>*/}
              <div className="prose prose-invert max-w-full m-0 prose-li:marker:text-secondary-100 prose-a:text-secondary-100 prose-a:no-underline hover:prose-a:text-secondary-50 prose-a:transition-colors prose-a:duration-300  prose-blockquote:border-l-secondary-100 text-white opacity-70 bg-primary-400 p-5 mt-5">
                  <p><i>Hello and welcome to my professional space!</i>  I'm Remneet Brar, a dedicated Geospatial Analyst currently advancing my Master's in Spatial Analysis at Toronto Metropolitan University. </p>
                  
                  <h2>Qualifications</h2>

                  <ul>
                    <li>Masters of Spatial Analysis Canadidate at Toronto Metropolitan University (September 2023 to Present)</li>
                    <li>Geospatial Analyst Intern at Northcrest Developments (January 2024 to Present)</li>
                    <li>Geospatial Analyst Intern at The Toronto Fire Services (September 2023 to Present) </li>
                    <li>Proficient in ArcGIS Pro, QGIS, Python, R, SQL, FME, SNAP, ERDAS Imagine, Excel</li>

                  </ul>


                  <p>Thank you for visiting my site. I'm eager to connect with like-minded professionals and enthusiasts who are driven to harness the power of GIS and remote sensing for a better future.</p>

              </div>
              






              {/*<div className="flex justify-center items-center">
                  <span className="text-secondary-100 font-bold text-2xl">45</span>
                  <span className="text-white ml-4">Happy Customers</span>
              </div>
              <div className="flex justify-center items-center">
                  <span className="text-secondary-100 font-bold text-2xl">07</span>
                  <span className="text-white ml-4">Awards</span>
              </div>
              <div className="flex justify-center items-center">
                  <span className="text-secondary-100 font-bold text-2xl">12+</span>
                  <span className="text-white ml-4">Years Of Experience</span>
  </div>*/}
          </section>

          {/*<section>
              <SectionHeading>My Services</SectionHeading>
              <div className="flex flex-col md:flex-row flex-wrap justify-between">
                  {services.map(service => <Snippet key={service.title} {...service}  />)}
              </div>
          </section>

          <section>
              <SectionHeading>Price Plans</SectionHeading>
              <div className="flex flex-col sm:flex-row flex-wrap justify-between">
                  {priceTables.map(table => <PriceTable key={table.title} {...table} />)}
              </div>
          </section>

          <section>
              <SectionHeading className="mt-10">Recommendations</SectionHeading>
              <Swiper
                  modules={[Pagination, A11y]}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  speed={1500}
                  breakpoints= {{
                      300: {
                          slidesPerView: 1,
                        },
                      600: {
                          slidesPerView: 2,
                      },
                  }}
              >
                  {testimonials.map(testimonial =>
                      <SwiperSlide key={testimonial.name}>
                          <div className="py-[23px]"><Testimonial {...testimonial}  /></div>
                      </SwiperSlide>
                  )}
              </Swiper>
                </section>*/}

          <section className="flex justify-between mt-10">
              <Image src="/images/python-logo.png" width={100} height={100} className="opacity-50 hover:opacity-100 transition-opacity" />
              <Image src="/images/QGIS-logo.png" width={250} height={100} className="opacity-50 hover:opacity-100 transition-opacity" />
              <Image src="/images/snap-logo.jpg" width={100} height={100} className="opacity-50 hover:opacity-100 transition-opacity" />
              <Image src="/images/sql-logo.png" width={100} height={100} className="opacity-50 hover:opacity-100 transition-opacity" />
              <Image src="/images/FME-logo.png" width={175} height={100} className="opacity-50 hover:opacity-100 transition-opacity" />
            </section>
      </DefaultLayout>
  )
}
