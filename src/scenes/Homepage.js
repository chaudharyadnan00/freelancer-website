import React from 'react'
import Navbar from '../widgets/Navbar/Navbar';
import {TextImage,ImageText, OvalImage} from '../widgets/TextImage/TextImage';
import ClipWidget from '../widgets/ClipWidget/ClipWidget';
import {ButtonHeading,DoubleButtonHeading} from '../widgets/ButtonHeading/ButtonHeading';
import { CardImage, MultipleCards } from '../widgets/Card/Card';
import Footer from '../components/pageComponents/HomePage/Footer/Footer';
import StackedDiv from '../components/pageComponents/HomePage/StackedDiv/StackedDiv';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <TextImage/>
      <ClipWidget/>
      <ButtonHeading/>
      <ImageText/>
      <OvalImage/>
      <DoubleButtonHeading/>
      <MultipleCards/>
      <CardImage/>
      <StackedDiv/>
      <Footer/>
    </div>
  )
}

export default Homepage;
