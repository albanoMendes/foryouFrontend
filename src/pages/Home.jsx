import { useState, Fragment } from 'react'; 
//import { setTimeout } from "timers/promises";
import {
	AppBar, 
	Divider, 
	Box, 
	Button, 
	Grid, 
	Tabs, 
	Toolbar,
	Typography, 
	Link, 
	Drawer, 
	IconButton, 
	Paper,
	Container, 
	Tab,
	ListItemText,
	List,
	ListItem,
	MenuItem,
	TextField,
	Collapse,
	ListItemButton,
} from '@mui/material';
import { 
	ShoppingCart,
	Person,
	Search,
	ArrowDropDown,
	LocalPhone,
	LocationOn,
	ArrowDropUp,
	Menu,
	Close,
	ExpandLess,
	ExpandMore,
} from '@mui/icons-material';
import logo from '../assets/Logo-Pratu-Big.png';
import Publicidades from '../components/Publicidades.jsx';
// Logo-Pratu-01.png

function Home(props) {

	const { primery, secudary } = props;

	const [showInfo, setShowInfo] = useState('none');

	const [showMenuUser, setShowMenuUser] = useState('none');

	const [showMyCard, setShowMyCard] = useState('none');

	const [mobileOpen, setMobileOpen] = useState(false);  

	const [inicio, setInicio] = useState(`${secudary}`);
	const [products, setProducts] = useState(`${primery}`);
	const [Negocios, setNegocios] = useState(`${primery}`);
	const [blog, setBlog] = useState(`${primery}`);
	const [sobre, setSobre] = useState(`${primery}`);
	const [contact, setContact] = useState(`${primery}`);

	const [open, setOpen] = useState(true);

	const handleClick = () => {
	    setOpen(!open);
	};

	let timeout;

	function myFunction() {
		if(showInfo == "flex")
	  		timeout = setTimeout(alertFunc, 5000);

	  	alertFunc();
	  	
	}	

	function alertFunc() {
	  setShowInfo(showInfo == "none" ? "flex":"none")

	  if(showMenuUser == "flex")
	  	setShowMenuUser("none")

	  if(showMyCard == "flex")
	  	setShowMyCard("none")

	}

	const handleDrawerToggle = () => {
	  setMobileOpen(!mobileOpen);
	}


	function myFunctionMenuUser() {
		if(showInfo == "flex")
	  		timeout = setTimeout(alertFuncMenuUser, 5000);

	  	alertFuncMenuUser();
	  	
	}	

	function alertFuncMenuUser() {
	 	setShowMenuUser(showMenuUser == "none" ? "flex":"none")

	 	if(showInfo == "flex")
	  		setShowInfo("none")

	  	if(showMyCard == "flex")
	  		setShowMyCard("none")
	}

	function myFunctionMyCard() {
		if(showInfo == "flex")
	  		timeout = setTimeout(alertFuncMyCard, 5000);

	  	alertFuncMyCard();
	  	
	}	

	function alertFuncMyCard() {
	 	setShowMyCard(showMyCard == "none" ? "flex":"none")

	 	if(showInfo == "flex")
	  		setShowInfo("none")

	  	if(showMenuUser == "flex")
	  	setShowMenuUser("none")
	}

	const drawer = (

		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'start',   }}>
			 <ul 
		      	style={{      		
		      		listSyle: 'none',
					margin: 0,
					padding: 0,
					width: '100%',
		      	}}
	      	>

	      		<li style={{marginTop: '1px'}}>
					<Link
						sx={{
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 16px',
						  	textDecoration: 'underline',
						  	textDecorationThickness: '2px',
						  	//textDecorationColor: `${secudary}`,
						  	textUnderlineOffset: '7px',
						  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
			              	fontWeight: 500,
			              	color: `${secudary}`,
			              	fontSize: '1rem',  
			              	//color: `${inicio=='' ? primery : inicio}` ,						              
			            	'&:hover': {
				              	color: `${secudary}`,
				              	fontWeight: 600,
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
			             	},
			             	'@media (max-width: 1024px)': { 
	            				//fontSize: '.9rem', 
	            				//padding: '10px 10px', 
	            			},
			            }}
					>
						Início
					</Link>
				</li>

				<li style={{}}>
					<Link
						sx={{
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 16px',
						  	textDecoration: 'none',
						  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
			              	fontWeight:500,
			              	color: `white`,
			              	fontSize: '1rem',
			              	//transition: 'width 2s',  
			              	//color: `${inicio=='' ? primery : inicio}` ,						              
			            	'&:hover': {
				              	color: `${secudary}`,
				              	fontWeight: 600,
				              	//textDecorationLine: 'overline',
						  		//textDecorationThickness: '2px',
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
			             	},
			             	'@media (max-width: 1024px)': { 
	            				//fontSize: '.9rem', 
	            				//padding: '10px 10px', 
	            			},
			            }}
					>
						Novidades
					</Link>
				</li>

				<li style={{}}>
					<Link
						onMouseEnter={handleClick}
						sx={{
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 5px',
						  	textDecoration: 'none',										  	
						  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
			              	fontWeight: 500,
			              	color: `white`,
			              	fontSize: '1.1rem',  
			              	//color: `${inicio=='' ? primery : inicio}` ,						              
			            	'&:hover': {
				              	color: `${secudary}`,
				              	fontWeight: 600,
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
			             	},
			             	'@media (max-width: 1024px)': { 
	            				//fontSize: '.9rem', 
	            				//padding: '10px 10px', 
	            			},
			            }}
					>
						<Box
							component="div"
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',


							}}
						>
							<ListItemButton >
					      	
					        <ListItemText 
					        	primary={
					        		<Typography>
										Negócios 
									</Typography>

					        	}
					        />
					        {open ? <ExpandLess /> : <ExpandMore />}
					      	</ListItemButton>
							
							
						</Box>

						<Collapse in={open} timeout="auto" unmountOnExit>
					        <List component="div" disablePadding>
					          <ListItemButton sx={{ pl: 4 }}>						            
					            <ListItemText 
						            primary={
						        		<Typography sx={{color: 'white', fontSize: 14, ml: 4}}>
											Lojas 
										</Typography>
						        	} 
					        	/>
					          </ListItemButton>
					           <ListItemButton sx={{ pl: 4 }}>						            
					            <ListItemText 
					            	primary={
						        		<Typography sx={{color: 'white', fontSize: 14, ml: 4}}>
											Farmácia 
										</Typography>
						        	} 
					            	 
					            />
					          </ListItemButton>
					           <ListItemButton sx={{ pl: 4 }}>						            
					            <ListItemText
					            	primary={
						        		<Typography sx={{color: 'white', fontSize: 14, ml: 4}}>
											Restaurantes
										</Typography>
						        	}  
					            
					            />
					          </ListItemButton>
					        </List>
				      </Collapse>
				      
					</Link>

					
				</li>

				<li style={{}}>
					<Link
						sx={{
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '20px 16px',
						  	textDecoration: 'none',
						  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
			              	fontWeight: 500,
			              	color: `white`,
			              	fontSize: '1rem',  
			              	//color: `${inicio=='' ? primery : inicio}` ,						              
			            	'&:hover': {
				              	color: `${secudary}`,
				              	fontWeight: 600,
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
			             	},
			             	'@media (max-width: 1024px)': { 
	            				//fontSize: '.9rem', 
	            				//padding: '10px 10px', 
	            			},
			            }}
					>
						Blog
					</Link>
				</li>

				<li style={{}}>
					<Link
						sx={{
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 16px',
						  	textDecoration: 'none',
						  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
			              	fontWeight: 500,
			              	color: `white`,
			              	fontSize: '1rem',  
			              	//color: `${inicio=='' ? primery : inicio}` ,						              
			            	'&:hover': {
				              	color: `${secudary}`,
				              	fontWeight: 600,
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
			             	},
			             	'@media (max-width: 1024px)': { 
	            				//fontSize: '.9rem', 
	            				//padding: '10px 10px', 
	            			},
			            }}
					>
						Sobre - nós
					</Link>
				</li>


				<li style={{}}>
					<Link
						sx={{
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 16px',
						  	textDecoration: 'none',
						  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
			              	fontWeight: 500,
			              	color: `white`,
			              	fontSize: '1rem',  
			              	//color: `${inicio=='' ? primery : inicio}` ,						              
			            	'&:hover': {
				              	color: `${secudary}`,
				              	fontWeight: 600,
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
			             	},
			             	'@media (max-width: 1024px)': { 
	            				//fontSize: '.9rem', 
	            				//padding: '10px 10px', 
	            			},
			            }}
					>
						Contate - nos
					</Link>
				</li>

	      	</ul>


		</Box>

	)

	return(
		<>
			<AppBar 
				elevation={0} 
				position="sticky" 
				sx={{ 
					bgcolor: `rgba(255, 255, 255)`,
					color:  `${primery}`,
					maxHeight: 80,
					p: 4,				
					'@media (max-width: 982px)': { 
	        			bgcolor: 'rgba(255, 255, 255)',
	        			color:  `${primery}`,
	        			p: 2,
	        		},
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>

					<Box>
						<Typography
		                  component={'div'}
		                  //sx={{ width: 45, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
		                >
		                  
		                  	<img src={logo} width={115} height={45}/>
		                </Typography>
					</Box>

					<Box
						sx={{
							display: { xs: 'none', md: 'flex' }, 
							//display: 'flex',
							//display: { xs: 'none', md: `${about == 'INÍCIO' ? 'flex' : 'none' }` },
							//alignItems: 'center',
	        				//textAlign: 'center',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<ul
								style={{
									display: 'flex',
									listStyleType: 'none',
									alignItems: 'center',
		          					textAlign: 'center',
								  	margin: 0,
								  	padding: 0,
								  	overflow: 'hidden'
								}}	
							>
								<li style={{}}>
									<Link
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '15px 15px',
										  	textDecoration: 'underline',
										  	textDecorationThickness: '2px',
										  	//textDecorationColor: `${secudary}`,
										  	textUnderlineOffset: '7px',
										  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
							              	fontWeight: 400,
							              	color: `${secudary}`,
							              	fontSize: '1.2rem',  
							              	//color: `${inicio=='' ? primery : inicio}` ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								              	fontWeight: 600,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
							             	},
							             	'@media (max-width: 1024px)': { 
					            				fontSize: '.9rem', 
					            				padding: '10px 10px', 
					            			},
							            }}
									>
										Início
									</Link>
								</li>

								<li style={{}}>
									<Link
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '15px 15px',
										  	textDecoration: 'none',
										  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
							              	fontWeight:400,
							              	color: `${primery}`,
							              	fontSize: '1.2rem',
							              	//transition: 'width 2s',  
							              	//color: `${inicio=='' ? primery : inicio}` ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								              	fontWeight: 600,
								              	//textDecorationLine: 'overline',
										  		//textDecorationThickness: '2px',
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
							             	},
							             	'@media (max-width: 1024px)': { 
					            				fontSize: '.9rem', 
					            				padding: '10px 10px', 
					            			},
							            }}
									>
										Novidades
									</Link>
								</li>

								<li style={{}}>
									<Link
										onMouseEnter={myFunction}
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '15px 15px',
										  	textDecoration: 'none',										  	
										  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
							              	fontWeight: 400,
							              	color: `${primery}`,
							              	fontSize: '1.2rem',  
							              	//color: `${inicio=='' ? primery : inicio}` ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								              	fontWeight: 600,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
							             	},
							             	'@media (max-width: 1024px)': { 
					            				fontSize: '.9rem', 
					            				padding: '10px 10px', 
					            			},
							            }}
									>
										<Box
											component="div"
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
											}}
										>
											<Typography>
												Negócios 
											</Typography>
											{ showInfo == "none" ?
												<ArrowDropUp />												
												:
												<ArrowDropDown />
											}
											
										</Box>
										
									</Link>
								</li>

								<li style={{}}>
									<Link
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '15px 15px',
										  	textDecoration: 'none',
										  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
							              	fontWeight: 400,
							              	color: `${primery}`,
							              	fontSize: '1.2rem',  
							              	//color: `${inicio=='' ? primery : inicio}` ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								              	fontWeight: 600,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
							             	},
							             	'@media (max-width: 1024px)': { 
					            				fontSize: '.9rem', 
					            				padding: '10px 10px', 
					            			},
							            }}
									>
										Blog
									</Link>
								</li>

								<li style={{}}>
									<Link
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '15px 15px',
										  	textDecoration: 'none',
										  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
							              	fontWeight: 400,
							              	color: `${primery}`,
							              	fontSize: '1.2rem',  
							              	//color: `${inicio=='' ? primery : inicio}` ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								              	fontWeight: 600,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
							             	},
							             	'@media (max-width: 1024px)': { 
					            				fontSize: '.9rem', 
					            				padding: '10px 10px', 
					            			},
							            }}
									>
										Sobre - nós
									</Link>
								</li>


								<li style={{}}>
									<Link
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '15px 15px',
										  	textDecoration: 'none',
										  	//fontFamily: 'Playwrite DE Grund, sans-serif',							              	
							              	fontWeight: 400,
							              	color: `${primery}`,
							              	fontSize: '1.2rem',  
							              	//color: `${inicio=='' ? primery : inicio}` ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								              	fontWeight: 600,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
							             	},
							             	'@media (max-width: 1024px)': { 
					            				fontSize: '.9rem', 
					            				padding: '10px 10px', 
					            			},
							            }}
									>
										Contate - nos
									</Link>
								</li>

							</ul>
						</Box>
						
					</Box>

					<Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<IconButton 
								aria-label="delete"
								sx={{
							 		'&:hover': {
							 			bgcolor: "white",						         
					             	},
							 	}}
							>
							  <Search sx={{fontSize: '27px', fontWeight: 800,}}/>
							</IconButton>
							<IconButton 
								aria-label="delete"
								onMouseEnter={myFunctionMyCard}
								sx={{
							 		'&:hover': {
							 			bgcolor: "white",						         
					             	},
							 	}}
							>
  								<ShoppingCart sx={{fontSize: '27px', fontWeight: 800,}} />
							</IconButton>
							<IconButton  
							 	//aria-label="delete"
							 	onMouseEnter={myFunctionMenuUser}
							 	sx={{
							 		'&:hover': {
							 			bgcolor: "white",						         
					             	},
							 	}}
							>
  								<Person sx={{fontSize: '27px', fontWeight: 800,}} />
							</IconButton>

							<IconButton  
							 	//aria-label="delete"

							 	//onMouseEnter={myFunctionMenuUser}
							 	sx={{
							 		display: { xs: 'flex', md: 'none' }, 
							 		'&:hover': {
							 			bgcolor: "white",						         
					             	},
							 	}}
							>
								 {mobileOpen ?
								 	<Close 
										onClick={handleDrawerToggle}
										sx={{
											//fontSize: '2rem', 
											//mr: 1,
											color: `${primery}`,
										}} 
									/>
								 	:
								 	<Menu 
										onClick={handleDrawerToggle}
										sx={{
											//fontSize: '2rem', 
											//mr: 1,
											color: `${primery}`,
										}} 
									/>

								 }
  							
							</IconButton>
						</Box>
					</Box>
						
				</Box>

				<Box
					sx={{
						display: { xs: `${showInfo}`, md: `${showInfo}`, sm:  `${showInfo}`},
			      		flexDirection: 'column',
			      		justifyContent: 'flex-start',
			      		alignItems: 'flex-start',
			      		position: 'fixed',
			      		width: 280,
			      		borderRadius: 8,
			      		//bgcolor: 'rgba(0, 0, 0, .5)',
			      		right: '50%',
			      		top: 80,
			      		p: 2,
			      		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
			      		transition: '0.3s ease-in-out',

					}}
				>
					

					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	bgcolor: `${primery}`,
					                cursor: 'pointer',
					                color: 'white',
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Lojas
							</Typography>						
							
						</Box>
					</Box>

					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	bgcolor: `${primery}`,
					                cursor: 'pointer',
					                color: 'white',
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Farmácia
							</Typography>						
							
						</Box>
					</Box>



					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	bgcolor: `${primery}`,
					                cursor: 'pointer',
					                color: 'white',
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Restaurantes
							</Typography>						
							
						</Box>
					</Box>

				</Box>
				
				<Box
					sx={{
						display: { xs: `${showMenuUser}`, md: `${showMenuUser}`, sm:  `${showMenuUser}`},
			      		flexDirection: 'column',
			      		justifyContent: 'flex-start',
			      		alignItems: 'flex-start',
			      		position: 'fixed',
			      		width: 280,
			      		borderRadius: 8,
			      		//bgcolor: 'rgba(0, 0, 0, .5)',
			      		right: '10px',
			      		top: 80,
			      		p: 2,
			      		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
			      		transition: '0.3s ease-in-out',

					}}
				>
					

					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								//display: 'flex',
								//justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	//bgcolor: `${secudary}`,
					                cursor: 'pointer',
					                color: `${secudary}`,
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Meu perfil
							</Typography>						
							
						</Box>
					</Box>

					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								//display: 'flex',
								//justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	//bgcolor: `${primery}`,
					                cursor: 'pointer',
					                color: `${secudary}`,
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Compras {0}
							</Typography>						
							
						</Box>
					</Box>



					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								//display: 'flex',
								//justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	//bgcolor: `${primery}`,
					                cursor: 'pointer',
					                color: `${secudary}`,
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Sair
							</Typography>						
							
						</Box>
					</Box>

				</Box>

				<Box
					sx={{
						display: { xs: `${showMyCard}`, md: `${showMyCard}`, sm:  `${showMyCard}`},
			      		flexDirection: 'column',
			      		justifyContent: 'flex-start',
			      		alignItems: 'flex-start',
			      		position: 'fixed',
			      		width: 280,
			      		borderRadius: 8,
			      		//bgcolor: 'rgba(0, 0, 0, .5)',
			      		right: '20px',
			      		top: 80,
			      		p: 2,
			      		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
			      		transition: '0.3s ease-in-out',

					}}
				>
					

					<Box
						sx={{
							mt: 3.5,
							
						}}
					>

						
						<Box
							sx={{
								//display: 'flex',
								//justifyContent: 'center',
								ml: 3,
								p: "5px 10px",
								width: 200,
								'&:hover': {
					              	//bgcolor: `${secudary}`,
					                cursor: 'pointer',
					                color: `${secudary}`,
					                transition: 'all 400ms',
					             },
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									//color: `${primery}`,
									fontWeight: 600,									
									//fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									
								}}
							>
								Nenhum produto encontrado no carrinho
							</Typography>						
							
						</Box>
					</Box>

					

				</Box>
				
				
			</AppBar>

			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', sm: 'flex' }, }}>
		        <Box component="nav">
		          	<Drawer 
			            variant='temporary' 
			            open={mobileOpen} 
			            onClick={handleDrawerToggle}
			            anchor="right"
			            sx={{
			              "& .MuiDrawer-paper":{
			                boxSizing: "border-box",
			                width: "240px",
			                borderRadius: 2,
			                top: 80,
			                bgcolor: 'rgba(0, 0, 0, .3)',
			              }
			            }}
			        >
		            	{drawer}
	         		</Drawer>
	       		</Box>

	      </Box>
			<Publicidades />
			<h1>Home</h1>
		</>
	)
}

export default Home;