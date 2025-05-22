import React, { useState, useMemo, act, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Flag,
  Star,
  BarChart3,
  Pin,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SportsCarousel from "./SportsCarousel";
import map from "@/assets/map.png";
import soccer from "@/assets/soccer.png";
import { useNavigate } from "react-router-dom";
import { useSite } from "@/context/SiteContext";

const League = {
  "Football": [
    {
      "leagueTr": "Premier Lig",
      "league-en": "Premier League",
      "country": "England",
      "code": "gb",
      "flag": "https://flagcdn.com/gb.svg"
    },
    {
      "leagueTr": "La Liga",
      "league-en": "La Liga",
      "country": "Spain",
      "code": "es",
      "flag": "https://flagcdn.com/es.svg"
    },
    {
      "leagueTr": "Bundesliga",
      "league-en": "Bundesliga",
      "country": "Germany",
      "code": "de",
      "flag": "https://flagcdn.com/de.svg"
    },
    {
      "leagueTr": "Serie A",
      "league-en": "Serie A",
      "country": "Italy",
      "code": "it",
      "flag": "https://flagcdn.com/it.svg"
    },
    {
      "leagueTr": "Ligue 1",
      "league-en": "Ligue 1",
      "country": "France",
      "code": "fr",
      "flag": "https://flagcdn.com/fr.svg"
    },
    {
      "leagueTr": "Brezilya Série A",
      "league-en": "Brasileirão",
      "country": "Brazil",
      "code": "br",
      "flag": "https://flagcdn.com/br.svg"
    }
  ],
  "Cricket": [
    {
      "leagueTr": "Hindistan Premier Ligi",
      "league-en": "Indian Premier League",
      "country": "India",
      "code": "in",
      "flag": "https://flagcdn.com/in.svg"
    },
    {
      "leagueTr": "Büyük Patlama Ligi",
      "league-en": "Big Bash League",
      "country": "Australia",
      "code": "au",
      "flag": "https://flagcdn.com/au.svg"
    },
    {
      "leagueTr": "Pakistan Süper Ligi",
      "league-en": "Pakistan Super League",
      "country": "Pakistan",
      "code": "pk",
      "flag": "https://flagcdn.com/pk.svg"
    },
    {
      "leagueTr": "Bangladeş Premier Ligi",
      "league-en": "Bangladesh Premier League",
      "country": "Bangladesh",
      "code": "bd",
      "flag": "https://flagcdn.com/bd.svg"
    },
    {
      "leagueTr": "Vitality Blast",
      "league-en": "Vitality Blast",
      "country": "England",
      "code": "gb",
      "flag": "https://flagcdn.com/gb.svg"
    }
  ],
  "Basketball": [
    {
      "leagueTr": "NBA",
      "league-en": "NBA",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "EuroLeague",
      "league-en": "EuroLeague",
      "country": "Spain",
      "code": "es",
      "flag": "https://flagcdn.com/es.svg"
    },
    {
      "leagueTr": "Avustralya NBL",
      "league-en": "NBL",
      "country": "Australia",
      "code": "au",
      "flag": "https://flagcdn.com/au.svg"
    },
    {
      "leagueTr": "Çin Basketbol Ligi",
      "league-en": "CBA",
      "country": "China",
      "code": "cn",
      "flag": "https://flagcdn.com/cn.svg"
    },
    {
      "leagueTr": "Filipinler Basketbol Derneği",
      "league-en": "PBA",
      "country": "Philippines",
      "code": "ph",
      "flag": "https://flagcdn.com/ph.svg"
    }
  ],
  "Volleyball": [
    {
      "leagueTr": "İtalyan Voleybol Ligi",
      "league-en": "Italian Volleyball League",
      "country": "Italy",
      "code": "it",
      "flag": "https://flagcdn.com/it.svg"
    },
    {
      "leagueTr": "Rus Süper Ligi",
      "league-en": "Russian Super League",
      "country": "Russia",
      "code": "ru",
      "flag": "https://flagcdn.com/ru.svg"
    },
    {
      "leagueTr": "Brezilya Süper Ligi",
      "league-en": "Brazilian Superliga",
      "country": "Brazil",
      "code": "br",
      "flag": "https://flagcdn.com/br.svg"
    },
    {
      "leagueTr": "Polonya PlusLiga",
      "league-en": "Polish PlusLiga",
      "country": "Poland",
      "code": "pl",
      "flag": "https://flagcdn.com/pl.svg"
    },
    {
      "leagueTr": "Türkiye Sultanlar Ligi",
      "league-en": "Turkish Sultanlar Ligi",
      "country": "Turkey",
      "code": "tr",
      "flag": "https://flagcdn.com/tr.svg"
    }
  ],
  "American Football": [
    {
      "leagueTr": "NFL",
      "league-en": "NFL",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "CFL",
      "league-en": "CFL",
      "country": "Canada",
      "code": "ca",
      "flag": "https://flagcdn.com/ca.svg"
    },
    {
      "leagueTr": "Alman Futbol Ligi",
      "league-en": "German Football League",
      "country": "Germany",
      "code": "de",
      "flag": "https://flagcdn.com/de.svg"
    },
    {
      "leagueTr": "X Ligi",
      "league-en": "X-League",
      "country": "Japan",
      "code": "jp",
      "flag": "https://flagcdn.com/jp.svg"
    },
    {
      "leagueTr": "Avrupa Futbol Ligi",
      "league-en": "European League of Football",
      "country": "Germany",
      "code": "de",
      "flag": "https://flagcdn.com/de.svg"
    }
  ],
  "Badminton": [
    {
      "leagueTr": "Premier Badminton Ligi",
      "league-en": "Premier Badminton League",
      "country": "India",
      "code": "in",
      "flag": "https://flagcdn.com/in.svg"
    },
    {
      "leagueTr": "Çin Badminton Süper Ligi",
      "league-en": "China Badminton Super League",
      "country": "China",
      "code": "cn",
      "flag": "https://flagcdn.com/cn.svg"
    },
    {
      "leagueTr": "Endonezya Badminton Ligi",
      "league-en": "Indonesia Badminton League",
      "country": "Indonesia",
      "code": "id",
      "flag": "https://flagcdn.com/id.svg"
    }
  ],
  "Lacrosse": [
    {
      "leagueTr": "Major League Lacrosse",
      "league-en": "Major League Lacrosse",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "Ulusal Lacrosse Ligi",
      "league-en": "National Lacrosse League",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "İngiliz Lacrosse Birliği",
      "league-en": "English Lacrosse Association",
      "country": "United Kingdom",
      "code": "gb",
      "flag": "https://flagcdn.com/gb.svg"
    },
    {
      "leagueTr": "Avustralya Lacrosse Ligi",
      "league-en": "Australian Lacrosse League",
      "country": "Australia",
      "code": "au",
      "flag": "https://flagcdn.com/au.svg"
    }
  ],
  "Table Tennis": [
    {
      "leagueTr": "Çin Süper Ligi",
      "league-en": "China Super League",
      "country": "China",
      "code": "cn",
      "flag": "https://flagcdn.com/cn.svg"
    },
    {
      "leagueTr": "Japonya T.Ligi",
      "league-en": "Japan T.League",
      "country": "Japan",
      "code": "jp",
      "flag": "https://flagcdn.com/jp.svg"
    },
    {
      "leagueTr": "Almanya Bundesliga",
      "league-en": "German Bundesliga",
      "country": "Germany",
      "code": "de",
      "flag": "https://flagcdn.com/de.svg"
    },
    {
      "leagueTr": "Rusya Premier Ligi",
      "league-en": "Russian Premier League",
      "country": "Russia",
      "code": "ru",
      "flag": "https://flagcdn.com/ru.svg"
    },
    {
      "leagueTr": "Fransız Pro A",
      "league-en": "French Pro A",
      "country": "France",
      "code": "fr",
      "flag": "https://flagcdn.com/fr.svg"
    }
  ],
  "Hockey": [
    {
      "leagueTr": "NHL",
      "league-en": "NHL",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "KHL",
      "league-en": "KHL",
      "country": "Russia",
      "code": "ru",
      "flag": "https://flagcdn.com/ru.svg"
    },
    {
      "leagueTr": "İsveç Hokey Ligi",
      "league-en": "Swedish Hockey League",
      "country": "Sweden",
      "code": "se",
      "flag": "https://flagcdn.com/se.svg"
    },
    {
      "leagueTr": "Liiga",
      "league-en": "Liiga",
      "country": "Finland",
      "code": "fi",
      "flag": "https://flagcdn.com/fi.svg"
    },
    {
      "leagueTr": "Çek Extraliga",
      "league-en": "Czech Extraliga",
      "country": "Czechia",
      "code": "cz",
      "flag": "https://flagcdn.com/cz.svg"
    }
  ],
  "Boxing": [
    {
      "leagueTr": "Top Rank",
      "league-en": "Top Rank",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "Matchroom Boks",
      "league-en": "Matchroom Boxing",
      "country": "United Kingdom",
      "code": "gb",
      "flag": "https://flagcdn.com/gb.svg"
    },
    {
      "leagueTr": "Altın Çocuk Tanıtımları",
      "league-en": "Golden Boy Promotions",
      "country": "United States",
      "code": "us",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "leagueTr": "Kameda Tanıtımları",
      "league-en": "Kameda Promotions",
      "country": "Japan",
      "code": "jp",
      "flag": "https://flagcdn.com/jp.svg"
    }
  ]
}


const SportsMiddle = () => {
  const [isTopChampionshipsOpen, setIsTopChampionshipsOpen] = useState(true);
  const { language } = useSite();
  const [activeGame, setActiveGame] = useState({
    name: 'Football',
    icon: '⚽'
  });

  useEffect(() => {
    console.log(activeGame)
    console.log(League[activeGame])
  }, [activeGame]);

  return (
    <div>
      <div>
        <Collapsible
          open={isTopChampionshipsOpen}
          onOpenChange={setIsTopChampionshipsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">{language === 'turkish' ? 'Spor Bahisleri' : 'Sports Betting'}</span>
            {isTopChampionshipsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white border-b overflow-hidden w-full max-w-full ">
            {/* <div className="py-4 px-4 flex flex-col gap-4">
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex gap-4 items-center">
                          <img src={sportsdummy} className="w-8 h-8" alt="" />
                          <p className="text-xs"> Türkiye Kupası</p>
                        </div>
                      </div>
                    </div> */}
            <div>
              {" "}
              <SportsCarousel setActiveGame={setActiveGame} />
            </div>
            <div>
              {
                League[activeGame?.name]?.map((league, index) => (
                  <DummyUi key={index} league={league} activeGameIcon={activeGame.icon} />
                ))
              }
            </div>
            <div className="flex items-center justify-center mt-10 bg-[#3B2864] rounded-lg text-sm font-medium text-white py-3 pl-3">
              {language === 'turkish' ? 'Daha fazla göster' : 'Load More'}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default SportsMiddle;

const teamNames = [
  "Sivasspor", "Galatasaray", "Fenerbahçe", "Trabzonspor", "Beşiktaş",
  "Başakşehir", "Bursaspor", "Konyaspor", "Altay", "Adanaspor",
  "Gençlerbirliği", "Boluspor", "Kayserispor", "Rizespor", "Ankaragücü",
  "Antalyaspor", "Gaziantep FK", "Karagümrük", "Manisaspor", "Sakaryaspor"
];

const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomFloat = (min = 1.2, max = 4.5) =>
  (Math.random() * (max - min) + min).toFixed(2);
const getRandomInt = (min = 100, max = 999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const DummyUi = ({ league, activeGameIcon }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { language } = useSite();


// remove useMemo
  const games = Array.from({ length: 6 }, () => ({
    team1: getRandomFromArray(teamNames), 
    team2: getRandomFromArray(teamNames),
    number: getRandomInt(),
    odds: Array.from({ length: 6 }, () => getRandomFloat()),
  }));
  

  const handler = () => {
    setCount((prev) => prev + 1);
    if (count >= 1) navigate("/login");
    const cards = document.querySelectorAll(".rightSideCards");
    cards.forEach((card) => {
      card.classList.remove("hidden");
      card.classList.add("block");
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-[#3B2864] text-white py-2 pl-3">
        <div className="flex items-center">
          <div className="h-5 w-5 text-2xl flex items-center justify-center mr-2">{activeGameIcon}</div>
          <img src={league?.flag} alt="" className="w-5 mr-2" />
          <span className="font-medium text-xs">
            {language === "turkish" ? league?.leagueTr : league?.["league-en"]}
          </span>
        </div>
        <div className="flex items-center font-medium text-xs">
          <div className="text-center w-14">1</div>
          <div className="text-center w-14">X</div>
          <div className="text-center w-14">2</div>
          <div className="text-center w-14">1X</div>
          <div className="text-center w-14">X2</div>
          <div className="text-center w-14">12</div>
        </div>
      </div>
      {games.map((game, i) => (
        <div onClick={handler} key={i}>
          <div className="cursor-pointer border-b h-full border-gray-200 flex items-center justify-between gap-5">
            <div className="h-14 pl-4 flex items-center gap-5">
              <div className="mr-4">
                <p className="text-[10px] text-gray-400">11.05.25</p>
                <p className="text-[10px] text-gray-400">6:00 PM</p>
              </div>
              <div className="w-40">
                <p className="text-xs text-[#3B2864] font-medium">{game.team1}</p>
                <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                  {game.team2}
                </p>
              </div>
              <div className="flex gap-1">
                <Star size={19} className="text-[#3B2864]" />
                <Pin size={19} className="text-[#3B2864]" />
                <Pin size={19} className="text-[#3B2864]" />
                <BarChart3 size={19} className="text-[#3B2864]" />
                <BarChart3 size={19} className="text-[#3B2864]" />
              </div>
            </div>

            <div className="flex items-center justify-center h-14">
              <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>{game.number}</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
              </div>

              {game.odds.map((odd, j) => (
                <div
                  key={j}
                  className={`flex items-center justify-center h-full w-14 text-xs font-medium ${j < 5 ? "border-r border-gray-200" : ""
                    }`}
                >
                  {odd}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};
