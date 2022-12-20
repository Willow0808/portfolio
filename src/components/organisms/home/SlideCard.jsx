import {Box,Image} from "@chakra-ui/react"
import {Fade} from "react-reveal"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components"
import someimage from "./some.png"



export const SlideCard = () => {
    return(
        <Sdiv>
        <Fade duration={3000}>
            <Box marginBottom={0} color="white"
            bg="white" borderRadius="0px" 
            textAlign="center" p={0} border="0px" alignItems="center">

                <Swiper spaceBetween={0} color="#000000"
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 25000000000000000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true} modules={[Autoplay, Pagination, Navigation]} 
                    className="mySwiper">

                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                            <a href="http://shincode.info/2021/08/17/cant-display-image-with-react/" target="_blank"><Simg src={someimage} alt="flower-ecsite"/></a>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h="65vh" backgroundColor="#FFFFFF" color="black" 
                        border="2px" borderRadius="3px" alignItems="center">
                        </Box>
                    </SwiperSlide>
                </Swiper>
              
            </Box>
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