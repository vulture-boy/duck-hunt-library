import './global.css'
import Header from './header';
import Footer from "./footer";
import Link from 'next/link';
export default async function Home() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-sm-12">
          <h1>welcome</h1>
          <hr/>
          <p>
            {`This site hosts a repository of information for players interested in learning more about the Super Smash Bros. Character 'Duck Hunt'. The site is very much in development; you can support our progress by contributing on the `}<Link href="https://discord.gg/JsNVqT3nWp">duck hunt discord</Link>{` or the site's GitHub repository`}.
          </p> 
        </div>
      </div>
      <Footer />
    </div>
  );
}
