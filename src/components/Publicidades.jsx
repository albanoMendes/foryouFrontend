//Publicidades.jsx
import { useCallback, useEffect, useRef, useState } from "react";
//import { makeStyles } from "@mui/styles";
import { Button, Typography, Box} from "@mui/material";
import classes from "./Publicidades.module.css";
//import Model from './Model';
//import SignInOutContainer from '../components/login/SignInOutContainer';
//import Publish from './Publish';


const rows = [
	{
		id: 1,
		empresa: 'SEGMENT LTD',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'Controle de fluxo de caixa, folhas de salários, cadastros de Funcionários ...',
		image: 'web_image_two.png',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'LUIZA LDA',
		segment: 'SERVIÇO',
		capital: 150000,
		credito: 100000,
		lucro: 20,
		descricao: 'Controle de Entradas estoque, cardapio, folhas de salários, cadastros de Funconários ...',
		image: 'web_image_one.png',
		more: 'saber mais'
	},
	
];

function Publicidades() {
	//const classes = useStyles();
	const [slides, setSlides] = useState(rows);
	const [currentSlide, setCurrentSlide] = useState(0);
  	const slideLength = slides.length;

  	const autoScroll = true;
  	let slideInterval;
  	let intervalTime = 5000;

  	const nextSlide = () => {
    	setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    	//console.log("next");
  	};

  	const prevSlide = () => {
    	setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    	//console.log("prev");
  	};

  	function auto() {
  	  slideInterval = setInterval(nextSlide, intervalTime);
  	}
  	/*
  	useEffect(() => {
    	setCurrentSlide(0);
    	fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
           setSlides(responseJson)
        })  

  	}, []);
	

  	useEffect(() => {
    	if (autoScroll) {
      		auto();
    	}
    	return () => clearInterval(slideInterval);
  	}, [currentSlide]);
	*/

	return (
		<>
			{slides.length == 0? 
                <Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
                :
				<div className={classes.slider}>

					<a className={classes.prev} onClick={prevSlide}>&#10094;</a>
					<a className={classes.next} onClick={nextSlide}>&#10095;</a>
					
					{slides.map((slide, index) => {
						return (
							<div  key={index} className={index === currentSlide ?
								`${classes.myslider} ${classes.current}` : `${classes.myslider}`} >
								{index === currentSlide && (
									<>
										
											<img src={new URL(`../assets/promo/${slide.image}`, import.meta.url)}  alt="Slide"/>
											
									</>
									
								)}								
							</div>
						)
	                })

					}
					
				</div>
	
			}
			
		</>
	)
}

export default Publicidades;