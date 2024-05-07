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
import ProgressBar from '../components/charts/ProgressBar';
import SkillBar from '../components/charts/SkillBar';
import ProgressCircle from '../components/charts/ProgressCircle';
import SkillCircle from '../components/charts/SkillCircle';
import {formatDate, getCategorySlug, getPublicBrand} from '../lib/utils';
import DefaultLink from '../components/navs/Link';
import Head from 'next/head';

export default function About() {
  return (
      <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
          <Head>
              <title>{`About - ${getPublicBrand()}`}</title>
          </Head>
          <article>
              <div className="flex justify-between items-center">
                  <SectionHeading as='h1' className="text-3xl mt-5 mb-5 w-[80%]">Let Me Introduce Myself</SectionHeading>
              </div>
              <div className="relative h-[35vh]  md:h-[70vh]">
                  <Image src="/images/mohamed-nohassi-odxB5oIG_iA-unsplash.png" alt="Cool sunset at the beach" layout="fill" objectFit="cover" />
              </div>

              <SectionHeading>Short Bio</SectionHeading>
              <div className="prose prose-invert max-w-full m-0 prose-li:marker:text-secondary-100 prose-a:text-secondary-100 prose-a:no-underline hover:prose-a:text-secondary-50 prose-a:transition-colors prose-a:duration-300  prose-blockquote:border-l-secondary-100 text-white opacity-70 bg-primary-400 p-5 mt-5">
                  <p><i>Hello and welcome to my professional space!</i>  I'm Remneet Brar, a dedicated Geospatial Analyst currently advancing my Master's in Spatial Analysis at Toronto Metropolitan University, specializing in remote sensing and environmental science. My journey into the captivating world of GIS and remote sensing began in my fourth year of undergraduate studies at the University of Toronto, where courses in Remote Sensing, Machine Learning, and Spatial Data Science opened my eyes to the immense potential of spatial data to address complex environmental and societal challenges.. </p>

                  <p>This revelation steered my academic and professional path towards leveraging GIS and remote sensing to innovate and solve problems. In roles at Northcrest Developments and Toronto Fire Services, I have utilized my skills to impact various projects ranging from urban planning and wildlife conservation to optimizing emergency response systems. My work often involves employing advanced tools such as ArcGIS Pro, Python, and SNAP, to analyze spatial data and generate actionable insights that facilitate strategic decision-making and enhance community welfare.</p>

                  <p>A standout project in my portfolio is the comprehensive analysis of land subsidence and vegetation changes in the Po Valley using Differential Interferometric Synthetic Aperture Radar (DInSAR) techniques, demonstrating the critical role of remote sensing in natural resource management.</p>

                  <p>Thank you for visiting my site. I'm eager to connect with like-minded professionals and enthusiasts who are driven to harness the power of GIS and remote sensing for a better future.</p>

                
                  {/*<ul>
                      <li>Quid, cum fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate legimus?</li>
                      <li>Paulum, cum regem Persem captum adduceret, eodem flumine invectio?</li>
                      <li>Quae cum dixisset paulumque institisset, Quid est?</li>
                  </ul>
                  <p><b>Primum Theophrasti, Strato, physicum se voluit;</b> Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. <i>Quae autem natura suae primae institutionis oblita est?</i> Quae sequuntur igitur? Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Que Manilium, ab iisque M. Haec para/doca illi, nos admirabilia dicamus. Estne, quaeso, inquam, sitienti in bibendo voluptas? </p>

                  <blockquote cite="http://loripsum.net">
                      Negat esse eam, inquit, propter se expetendam.
                  </blockquote>

                  <p>Quid turpius quam sapientis vitam ex insipientium sermone pendere? Inquit, dasne adolescenti veniam? Quid, quod homines infima fortuna, nulla spe rerum gerendarum, opifices denique delectantur historia? <b>Nunc haec primum fortasse audientis servire debemus.</b> Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur. Bonum incolumis acies: misera caecitas. Non est enim vitium in oratione solum, sed etiam in moribus. </p>
                */}
              </div>
              <div className="bg-primary-400 p-5 text-white" />
          </article>
          {/*<div className="flex flex-col lg:flex-row">
              <div className="basis-1/2">
                  <SectionHeading>Coding Skills</SectionHeading>
                  <div className="text-white shadow-lg bg-primary-400 p-5 py-8">
                      <SkillBar progress={91} label="TypeScript:" />
                      <SkillBar progress={95} label="JavaScript:" className="my-5" />
                      <SkillBar progress={88} label="CSS" />
                      <SkillBar progress={89} label="HTML" className="my-5" />
                      <SkillBar progress={78} label="SQL" />
                  </div>
              </div>
              <div className="basis-1/2 ml-2">
                  <SectionHeading>Technologies</SectionHeading>
                  <div className="text-white shadow-lg bg-primary-400 p-5 py-8 flex flex-wrap justify-between">
                      <SkillCircle progress={91} label="Next.Js" className="basis-1/2 lg:basis-1/4 mb-5 xl:mb-0" />
                      <SkillCircle progress={85} label="Node.Js" className="basis-1/2 lg:basis-1/4" />
                      <SkillCircle progress={81} label="Express.Js" className="basis-1/2 lg:basis-1/4" />
                      <SkillCircle progress={91} label="React.Js" className="basis-1/2 lg:basis-1/4" />
                  </div>
                  <div className="mt-2 text-white shadow-lg bg-primary-400 p-5 py-9 flex flex-wrap  justify-between">
                      <SkillCircle progress={95} label="Bootstrap 5" className="basis-1/2 lg:basis-1/4 mb-5 xl:mb-0" />
                      <SkillCircle progress={89} label="Tailwind CSS" className="basis-1/2 lg:basis-1/4" />
                      <SkillCircle progress={81} label="Mongo DB" className="basis-1/2 lg:basis-1/4" />
                      <SkillCircle progress={91} label="MySQL" className="basis-1/2 lg:basis-1/4" />
                  </div>
              </div>
            </div>
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
          </section>
                */}
      </DefaultLayout>
  )
}
