import {Box,Image} from "@chakra-ui/react"
import {Fade} from "react-reveal"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import bgrimage1 from "../home/img/some.png";
import bgrimage2 from "../home/img/wireframe.png";
import bgrimage3 from "../about/img/figma.png";




export const SlideCard = () => {
    return(
        <Sdiv>
        <Fade duration={3000}>


                <Swiper spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true} modules={[Autoplay, Pagination, Navigation]} 
                    className="mySwiper">

                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                            <a href="https://willow0808.github.io/flower_web/html/index.html" target="_blank"><Simg src={bgrimage1} alt="flower-ecsite"/></a>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                           <a href="https://www.figma.com/file/ghBdI6RiYekeX7KogXgBUt/flower-ec?node-id=0%3A1&t=Nkh4DI2dX4sJ3Vm1-0" target="_blank"><Simg src={bgrimage2} alt="ecsite_wireframe"/></a>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                            <a href="https://www.figma.com/file/ie0pgkl2v19yt2a3XmN6fu/Portfolio?node-id=13%3A10&t=CBqOAEvnMA9AuGjb-0"target="_blank"><Simg src={bgrimage3} alt="ecsite_wireframe"/></a>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                        </Box>
                    </SwiperSlide>
                </Swiper>
              
        </Fade>
        </Sdiv>
    )
}

const Sdiv = styled.div`
    position: relative;
    width: 100%;
    padding: 0px;
    margin: 0px auto;
    left: 0%;
`

const Simg = styled.img`
    height: 100%;
    margin: auto;
`