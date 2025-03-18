import { RiDashboardHorizontalFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiSummits } from "react-icons/gi";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { MdEventNote } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BsDatabaseLock } from "react-icons/bs";

export const links = [
  {
    title: "Main Menu",
    links: [
      {
        name: "dashboard",
        icon: RiDashboardHorizontalFill,
        active: true,
      },
      {
        name: "students",
        icon: PiStudentBold,
      },
      {
        name: "teachers",
        icon: FaChalkboardTeacher,
      },
      {
        name: "department",
        icon: FaBuilding,
      },
      {
        name: "subjects",
        icon: FaBookReader,
      },
      {
        name: "invoices",
        icon: LiaFileInvoiceSolid,
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        name: "accounts",
        icon: FaFileInvoiceDollar,
      },
      {
        name: "holiday",
        icon: GiSummits,
      },
      {
        name: "fees",
        icon: BiSolidMessageRoundedDots,
      },
      {
        name: "exam list",
        icon: CiViewList,
      },
      {
        name: "events",
        icon: MdEventNote,
      },
      {
        name: "time table",
        icon: FaTable,
      },
      {
        name: "library",
        icon: IoLibraryOutline,
      },
      {
        name: "blogs",
        icon: FaNewspaper,
      },
      {
        name: "settings",
        icon: FaGear,
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        name: "authentication",
        icon: BsDatabaseLock,
      },
    ],
  },
];

export const cards = [
  {
    name: "Students",
    number: "50055",
    img: "/public/card-1.svg",
  },
  {
    name: "Awards",
    number: "50+",
    img: "/public/card-2.svg",
  },
  {
    name: "Students",
    number: "30+",
    img: "/public/card-3.svg",
  },
  {
    name: "Students",
    number: "$505",
    img: "/public/card-4.svg",
  },
];

export const tableData = [
    {
      id: "PRE2209",
      img: "/public/row-1.png",
      name: "John Smith",
      marks: 1158,
      percent: "98%",
      year: 2019,
    },
    {
      id: "PRE1245",
      img: "/public/row-2.png",
      name: "Jolie Hoskins",
      marks: 1195,
      percent: "99.5%",
      year: 2018,
    },
    {
      id: "PRE1625",
      img: "/public/row-3.png",
      name: "Pennington Joy",
      marks: 1196,
      percent: "99.6%",
      year: 2017,
    },
    {
      id: "PRE2516",
      img: "/public/row-4.png",
      name: "Millie Marsden",
      marks: 1187,
      percent: "98.2%",
      year: 2016,
    },
    {
      id: "PRE2209",
      img: "/public/row-5.png",
      name: "Hary Lendo",
      marks: 1185,
      percent: "98%",
      year: 2015,
    },

];

export const activity = [
  {
    img: "/public/active-1.svg" ,
    title: `1st place in "Chess”` ,
    subtitle: `John Doe won 1st place in "Chess"` ,
    time: `1 Day ago` ,
  } ,
  {
    img: "/public/active-2.svg" ,
    title: `Participated in "Carrom"` ,
    subtitle: `Justin Lee participated in "Carrom"` ,
    time: `2 hours ago` ,
  } ,
  {
    img: "/public/active-3.svg" ,
    title: `Internation conference in "St.John School"` ,
    subtitle: `Justin Leeattended internation conference in "St.John School"` ,
    time: `2 Weeks ago` ,
  } ,
  {
    img: "/public/active-4.svg" ,
    title: `Won 1st place in "Chess"` ,
    subtitle: `John Doe won 1st place in "Chess"` ,
    time: `3 Day ago` ,
  } ,
]