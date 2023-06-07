"use client";

import "./style.css";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const newsList = [
  {
    content: "Evil forces look for a chance to regenerate and prepare",
    image: require("../../assets/img/pages/news/news1.jpg"),
    date: "May 30",
  },
  {
    content:
      "The war between evil and good begins, and the forces of evil temporarily prevail",
    image: require("../../assets/img/pages/news/news2.jpg"),
    date: "May 26",
  },
  {
    content:
      "Pegasus, the god of good, calls upon the gods as he prepares to fight evil.",
    image: require("../../assets/img/pages/news/news3.jpg"),
    date: "May 28",
  },
  {
    content: "The final battle between good and evil takes place on Olympus.",
    image: require("../../assets/img/pages/news/news4.jpg"),
    date: "May 29",
  },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* start home section */}
      <section className="home-section">
        <div>
          <div className="home-title"></div>
          <p className="home-description pt-5 font-semibold text-center text-white">
            Omni Kingdoms is a cross chain MMORPG. Ideally the game will be a
            free, play to game. Users can customize their characters by changing
            their unique name, equipping items and switching between skins. They
            can also earn in game resources by questing, as well as boosting
            their stats via training.
          </p>

          <div className="flex justify-center mt-[80px]">
            <Button type="primary">play now</Button>
          </div>
        </div>
      </section>
      {/* end home section */}

      {/* start overview section */}
      <section className="overview-section">
        <div className="home-divider-top"></div>
        <div className="overview-container grid grid-cols-2">
          <div className="flex mr-5">
            <div className="m-auto">
              <h1 className="home-maintitle">About Omni Kingdom</h1>
              <p className="overview-description pt-5">
                Omni Kingdoms is a cross chain MMORPG. Ideally the game will be
                a free, play to game. Users can customize their characters by
                changing their unique name, equipping items and switching
                between skins. They can also earn in game resources by questing,
                as well as boosting their stats via training.
              </p>
            </div>
          </div>
          <div>
            <div className="overview-image"></div>
          </div>
        </div>
        <div className="home-divider-bottom"></div>
      </section>
      {/* end overview section */}

      {/* start story section */}
      <section className="story-container">
        <div className="story-section">
          <h5 className="home-subtitle text-center">Story</h5>
          <h1 className="home-maintitle text-center mt-2">
            Lengendary sword of Olympus
          </h1>
          <p className="overview-description text-center pt-5">
            As an Orc horde invades the planet Azeroth using a magic portal, a
            few human heroes and dissenting Orcs must attempt to stop the true
            evil behind this war
          </p>
        </div>
        <div></div>
      </section>
      {/* end story section */}
      <div className="home-stone-divider-bottom"></div>

      {/* start hero section */}
      <section className="hero-section">
        <video className="object-cover h-full" autoPlay muted loop playsInline>
          <source src="./video/hero3.webm" type="video/webm" />
          <source src="./video/hero3.mp4" type="video/mp4" />
          Sorry, your browser doesnt support embedded videos.
        </video>
      </section>
      {/* end hero section */}
      <div className="home-stone-divider-top"></div>

      {/* start map section */}
      <div className="map-section">
        <h1 className="home-subtitle text-center">Maps</h1>
      </div>
      {/* end map section */}

      {/* start news section */}
      <section className="news-section">
        <div className="home-divider-top"></div>

        <div className="overview-container">
          <h5 className="home-subtitle pt-8 text-center">News</h5>
          <h1 className="home-maintitle text-center mt-1 m-auto w-3/6">
            DEVELOPMENTS IN SANCTUARY
          </h1>
          <div className="grid grid-cols-4 w-11/12 m-auto mt-10">
            {newsList.map((item) => (
              <Card type="default" key={item.content}>
                {item}
              </Card>
            ))}
          </div>
          <div className="flex justify-center pt-10">
            <Button type="default">View All</Button>
          </div>
        </div>

        <div className="home-divider-bottom"></div>
      </section>
      {/* end news section */}

      {/* start battle section */}
      <section className="battle-container flex items-end">
        <div className="battle-content mx-auto">
          <div>
            <h1>ANSWER THE CALL TO BATTLE</h1>
            <p className="pt-3">
              The world of Sanctuary is once again under siege by the demonic
              hordes and it needs your help to defend against the onslaught.
              Download now for FREE!
            </p>
          </div>

          <div className="flex justify-center mt-10 mb-[80px]">
            <Button type="primary">Play Now</Button>
          </div>
        </div>
      </section>
      {/* end battle section */}

      <div className="home-stone-divider-top"></div>

      {/* start connection section */}
      <section className="connect-container"></section>
      {/* end connection section */}
      <div className="home-stone-divider-bottom"></div>
    </div>
  );
}
