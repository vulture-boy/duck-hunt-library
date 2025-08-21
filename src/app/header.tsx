import './global.css'
import "./styles/sidebars.css";
import Script from 'next/script'
import Menubar from "./menubar";
import Image from "next/image";

export default function Header() { 
    return (
        <>
        <Script 
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
            crossOrigin="anonymous" 
        />
              <div className="row">

        <div className="col-sm-3">
          <Menubar />
        </div>

        <div className="col-sm-3">
          
        </div>

        <div className="col-sm-6">
          <hr/>
            <Image 
              src="/duckhunt-sand.png" 
              width={256}
              height={256}
              alt="A picture of Duck Hunt, a Smash Bros character"
            />
          <hr/>
        </div>
      </div>
        </>
    );
}