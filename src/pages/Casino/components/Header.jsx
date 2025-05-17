import { useState } from "react";
import { Search } from "lucide-react";



const CategoryIcons = {
  "Tümü": (
    <svg viewBox="0 0 30 30" height="17px">
      <path d="M10.14 22.304a3.504 3.504 0 110-7.008 3.504 3.504 0 010 7.008zm0-6.126a2.617 2.617 0 102.618 2.617 2.625 2.625 0 00-2.617-2.616v-.001zm7.547 8.806a3.504 3.504 0 110-7.007 3.504 3.504 0 010 7.007zm0-6.125a2.617 2.617 0 102.617 2.617 2.624 2.624 0 00-2.617-2.617z" fill="#fff" stroke="#fff" strokeWidth=".5"/>
      <path d="M17.687 18.86a.44.44 0 01-.408-.608c1.039-2.545-.05-5.716-.923-7.6a9.147 9.147 0 01-1.548 4.352 9.381 9.381 0 01-2.038 2.215.442.442 0 01-.518-.715 8.64 8.64 0 001.841-2.019 8.024 8.024 0 001.338-5.637.44.44 0 01.81-.295 17.94 17.94 0 011.584 3.356 9.503 9.503 0 01.275 6.675.44.44 0 01-.413.276z" fill="#fff" stroke="#fff" strokeWidth=".5"/>
      <path d="M13.765 9.831a.44.44 0 01-.126-.864l4.219-1.275a.442.442 0 11.254.846l-4.218 1.275a.433.433 0 01-.129.018zm8.618 2.664a.44.44 0 01-.441-.44v-.236a.441.441 0 11.883 0v.235a.44.44 0 01-.442.441zm0 2.175a.442.442 0 01-.441-.442v-.058a.442.442 0 11.883 0v.058a.443.443 0 01-.442.442zm-.971-1.205h-.177a.441.441 0 010-.883h.177a.442.442 0 010 .883zm2.178 0h-.177a.441.441 0 010-.883h.176a.442.442 0 010 .883zM8.06 10.262a.441.441 0 01-.441-.442v-.294a.442.442 0 11.883 0v.294a.442.442 0 01-.442.442zm0 3a.44.44 0 01-.441-.44v-.236a.441.441 0 11.883 0v.236a.442.442 0 01-.442.44zm-1.383-1.618h-.235a.441.441 0 010-.883h.235a.442.442 0 010 .883zm3.002 0h-.236a.441.441 0 010-.883h.236a.442.442 0 010 .883zM23.26 7.559a1.28 1.28 0 110-2.559 1.28 1.28 0 010 2.559zm0-1.678a.396.396 0 10.37.245.396.396 0 00-.37-.25v.005z" fill="#fff" stroke="#fff" strokeWidth=".5"/>
    </svg>
  ),
  "Favorite": (
    <svg viewBox="0 0 19 19" height="17px" xmlns="http://www.w3.org/2000/svg" fill="black">
    <path d="M9.5 1.5l2.153 4.494 4.972.722-3.6 3.509.85 4.955-4.375-2.3-4.375 2.3.85-4.955-3.6-3.509 4.972-.722L9.5 1.5z"/>
  </svg>
  ),
  "YENİ OYUNLAR": (
    <svg viewBox="0 0 19 19" height="17px">
      <path d="M2.26 3.908a8.908 8.908 0 0113.909.054M2.662 12.469V6.53l2.375 5.938V6.53m4.75 5.939H8.599a1.188 1.188 0 01-1.187-1.188V7.72a1.188 1.188 0 011.187-1.19h1.188m-2.375 3.564h2.375m2.375-3.563v1.597c0 .906.173 1.804.51 2.646l.677 1.695 1.188-4.156 1.187 4.156.679-1.695a7.14 7.14 0 00.509-2.646V6.531M2.087 14.844a8.887 8.887 0 0014.218.018" stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "ONWIN'E ÖZEL OYUNLAR": (
    <svg viewBox="0 0 19 19" height="17px">
      <path d="M15.23 2.553a1.188 1.188 0 00-.95-.475h-9.5a1.188 1.188 0 00-.95.475L1.186 6.077a1.188 1.188 0 00.038 1.472l7.393 8.946a1.187 1.187 0 001.82 0l7.393-8.946a1.188 1.188 0 00.038-1.472l-2.64-3.524zM4.234 2.21L9.53 16.922M14.823 2.21L9.53 16.922M.948 6.828h17.158" stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.967 6.828l3.562-4.75 3.563 4.75" stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "EGT Digital Bell Link": (
    <svg viewBox="0 0 19 19" height="17px">
      <g stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.687 18.86a.44.44 0 01-.408-.608c1.039-2.545-.05-5.716-.923-7.6a9.147 9.147 0 01-1.548 4.352 9.381 9.381 0 01-2.038 2.215.442.442 0 01-.518-.715 8.64 8.64 0 001.841-2.019 8.024 8.024 0 001.338-5.637.44.44 0 01.81-.295 17.94 17.94 0 011.584 3.356 9.503 9.503 0 01.275 6.675.44.44 0 01-.413.276z"/>
        <path d="M13.765 9.831a.44.44 0 01-.126-.864l4.219-1.275a.442.442 0 11.254.846l-4.218 1.275a.433.433 0 01-.129.018zm8.618 2.664a.44.44 0 01-.441-.44v-.236a.441.441 0 11.883 0v.235a.44.44 0 01-.442.441zm0 2.175a.442.442 0 01-.441-.442v-.058a.442.442 0 11.883 0v.058a.443.443 0 01-.442.442zm-.971-1.205h-.177a.441.441 0 010-.883h.177a.442.442 0 010 .883zm2.178 0h-.177a.441.441 0 010-.883h.176a.442.442 0 010 .883zM8.06 10.262a.441.441 0 01-.441-.442v-.294a.442.442 0 11.883 0v.294a.442.442 0 01-.442.442zm0 3a.44.44 0 01-.441-.44v-.236a.441.441 0 11.883 0v.236a.442.442 0 01-.442.44zm-1.383-1.618h-.235a.441.441 0 010-.883h.235a.442.442 0 010 .883zm3.002 0h-.236a.441.441 0 010-.883h.236a.442.442 0 010 .883zM23.26 7.559a1.28 1.28 0 110-2.559 1.28 1.28 0 010 2.559zm0-1.678a.396.396 0 10.37.245.396.396 0 00-.37-.25v.005z"/>
      </g>
    </svg>
  ),
  "FREESPİN AL": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.052 4.156H1.385a.792.792 0 00-.791.792v12.667a.79.79 0 00.791.791h12.667a.792.792 0 00.792-.791V4.948a.792.792 0 00-.792-.792zM.594 6.531h14.25M.594 12.469h14.25m-9.5-5.938v5.938m4.75-5.938v5.938"></path><path d="M13.063 4.156V3.86c0-1.8-2.393-3.265-5.344-3.265-2.952 0-5.344 1.464-5.344 3.265v.297m.594 11.874h2.375M17.219 9.5v4.156a2.375 2.375 0 01-2.375 2.375M2.969 9.203a.297.297 0 01.297.297m-.594 0a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m4.75-.594a.297.297 0 01.297.297m-.594 0a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m4.75-.594a.297.297 0 01.297.297m-.594 0a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m4.75-.297a1.187 1.187 0 100-2.375 1.187 1.187 0 000 2.375z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "POPÜLER": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.92 3.404l.988 1.946h1.684a.46.46 0 01.332.792l-1.546 1.517.856 1.968a.466.466 0 01-.664.583L9.5 9.046l-2.07 1.167a.467.467 0 01-.665-.584l.857-1.97-1.546-1.521a.46.46 0 01.332-.792H8.09l.99-1.942a.47.47 0 01.838 0v0zm5.518.159c2.664 0 2.181-.358 2.968 5.937M3.563 3.562c-3 0-2.104-.981-2.97 5.938m13.353 8.906H5.054"></path><path d="M3.563 8.313V1.78A1.188 1.188 0 014.75.594h9.5a1.188 1.188 0 011.188 1.187v6.532c0 7.13-11.876 7.14-11.876 0zM9.5 18.406v-4.75"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "Yılbaşı Özel": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.241 4.912c.023-.237.037-.494.037-.762V2.962a1.277 1.277 0 011.187-1.187 1.277 1.277 0 011.188 1.187v1.782c0 1.187 2.375 1.187 2.375 0v-2.97A1.277 1.277 0 0117.215.588a1.277 1.277 0 011.188 1.188v4.75c0 1.187-1.188 1.781-3.563 1.781h-2.095M7.8 4.962a4.074 4.074 0 01-.078-.812V2.962a1.277 1.277 0 00-1.188-1.187 1.277 1.277 0 00-1.187 1.187v1.782c0 1.187-2.375 1.187-2.375 0v-2.97A1.277 1.277 0 001.784.588 1.277 1.277 0 00.597 1.775v4.75c0 1.187 1.187 1.781 3.562 1.781h2.095"></path><path d="M8.313 7.119a2.375 2.375 0 00-2.376 2.375v5.937c0 1.312 1.596 2.969 3.563 2.969s3.563-1.657 3.563-2.969V9.494a2.375 2.375 0 00-2.376-2.375H8.313zm.593 8.906h1.188m-2.078-5.344a.297.297 0 01.296.297m-.593 0a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m2.968-.594a.297.297 0 01.297.297m-.593 0a.297.297 0 01.296-.297m0 .594a.297.297 0 01-.296-.297m.593 0a.297.297 0 01-.297.297"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "Endorphina 1 Milyon TL": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.656 13.656c2.624 0 4.75-1.063 4.75-2.375 0-1.311-2.126-2.375-4.75-2.375-2.623 0-4.75 1.064-4.75 2.375 0 1.312 2.127 2.375 4.75 2.375z"></path><path d="M8.906 11.281v4.75c0 1.312 2.127 2.375 4.75 2.375 2.624 0 4.75-1.063 4.75-2.375v-4.75"></path><path d="M18.406 13.656c0 1.312-2.126 2.375-4.75 2.375-2.623 0-4.75-1.063-4.75-2.375M2.969 2.969h1.518a.594.594 0 01.554.802L3.562 7.719m4.751-4.75H9.83a.594.594 0 01.554.802L8.906 7.719m4.75-4.75h1.519a.594.594 0 01.554.802l-1.034 2.76"></path><path d="M5.938 10.094H1.78A1.188 1.188 0 01.594 8.906V1.781A1.188 1.188 0 011.78.594h15.44a1.187 1.187 0 011.187 1.187V7.72"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "MEGAWAYS SLOTLAR": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M15.23 2.553a1.188 1.188 0 00-.95-.475h-9.5a1.188 1.188 0 00-.95.475L1.186 6.077a1.188 1.188 0 00.038 1.472l7.393 8.946a1.187 1.187 0 001.82 0l7.393-8.946a1.188 1.188 0 00.038-1.472l-2.64-3.524zM4.234 2.21L9.53 16.922M14.823 2.21L9.53 16.922M.948 6.828h17.158" stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.967 6.828l3.562-4.75 3.563 4.75" stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
  ),
  "MEYVE TEMALI SLOTLAR": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><g stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 11.281v5.884a1.275 1.275 0 002.375.594"></path><path d="M16.565 9.203a2.367 2.367 0 00-1.128-4.453c-1.126 0-1.82.68-2.672 1.188.357-.778 1.188-1.98 1.188-2.97A2.375 2.375 0 0011.578.595 2.313 2.313 0 009.5 1.78 2.313 2.313 0 007.422.594a2.375 2.375 0 00-2.375 2.375c0 .985.83 2.191 1.187 2.969-.85-.509-1.545-1.188-2.672-1.188a2.367 2.367 0 00-1.127 4.453 2.367 2.367 0 001.127 4.453c4.157 0 5.938-2.375 5.938-2.375s1.781 2.375 5.937 2.375a2.368 2.368 0 001.128-4.453v0z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  ),
  "BİG BASS SERİSİ": (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" height="17px"><path d="M.594 3.8a4.363 4.363 0 003.562-1.188 3.6 3.6 0 005.344 0 3.6 3.6 0 005.344 0A4.363 4.363 0 0018.406 3.8M1.843 15.738c3.816-3.816 5.044-5.684 8.49-5.684a6.952 6.952 0 015.7 2.99 6.95 6.95 0 01-5.7 2.989c-3.346 0-4.492-1.688-8.528-5.723m10.07 2.1a.297.297 0 01-.297.297m0-.594a.297.297 0 01.297.296m-.594.001a.297.297 0 01.297-.297m0 .594a.297.297 0 01-.297-.297m5.641-2.078a.296.296 0 01-.297-.297m.594 0a.297.297 0 01-.297.297m0-.594a.297.297 0 01.297.296m-.594.001a.297.297 0 01.297-.297M15.734 6.77a.297.297 0 01-.296-.297m.593 0a.297.297 0 01-.297.297m0-.595a.297.297 0 01.297.297m-.593.001a.297.297 0 01.296-.297" stroke="#9DA8B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"></path></clipPath></defs></svg>
  )
};

// Categories data (top tabs)
const categories = [
  { name: "Tümü", icon: CategoryIcons["Tümü"] },
  { name: "Favorite", icon: CategoryIcons["Favorite"] },
  { name: "YENİ OYUNLAR", icon: CategoryIcons["YENİ OYUNLAR"] },
  { name: "ONWIN'E ÖZEL OYUNLAR", icon: CategoryIcons["ONWIN'E ÖZEL OYUNLAR"] },
  { name: "EGT Digital Bell Link", icon: CategoryIcons["EGT Digital Bell Link"] },
  { name: "FREESPİN AL", icon: CategoryIcons["FREESPİN AL"] },
  { name: "POPÜLER", icon: CategoryIcons["POPÜLER"] },
  { name: "Yılbaşı Özel", icon: CategoryIcons["Yılbaşı Özel"] },
  { name: "Endorphina 1 Milyon TL", icon: CategoryIcons["Endorphina 1 Milyon TL"] },
  { name: "MEGAWAYS SLOTLAR", icon: CategoryIcons["MEGAWAYS SLOTLAR"] },
  { name: "MEYVE TEMALI SLOTLAR", icon: CategoryIcons["MEYVE TEMALI SLOTLAR"] },
  { name: "BİG BASS SERİSİ", icon: CategoryIcons["BİG BASS SERİSİ"] },
];

// Provider box data
const providers = [
    { name: "Tüm Sağlayıcılar", icon: "/providers/all.png" },
    { name: "Pragmaticplay", count: 347, icon: "/providers/pragmaticplay.png" },
    { name: "Ninijagaming", count: 26, icon: "/providers/ninijagaming.png" },
    { name: "Bolt-Gaming", count: 26, icon: "/providers/bolt-gaming.png" },
    { name: "Playtech", count: 277, icon: "/providers/playtech.png" },
    { name: "Rubyplay", count: 131, icon: "/providers/rubyplay.png" },
    { name: "Bgaming", count: 141, icon: "/providers/bgaming.png" },
    { name: "Exgaming", count: 10, icon: "/providers/exgaming.png" },
    { name: "Yggdrasil", count: 355, icon: "/providers/yggdrasil.png" },
    { name: "Betsoft", count: 173, icon: "/providers/betsoft.png" },
    { name: "Hacksaw", count: 142, icon: "/providers/hacksaw.png" },
    { name: "Octoplay", count: 3, icon: "/providers/octoplay.png" },
    { name: "Fugaso", count: 67, icon: "/providers/fugaso.png" },
    { name: "Platipus", count: 111, icon: "/providers/platipus.png" },
    { name: "Redtiger", count: 300, icon: "/providers/redtiger.png" },
    { name: "Booming", count: 135, icon: "/providers/booming.png" },
    { name: "Redrake", count: 106, icon: "/providers/redrake.png" },
    { name: "Netent", count: 172, icon: "/providers/netent.png" },
    { name: "Bfgames", count: 100, icon: "/providers/bfgames.png" },
    { name: "Swintt", count: 131, icon: "/providers/swintt.png" },
    { name: "Playson", count: 77, icon: "/providers/playson.png" },
    { name: "Nolimitcity", count: 105, icon: "/providers/nolimitcity.png" },
    { name: "Endorphina", count: 145, icon: "/providers/endorphina.png" },
    { name: "Retro", count: 8, icon: "/providers/retro.png" },
    { name: "PG Pgsoft", count: 51, icon: "/providers/pg-pgsoft.png" },
    { name: "Spadegaming", count: 79, icon: "/providers/spadegaming.png" },
    { name: "Quickspin", count: 112, icon: "/providers/quickspin.png" },
    { name: "Leap", count: 28, icon: "/providers/leap.png" },
    { name: "Onetouch", count: 43, icon: "/providers/onetouch.png" },
    { name: "Booongo", count: 33, icon: "/providers/booongo.png" },
    { name: "Habanero", count: 170, icon: "/providers/habanero.png" },
    { name: "Tomhorn", count: 38, icon: "/providers/tomhorn.png" },
    { name: "Relaxgaming", count: 150, icon: "/providers/relaxgaming.png" },
    { name: "Nucleus", count: 55, icon: "/providers/nucleus.png" },
    { name: "Spinomenal", count: 429, icon: "/providers/spinomenal.png" },
    { name: "Sthlm", count: 2, icon: "/providers/sthlm.png" },
    { name: "Smartsoft", count: 3, icon: "/providers/smartsoft.png" },
    { name: "Kalamba", count: 131, icon: "/providers/kalamba.png" },
    { name: "Apollo", count: 42, icon: "/providers/apollo.png" },
    { name: "High5", count: 1, icon: "/providers/high5.png" },
    { name: "Ggames", count: 62, icon: "/providers/ggames.png" },
    { name: "Evoplay", count: 195, icon: "/providers/evoplay.png" },
    { name: "Eurasian", count: 96, icon: "/providers/eurasian.png" },
    { name: "Bigtime", count: 64, icon: "/providers/bigtime.png" },
    { name: "Theear", count: 16, icon: "/providers/theear.png" },
    { name: "Revolver", count: 4, icon: "/providers/revolver.png" },
    { name: "Amatic", count: 106, icon: "/providers/amatic.png" },
    { name: "Vgs", count: 11, icon: "/providers/vgs.png" },
    { name: "Gameart", count: 61, icon: "/providers/gameart.png" },
    { name: "Oryx", count: 9, icon: "/providers/oryx.png" },
    { name: "2by2", count: 15, icon: "/providers/2by2.png" },
    { name: "Reevo", count: 3, icon: "/providers/reevo.png" },
    { name: "Zeus", count: 3, icon: "/providers/zeus.png" },
    { name: "Yolted", count: 15, icon: "/providers/yolted.png" },
    { name: "Rogue", count: 1, icon: "/providers/rogue.png" },
    { name: "Egt digital", count: 148, icon: "/providers/egtdigital.png" },
    { name: "Amusnet", count: 191, icon: "/providers/amusnet.png" },
    { name: "Wazdan", count: 237, icon: "/providers/wazdan.png" },
    { name: "Ezugi", count: 56, icon: "/providers/ezugi.png" }
  ];
  

export default function Header() {
  const [active, setActive] = useState("Tümü");
  const [showProviderBox, setShowProviderBox] = useState(false);
  const [activeProvider, setActiveProvider] = useState("Tüm Sağlayıcılar");
  const [searchText, setSearchText] = useState("");

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
    className={`flex items-center gap-2 px-3 py-3 cursor-pointer whitespace-nowrap border-r ${
      active === cat.name 
        ? "text-pink-600 border-t-2 border-t-pink-600 font-semibold bg-white" 
        : "text-[#524471] font-semibold"
    }`}
  >
    <span className="w-4 h-4">{cat.icon}</span>
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
    Sağlayıcı
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
            <img src={provider.icon} alt={provider.name} className="w-5 h-5 object-contain" />
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
