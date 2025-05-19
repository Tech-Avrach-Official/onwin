import { useState } from "react";
import { Search } from "lucide-react";
import { useSite } from "@/context/SiteContext";

// Categories data (top tabs)

const categoriesIcons = {
  "Tümü": (
    <svg viewBox="0 0 30 30" height="17px">
      <path d="M10.14 22.304a3.504 3.504 0 110-7.008 3.504 3.504 0 010 7.008zm0-6.126a2.617 2.617 0 102.618 2.617 2.625 2.625 0 00-2.617-2.616v-.001zm7.547 8.806a3.504 3.504 0 110-7.007 3.504 3.504 0 010 7.007zm0-6.125a2.617 2.617 0 102.617 2.617 2.624 2.624 0 00-2.617-2.617z" fill="#fff" stroke="#fff" strokeWidth=".5" />
      <path d="M17.687 18.86a.44.44 0 01-.408-.608c1.039-2.545-.05-5.716-.923-7.6a9.147 9.147 0 01-1.548 4.352 9.381 9.381 0 01-2.038 2.215.442.442 0 01-.518-.715 8.64 8.64 0 001.841-2.019 8.024 8.024 0 001.338-5.637.44.44 0 01.81-.295 17.94 17.94 0 011.584 3.356 9.503 9.503 0 01.275 6.675.44.44 0 01-.413.276z" fill="#fff" stroke="#fff" strokeWidth=".5" />
      <path d="M13.765 9.831a.44.44 0 01-.126-.864l4.219-1.275a.442.442 0 11.254.846l-4.218 1.275a.433.433 0 01-.129.018zm8.618 2.664a.44.44 0 01-.441-.44v-.236a.441.441 0 11.883 0v.235a.44.44 0 01-.442.441zm0 2.175a.442.442 0 01-.441-.442v-.058a.442.442 0 11.883 0v.058a.443.443 0 01-.442.442zm-.971-1.205h-.177a.441.441 0 010-.883h.177a.442.442 0 010 .883zm2.178 0h-.177a.441.441 0 010-.883h.176a.442.442 0 010 .883zM8.06 10.262a.441.441 0 01-.441-.442v-.294a.442.442 0 11.883 0v.294a.442.442 0 01-.442.442zm0 3a.44.44 0 01-.441-.44v-.236a.441.441 0 11.883 0v.236a.442.442 0 01-.442.44zm-1.383-1.618h-.235a.441.441 0 010-.883h.235a.442.442 0 010 .883zm3.002 0h-.236a.441.441 0 010-.883h.236a.442.442 0 010 .883zM23.26 7.559a1.28 1.28 0 110-2.559 1.28 1.28 0 010 2.559zm0-1.678a.396.396 0 10.37.245.396.396 0 00-.37-.25v.005z" fill="#fff" stroke="#fff" strokeWidth=".5" />
    </svg>
  ),
  "Favorite": (
    <svg viewBox="0 0 19 19" height="17px" xmlns="http://www.w3.org/2000/svg" fill="black">
      <path d="M9.5 1.5l2.153 4.494 4.972.722-3.6 3.509.85 4.955-4.375-2.3-4.375 2.3.85-4.955-3.6-3.509 4.972-.722L9.5 1.5z" />
    </svg>
  ),
  "Yeni": (
    <p></p>
  ),
  "Popüler Oyunlar": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M9.988.895l1.152 2.074h1.963a.538.538 0 01.387.92l-1.803 1.97 1 2.295a.544.544 0 01-.775.68L9.5 7.473 7.084 8.83a.544.544 0 01-.775-.679l.999-2.293-1.803-1.97a.538.538 0 01.387-.92h1.964L9.008.896a.549.549 0 01.98 0v0zm.7 14.543v2.968h2.968m-.593-5.937v2.969h2.968m-.593-5.344v2.969h2.968m-2.968 0l2.374-2.376m-9.499 4.751v2.968h-2.97m.595-5.937v2.969h-2.97m.595-5.344v2.969H.592m2.971 0l-2.376-2.376" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "TURNUVA": (
    <p></p>
  ),
  "BlackJack Black Friday": (
    <p></p>
  ),
  "Lobiler": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M15.23 2.553a1.188 1.188 0 00-.95-.475h-9.5a1.188 1.188 0 00-.95.475L1.186 6.077a1.188 1.188 0 00.038 1.472l7.393 8.946a1.187 1.187 0 001.82 0l7.393-8.946a1.188 1.188 0 00.038-1.472l-2.64-3.524zM4.234 2.21L9.53 16.922M14.823 2.21L9.53 16.922M.948 6.828h17.158" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.967 6.828l3.562-4.75 3.563 4.75" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  ),
  "Gösteri Oyunları": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 18.406A8.906 8.906 0 109.5.594a8.906 8.906 0 000 17.812z"></path><path d="M9.5 15.225a5.725 5.725 0 100-11.45 5.725 5.725 0 000 11.45z"></path><path d="M8.029 11.257a1.759 1.759 0 001.47.692c.902 0 1.634-.548 1.634-1.224 0-.676-.732-1.225-1.633-1.225-.902 0-1.633-.549-1.633-1.226 0-.676.73-1.223 1.633-1.223a1.758 1.758 0 011.47.692M9.5 11.95v.816m0-6.532v.817M7.809.754l.604 3.125m2.11-.013l.569-3.13M1.081 6.591l3.008 1.04m1.044-1.834L2.706 3.739m.064 11.598l2.404-2.085M4.11 11.43l-2.996 1.073m10.077 5.743l-.604-3.125m-2.11.013l-.569 3.13m10.012-5.855l-3.009-1.04m-1.044 1.834l2.427 2.058M16.23 3.663l-2.404 2.085m1.066 1.822l2.995-1.073"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "Rulet": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M6.642 12.337a.464.464 0 00-.705.396v2.633a.465.465 0 00.705.396l5.717-3.43a.464.464 0 01.704.396v2.633a.465.465 0 01-.704.396l-5.717-3.42zm-4.861 5.871a7.69 7.69 0 012.15-5.343m11.139 0a7.69 7.69 0 012.149 5.343m0 0a7.69 7.69 0 00-2.15-5.343m-11.139 0a7.69 7.69 0 00-2.149 5.343M13.656 5.937A4.16 4.16 0 018.132 3.99a4.164 4.164 0 01-2.788 2.77" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.409 10.49a4.141 4.141 0 001.247-2.97V5.147a4.156 4.156 0 10-8.312 0V7.52a4.142 4.142 0 001.246 2.97" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  ),
  "Blackjack": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M6.642 12.337a.464.464 0 00-.705.396v2.633a.465.465 0 00.705.396l5.717-3.43a.464.464 0 01.704.396v2.633a.465.465 0 01-.704.396l-5.717-3.42zm-4.861 5.871a7.69 7.69 0 012.15-5.343m11.139 0a7.69 7.69 0 012.149 5.343m0 0a7.69 7.69 0 00-2.15-5.343m-11.139 0a7.69 7.69 0 00-2.149 5.343M13.656 5.937A4.16 4.16 0 018.132 3.99a4.164 4.164 0 01-2.788 2.77" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.409 10.49a4.141 4.141 0 001.247-2.97V5.147a4.156 4.156 0 10-8.312 0V7.52a4.142 4.142 0 001.246 2.97" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  ),
  "Sic Bo": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.749 3.056l5.72 2.288 5.72-2.288"></path><path d="M12.469 13.063c.39 0 .778-.08 1.136-.238l4.096-1.82a1.188 1.188 0 00.705-1.086V3.744a1.188 1.188 0 00-.705-1.086L13.605.838a2.793 2.793 0 00-2.272 0l-4.096 1.82a1.187 1.187 0 00-.706 1.083v2.197m0 2.086a.296.296 0 01.297.297m-.594 0a.296.296 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m3.743 2.916a.296.296 0 01.297.297m-.596-.001a.297.297 0 01.296-.296m.003.593a.297.297 0 01-.296-.296m.593-.001a.297.297 0 01-.297.297m-5.821 3.185a.297.297 0 01.297.297m-.594.001a.297.297 0 01.297-.298m0 .594a.297.297 0 01-.297-.297m.594.001a.297.297 0 01-.297.296M2.375 10.86a.297.297 0 01.297.296m-.594 0a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m.935 1.487a.296.296 0 01.249.339m-.587-.089a.297.297 0 01.338-.25m-.089.588a.298.298 0 01-.249-.338m.591.089a.297.297 0 01-.338.249m5.771 1.062a.296.296 0 01.297.296m-.593-.003a.296.296 0 01.296-.297m0 .597a.297.297 0 01-.297-.296m.594-.004a.297.297 0 01-.297.297m3.473-12.625a.297.297 0 01.297.297m-.594-.002a.297.297 0 01.297-.297m0 .597a.297.297 0 01-.297-.298m.594-.002a.297.297 0 01-.297.297m3.859 2.825a.297.297 0 01.297.296m-.594 0a.297.297 0 01.297-.296m0 .593a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m0 2.375a.297.297 0 01.297.297m-.594 0a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m-9.797 1.154v7.718"></path><path d="M.812 8.4l5.72 2.287 5.72-2.287"></path><path d="M5.395 18.165a2.793 2.793 0 002.272 0l4.096-1.821a1.187 1.187 0 00.706-1.085V9.084a1.188 1.188 0 00-.706-1.086l-4.096-1.82a2.793 2.793 0 00-2.272 0L1.3 7.995a1.187 1.187 0 00-.705 1.088v6.175a1.187 1.187 0 00.705 1.086l4.096 1.82z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "Poker": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.904 1.552A1.182 1.182 0 008.518.616L1.551 1.968a1.188 1.188 0 00-.935 1.387l2.029 10.45a1.183 1.183 0 001.386.936l.653-.127"></path><path d="M6.616 5.412l-1.291 2.66.596.539M2.76 3.54a.296.296 0 01.348.238m-.583.11a.296.296 0 01.238-.348m.11.583a.297.297 0 01-.348-.237m.583-.111a.297.297 0 01-.237.348m14.897 1.512l-7.722-1.56a.792.792 0 00-.933.62L6.851 15.893a.792.792 0 00.619.932l7.721 1.56a.792.792 0 00.933-.619l2.263-11.199a.791.791 0 00-.62-.933zm-5.616 7.917l.234-1.16"></path><path d="M13.207 8.335s-1.974.808-2.209 1.967a1.777 1.777 0 001.388 2.09 1.775 1.775 0 002.091-1.387c.234-1.16-1.27-2.67-1.27-2.67zM10.95 6.067a.297.297 0 01.232.35M10.6 6.3a.297.297 0 01.35-.233m-.118.583a.297.297 0 01-.232-.35m.581.117a.297.297 0 01-.35.232m3.577 9.168a.297.297 0 01.232.35"></path><path d="M14.06 16.049a.297.297 0 01.127-.189c.066-.043.146-.059.223-.043m-.118.582a.297.297 0 01-.232-.35m.586.118a.297.297 0 01-.127.188.294.294 0 01-.223.044"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "Diğer Oyunlar":(
    <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M15.307 9.315l.99 1.782h1.965a.54.54 0 01.387.921l-1.803 1.968.999 2.296a.544.544 0 01-.775.68l-2.416-1.358-2.414 1.358a.545.545 0 01-.776-.68l.966-2.217m-7.929-4.75l-.99 1.782H1.547a.539.539 0 00-.388.921l1.804 1.968-1 2.296a.545.545 0 00.776.68l2.415-1.358 2.415 1.358a.545.545 0 00.776-.68l-.966-2.217m2.816-12.851l1.575 3.148 3.03.303a.384.384 0 01.232.653l-2.495 2.496.925 3.39a.383.383 0 01-.542.444l-3.068-1.534-3.067 1.534a.384.384 0 01-.541-.444l.925-3.39-2.496-2.496a.384.384 0 01.233-.654l3.03-.303 1.572-3.147a.383.383 0 01.687 0z" stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  ),
  "Baccarat":(
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.313 4.768l-3.789.817A1.182 1.182 0 00.62 6.99l2.25 10.385a1.182 1.182 0 001.405.905l5.523-1.197M2.766 7.125a.296.296 0 01.352.227m-.58.128a.296.296 0 01.227-.355m.125.583a.296.296 0 01-.352-.228m.58-.125a.297.297 0 01-.227.353"></path><path d="M17.853 5.993l-7.491-2.388a.792.792 0 00-.995.514L5.903 14.986a.792.792 0 00.514.995l7.491 2.388a.792.792 0 00.995-.514l3.464-10.867a.792.792 0 00-.514-.995z"></path><path d="M12.852 8.737l-2.404 1.712.97 2.788 2.405-1.712-.97-2.788zM11.04 5.679a.298.298 0 01.192.372m-.566-.18a.297.297 0 01.373-.192m-.179.565a.296.296 0 01-.194-.373m.566.18a.297.297 0 01-.373.193m2.553 9.486a.297.297 0 01.192.372m-.564-.179a.298.298 0 01.372-.193m-.18.566a.297.297 0 01-.193-.373m.566.179a.297.297 0 01-.373.194"></path><path d="M14.763 5.008V1.776A1.228 1.228 0 0013.575.595H6.571a1.242 1.242 0 00-1.257 1.173v10.627a1.181 1.181 0 001.039 1.18M7.441 2.37a.296.296 0 01.295.299m-.59-.004a.297.297 0 01.296-.295m0 .594a.298.298 0 01-.296-.3m.593.005a.297.297 0 01-.299.295"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  )
};


// const categoriesTr = [
//   { name: "Tümü", icon: "/icons/all.png" },
//   { name: "Favorite", icon: "/assets-ow/casino/img/icons/star.png" },
//   { name: "Yeni", icon: "/icons/new.png" },
//   { name: "Popüler Oyunlar", icon: "/icons/popular.png" },
//   { name: "TURNUVA", icon: "/icons/tournament.png" },
//   { name: "BlackJack Black Friday", icon: "/icons/blackjack-bf.png" },
//   { name: "Lobiler", icon: "/icons/lobby.png" },
//   { name: "Gösteri Oyunları", icon: "/icons/show.png" },
//   { name: "Rulet", icon: "/icons/roulette.png" },
//   { name: "Blackjack", icon: "/icons/blackjack.png" },
//   { name: "Sic Bo", icon: "/icons/sicbo.png" },
//   { name: "Poker", icon: "/icons/poker.png" },
// ];
// const categoriesEn = [
//   { name: "All", icon: "/icons/all.png" },
//   { name: "Favorite", icon: "/assets-ow/casino/img/icons/star.png" },
//   { name: "New", icon: "/icons/new.png" },
//   { name: "Popular Games", icon: "/icons/popular.png" },
//   { name: "TOURNAMENT", icon: "/icons/tournament.png" },
//   { name: "BlackJack Black Friday", icon: "/icons/blackjack-bf.png" },
//   { name: "Lobbies", icon: "/icons/lobby.png" },
//   { name: "Show Games", icon: "/icons/show.png" },
//   { name: "Roulette", icon: "/icons/roulette.png" },
//   { name: "Blackjack", icon: "/icons/blackjack.png" },
//   { name: "Sic Bo", icon: "/icons/sicbo.png" },
//   { name: "Poker", icon: "/icons/poker.png" },
// ];


const categoriesTr = [
  { name: "Tümü", icon: categoriesIcons["Tümü"] },
  { name: "Favorite", icon: categoriesIcons["Favorite"] },
  { name: "Ninjagamming", icon: categoriesIcons["Yeni"] },
  { name: "Popüler Oyunlar", icon: categoriesIcons["Popüler Oyunlar"] },
  { name: "TURNUVA", icon: categoriesIcons["TURNUVA"] },
  { name: "BlackJack Black Friday", icon: categoriesIcons["BlackJack Black Friday"] },
  { name: "Lobiler", icon: categoriesIcons["Lobiler"] },
  { name: "Gösteri Oyunları", icon: categoriesIcons["Gösteri Oyunları"] },
  { name: "Rulet", icon: categoriesIcons["Rulet"] },
  { name: "Blackjack", icon: categoriesIcons["Blackjack"] },
  { name: "Sic Bo", icon: categoriesIcons["Sic Bo"] },
  { name: "Poker", icon: categoriesIcons["Poker"] },
  { name: "Diğer Oyunlar", icon: categoriesIcons["Diğer Oyunlar"] },
  { name: "Baccarat", icon: categoriesIcons["Baccarat"] },
];

const categoriesEn = [
  { name: "All", icon: categoriesIcons["Tümü"] },
  { name: "Favorites", icon: categoriesIcons["Favorite"] },
  { name: "NinjaGamming", icon: categoriesIcons["Yeni"] },
  { name: "Popular Games", icon: categoriesIcons["Popüler Oyunlar"] },
  { name: "TOURNAMENT", icon: categoriesIcons["TURNUVA"] },
  { name: "BlackJack Black Friday", icon: categoriesIcons["BlackJack Black Friday"] },
  { name: "Lobbies", icon: categoriesIcons["Lobiler"] },
  { name: "Show Games", icon: categoriesIcons["Gösteri Oyunları"] },
  { name: "Roulette", icon: categoriesIcons["Rulet"] },
  { name: "Blackjack", icon: categoriesIcons["Blackjack"] },
  { name: "Sic Bo", icon: categoriesIcons["Sic Bo"] },
  { name: "Poker", icon: categoriesIcons["Poker"] },
  { name: "Other Games", icon: categoriesIcons["Diğer Oyunlar"] },
  { name: "Baccarat", icon: categoriesIcons["Baccarat"] },

];

// Provider box data
const providersEn = [
  { name: "All Providers", icon: "/providers/all.png", image: "" },
  { name: "Pragmaticplay", count: 349, image: "https://cloudcdn.owcontent.com/assets/svg/providers/pragmaticplay.svg" },
  { name: "Ninja-gaming-lc", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ninja-gaming-lc.svg" },
  { name: "Exagaminglive", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/exagaminglive.svg" },
  { name: "Playtech", count: 32, image: "https://cloudcdn.owcontent.com/assets/svg/providers/playtech.svg" },
  { name: "Luckystreak", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/luckystreak.svg" },
  { name: "Bgtv", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/bgtv.svg" },
  { name: "Amusnet", count: 7, image: "https://cloudcdn.owcontent.com/assets/svg/providers/amusnet.svg" },
  { name: "Vivo", count: 28, image: "https://cloudcdn.owcontent.com/assets/svg/providers/vivo.svg" },
  { name: "Xpg", count: 18, image: "https://cloudcdn.owcontent.com/assets/svg/providers/xpg.svg" },
  { name: "Algnet", count: 12, image: "https://cloudcdn.owcontent.com/assets/svg/providers/algnet.svg" },
  { name: "Ezugi", count: 56, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ezugi.svg" },
  { name: "Tapking", count: 25, image: "https://cloudcdn.owcontent.com/assets/svg/providers/tapking.svg" },
  { name: "Evolution", count: 104, image: "https://cloudcdn.owcontent.com/assets/svg/providers/evolution.svg" },
];

const providersTr = [
  { name: "Tüm Sağlayıcılar", icon: "/providers/all.png", image: "" },
  { name: "Pragmaticplay", count: 349, image: "https://cloudcdn.owcontent.com/assets/svg/providers/pragmaticplay.svg" },
  { name: "Ninja-gaming-lc", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ninja-gaming-lc.svg" },
  { name: "Exagaminglive", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/exagaminglive.svg" },
  { name: "Playtech", count: 32, image: "https://cloudcdn.owcontent.com/assets/svg/providers/playtech.svg" },
  { name: "Luckystreak", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/luckystreak.svg" },
  { name: "Bgtv", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/bgtv.svg" },
  { name: "Amusnet", count: 7, image: "https://cloudcdn.owcontent.com/assets/svg/providers/amusnet.svg" },
  { name: "Vivo", count: 28, image: "https://cloudcdn.owcontent.com/assets/svg/providers/vivo.svg" },
  { name: "Xpg", count: 18, image: "https://cloudcdn.owcontent.com/assets/svg/providers/xpg.svg" },
  { name: "Algnet", count: 12, image: "https://cloudcdn.owcontent.com/assets/svg/providers/algnet.svg" },
  { name: "Ezugi", count: 56, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ezugi.svg" },
  { name: "Tapking", count: 25, image: "https://cloudcdn.owcontent.com/assets/svg/providers/tapking.svg" },
  { name: "Evolution", count: 104, image: "https://cloudcdn.owcontent.com/assets/svg/providers/evolution.svg" },
];

export default function Header({ activeProvider, setActiveProvider }) {
  const [active, setActive] = useState("Tümü");
  const [showProviderBox, setShowProviderBox] = useState(false);
  const { language } = useSite();
  const [searchText, setSearchText] = useState("");

  let categories;
  let providers;
  if (language === 'turkish') {
    categories = categoriesTr;
    providers = providersTr;
  } else {
    categories = categoriesEn;
    providers = providersEn;
  }
  console.log(providers)
  const toggleProviderBox = () => {
    setShowProviderBox((prev) => !prev);
  };

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className="relative">
      <div className="lg:hidden flex items-center bg-white px-6 mt-5 py-3 border rounded">
        <input
          type="text"
          placeholder="Search"
          className="outline-none flex-1 text-sm bg-transparent rounded-md"
        />
        <Search size={18} className="text-pink-600 ml-2" />
      </div>
      {/* Top Category Bar */}
      <div className="flex items-center gap-2 pt-8 pb-6 rounded-lg bg-[#f2f2f2]">

        <div className="flex gap-4 overflow-x-auto scrollbar-hide bg-white rounded-md ">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`flex items-center gap-2 px-3 py-3 cursor-pointer whitespace-nowrap border-r
              ${active === cat.name ? "text-pink-600 border-t-2 border-t-pink-600 font-semibold bg-white" : "text-[#524471] font-semibold"}
            `}
            >
              {/* <img src={cat.icon} alt={cat.name} className="w-4 h-4 object-contain" /> */}
              <span>{cat.icon}</span>
              <span className="text-sm">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Sağlayıcı Button + Popup Wrapper */}
        <div className="relative">
          {/* Button */}
          <button
            onClick={toggleProviderBox}
            className="whitespace-nowrap bg-white px-6 py-3 border text-sm hover:bg-gray-200 rounded-md"
          >
            {language === 'turkish' ? 'Sağlayıcı' : 'Provider'}
          </button>

          {/* Provider Popup */}
          {showProviderBox && (
            <div className="absolute z-50 top-14 right-0 w-[800px] bg-white p-4 shadow-lg rounded-lg border">
              {/* Popup Search */}
              <div className="flex items-center border p-2 rounded mb-4">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search"
                  className="flex-grow bg-transparent outline-none text-sm"
                />
                <Search size={18} className="text-pink-600" />
              </div>

              {/* Grid of Providers */}
              <div className="grid grid-cols-3 gap-3">
                {filteredProviders.map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => setActiveProvider(provider.name)}
                    className={`flex items-center gap-2 border px-3 py-3 rounded text-sm font-medium
              ${activeProvider === provider.name
                        ? "bg-[#4d3972] text-white"
                        : "bg-white text-[#524471]"}
            `}
                  >
                    <img src={provider.image} alt={provider.name} className="w-7 h-7 object-contain" />
                    {provider.name}
                    {provider.count && (
                      <span className="text-xs font-semibold">
                        {provider.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>



        {/* Search Box */}
        <div className="hidden ml-auto lg:flex items-center bg-white px-6 py-3 border rounded">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm bg-transparent rounded-md"
          />
          <Search size={18} className="text-pink-600 ml-2" />
        </div>
      </div>
    </div>
  );
}
