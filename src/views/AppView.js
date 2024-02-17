

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Gallery from "../components/gallery/Gallery";
import Booster from "../components/booster/BOOOSTER";
import BaseSetBooster from "../components/booster/BaseSetBooster";
import { Collection } from "../components/collection/collection";
import { Register } from "../auth/Register";
import { Login } from "../auth/Login";
import { Authorized } from "./Authorized";
import "./View.css"
import JungleSetBooster from "../components/booster/JungleSetBooster";
import FossilSetBooster from "../components/booster/FossilSetBooster";
import RocketSetBooster from "../components/booster/RocketSetBooster";
import BaseSet2Booster from "../components/booster/BaseSet2Booster";


<div className='Dashboard'>
	<header className='App-header'>
		<h1>Welcome to App</h1>
	</header>
</div>;

export const ApplicationViews = () => {
	const localAppUser = localStorage.getItem("activeUser");
	const appUserObject = JSON.parse(localAppUser);

	if (appUserObject) {
		return (
			<>
			<div className="App">


		 
			<Routes>

       

			  <Route path='/login' element={<Login />} />
		      <Route path='/register' element={<Register />} />

				<Route path="*" element={  
			      <Outlet />
			
				}/>
						<Route path='/Gallery' element={<Gallery />} />
						<Route path='/Booster' element={<Booster />} />
						<Route path='/Booster/BaseSet' element={<BaseSetBooster />} />
						<Route path='/Booster/JungleSet' element={<JungleSetBooster />} />
						<Route path='/Booster/FossilSet' element={<FossilSetBooster />} />
						<Route path='/Booster/BaseSet2' element={<BaseSet2Booster />} />
						<Route path='/Booster/RocketSet' element={<RocketSetBooster />} />
						<Route path='/Collection' element={<Collection />} />  
						   <Route path="/" element={
                <>
                    <h1 className="FrontTitle">POCKET MONSTERS PACK SIMULATOR</h1>
	<h2> COLLECT 441 UNIQUE CARDS </h2>
                    <div className="mainImage">
						<img src={"https://krisnextgen.files.wordpress.com/2017/07/charizard.png?w=670"} />
					</div>

                  
                </>
            }/>
  				
				
				
				

		  
		
		
			</Routes>
			

			</div>
		</> 
			
		);
	}
};