import { HeaderLayout } from "../templates/HeaderLayout"
import { HStack, StackDivider, VStack, Text, Box} from "@chakra-ui/react"
import { ProfileImage } from "../organisms/about/ProfileImage"
import styled from "styled-components"
import { ProfileText } from "../organisms/about/ProfileText"
import imagePath1 from '../organisms/about/img/flowerme.jpg'
import imagePath2 from '../organisms/about/img/ab.png'
import imagePath3 from '../organisms/home/img/some.png'


export const About = () => {

    return(
        <HeaderLayout>
            <Sdiv>
            <div>
            <Sp font-family= "RubikPuddles-Regular">About Me</Sp>
            
            <VStack padding={50}spacing={50} align="flex-start">
                
                <HStack spacing="150px" margin='auto'>
                    <ProfileImage imagePath={imagePath1}></ProfileImage>
                    <Ssp>
                    <Text 

                    content1='🌳 花と木をアレンジする道から
                    オンライン森をアレンジするITエンジニアxデザイナーの道へ🏃🏻‍♀️
                    '
                    content2='今までは特別な人のために花を
                    アレンジして、特別な場所のために空間をアレンジする
                    フラワーデザイナーとして
                    キャリアを積んできましたが、
                    今後は領域を広げてインターネットスペースをアレンジして
                    すべてのユーザーにより快適なサービスを提供したいです。'
                    >
                    </Text>
                    </Ssp>
                </HStack>
                </VStack>
                </div>
            
            <div>
                <Sp>About Portfolio</Sp>
                    <VStack padding={50}spacing={50} align="flex-start">
                        <HStack spacing="150px" margin='auto' >
                            <ProfileImage imagePath={imagePath2}></ProfileImage>
                            <Ssp>
                            <ProfileText
                            
                            content1='🎨 デザインとレイアウト : Figmaでワイヤープレイムを制作'
                            
                            
                            content2='💻 実装される機能 : atomic designで全体的なレイアウト構成をし、デザインは
                            React,Chakra UI , component libraryを使用'
                             
                             content3='⭐︎ mainpage ⭐︎ 1. スライドショー機能(swiper)
                             2. 天気API(openWeather) 3.Chakra UI

                             ⭐︎ aboutpage ⭐︎  アニメーション(reveal),Chakra UI
                            
                             ⭐︎ projectpage ⭐︎  アニメーション(reveal),Chakra UI'>
                            

                            </ProfileText>
                            </Ssp>
                        </HStack>
                        </VStack>
                    </div>
                <div>
                <Sp>About Project</Sp>

                <VStack padding={50}spacing={50} align="flex-start">
                <HStack spacing="150px" margin='auto'>
                    <ProfileImage imagePath={imagePath3}></ProfileImage>
                    <Ssp>
                 <>
                    <ProfileText
                
                    
                    content1='🌸 Flowermarket EcSiteを選択した理由 :
                    <br />
                    私がよく知っている分野である花、植物をアイテムに選定'

                    content2='🎨 デザインとレイアウト:

                    他社のフラワーecsiteを見るとユーザーの立場から必ず必要な情報が目に入らないので
                    
                    目に疲れを与えることが多いですが、このサイトは中核となる情報をユーザーが見やすく、
                    
                    利用しやすくデザイン'

                    content3='💻 実装される機能 = javascriptを利用したカートに物を入れる(数量カウント機能)→
                    カートページに移動→商品削除機能

                    ☄️以外の機能はデザインを中心に製作'></ProfileText>
                </>
                    </Ssp>
            </HStack>
            </VStack>
                    </div>
            
            </Sdiv>

            

        </HeaderLayout>
    )
}

const Sdiv = styled.div`
    background-color: #F9DADA;
    width:full;
    padding-bottom:100px;
    line-height: 50px;

`
const Sp =styled.p`
    padding-left: 40px;
    padding-top: 30px;
    font-family: "Permanent Marker";
    font-size: 30px;
    `


const Ssp =styled.p`
    font-family: "Yusei Magic";
    font-size: 22px;
    weight: 400;
   
`
