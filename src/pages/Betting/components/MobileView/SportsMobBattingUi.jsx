import React, { useEffect } from 'react'
import SportsMobCarousel from './SportsMobCarousel'
import SportsMobMiddle from './SportsMobMiddle'

const SportsMobBattingUi = () => {

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

  const [activeSports, setActiveSports] = React.useState({
    game: "Football",
    icon: "⚽",
  });

  const [activeLeague, setActiveGameLeague] = React.useState(League[activeSports.game]);

  useEffect(() => {
    console.log("activeSports", activeSports);
    setActiveGameLeague(League[activeSports.game]);
  }, [activeSports]);

  return (
    <div>
        <SportsMobCarousel setActiveSports={setActiveSports}/>
        <SportsMobMiddle activeLeague={activeLeague} Icon={activeSports.icon}/>
    </div>
  )
}

export default SportsMobBattingUi