import React from 'react';
import Nbar from "../../Components/Navbar";
import PhotoGallery from "../../Components/Photo Gallery";
import IconsEmbassies from "../../Components/Icons Embassies";
import Whoareyou from "../../Components/who are you";
import Massege from "../../Components/massege";
import '../app/App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPlus, faEdit} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faPlus);

function Home() {
    return (
        <div>
            <PhotoGallery/>
            <IconsEmbassies/>
            <Whoareyou/>
            <Massege/>

        </div>
    );
}


export default Home;
