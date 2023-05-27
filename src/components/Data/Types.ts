import users from "../../assets/svg/users 1.svg";
import userFriends from "../../assets/svg/user-friends 1.svg";
import stack from "../../assets/svg/sack 1.svg";
import hands from "../../assets/svg/handshake-regular 1.svg";
import piggy from "../../assets/svg/piggy-bank 1.svg";
import Group from "../../assets/svg/Group 104.svg";
import usercheck from "../../assets/svg/user-check 1.svg";
import usertime from "../../assets/svg/user-times 1.svg";

import slide from "../../assets/svg/sliders-h 1.svg";
import badge from "../../assets/svg/badge-percent 1.svg";
import clip from "../../assets/svg/clipboard-list 1.svg";
import tire from "../../assets/svg/tire 1.svg";

import BriefCase from "../../assets/svg/briefcase 1.svg";
import Bank from "../../assets/svg/np_bank.svg";
import coins from "../../assets/svg/coins-solid 1.svg";
import Trans from "../../assets/svg/trans1.svg";
import galaxy from "../../assets/svg/galaxy 1.svg";
import userCog from "../../assets/svg/user-cog 1.svg";
import scroll from "../../assets/svg/scroll 1.svg";
import chart from "../../assets/svg/chart-bar 2.svg";

import iconUser from "../../assets/svg/icon-user.svg"
import iconLoan from "../../assets/svg/icon-loan.svg"
import iconSaving from "../../assets/svg/icon-saving.svg"
import iconUsers from "../../assets/svg/icon-user2.svg"

import Eyes from "../../assets/svg/eyes.svg"
import AddUser from "../../assets/svg/np_adduser.svg"
import Delete from "../../assets/svg/np_delete-friend.svg"



export interface Data {
    id: number;
    name: string;
    image?: any;
}

export interface Data2 {
    id: number;
    number: string;
    name: string;
    image?: any;
}

interface Option2 {
    number: string;
    id: number
}
interface Modal {
    id: number;
    image?: any;
    name: string;
}

export const TABLE_HEAD: any = [
    {
        id: 0,
        name: "organization",
    },
    {
        id: 1,
        name: "Username",
    },
    {
        id: 2,
        name: "Email",
    },
    {
        id: 3,
        name: "Phone number",
    },
    {
        id: 4,
        name: "Date joined",
    },
    {
        id: 5,
        name: "Status",
    },
    {
        id: 6,
        name: "",
    },
]

export const BUSINESS_DATA: Data[] = [
    {
        id: 0,
        name: 'Organization',
        image: userFriends
    },
    {
        id: 1,
        name: 'Loan Products',
        image: Group
    },
    {
        id: 2,
        name: 'Savings Products',
        image: Bank
    },
    {
        id: 3,
        name: 'Fees and Charges',
        image: coins
    },
    {
        id: 4,
        name: 'Transactions',
        image: Trans
    },
    {
        id: 5,
        name: 'Services',
        image: galaxy
    },
    {
        id: 6,
        name: 'Service Account',
        image: userCog
    },
    {
        id: 7,
        name: 'Settlements',
        image: scroll
    },
    {
        id: 8,
        name: 'Reports',
        image: chart
    },
];

export const CUSTOMER_DATA: Data[] = [
    {
        id: 0,
        name: 'Users',
        image: BriefCase
    },
    {
        id: 1,
        name: 'Guarantors',
        image: users
    },
    {
        id: 2,
        name: 'Loans',
        image:  stack
    },
    {
        id: 3,
        name: 'Decision Models',
        image: hands
    },
    {
        id: 4,
        name: 'Savings',
        image: piggy 
    },
    {
        id: 5,
        name: 'Loan Requests',
        image: Group
    },
    {
        id: 6,
        name: 'Whitelist',
        image: usercheck 
    },
    {
        id: 7,
        name: 'Karma',
        image: usertime 
    },
];


export const SETTINGS_DATA: Data[] = [
    {
        id: 0,
        name: 'Preferences',
        image: slide
    },
    {
        id: 1,
        name: 'Fees and Pricing',
        image: badge
    },
    {
        id: 2,
        name: 'Audit Logs',
        image: clip
    },
    {
        id: 3,
        name: 'Systems Messages',
        image: tire
    },
];


export const WIDGET_DATA: Data2[] = [
    {
        id: 0,
        number: '2,453',
        name: 'Users',
        image: iconUser
    },
    {
        id: 1,
        number: '2,453',
        name: 'Active Users',
        image: iconUsers
    },
    {
        id: 2,
        number: '12,453',
        name: 'Users with Loans',
        image: iconLoan
    },
    {
        id: 3,
        number: '102,453',
        name: 'Users with Savings',
        image: iconSaving
    },
]


export const numbers: Option2[] = [ 
    {
    id: 0,
    number: "100"
    },
    {
    id: 1,
    number: "90"
    },
    {
    id: 2,
    number: "80"
    },
    {
    id: 3,
    number: "70"
    },
    {
    id: 4,
    number: "60"
    },
    {
    id: 5,
    number: "50"
    },
    {
    id: 6,
    number: "40"
    },
    {
    id: 7,
    number: "30"
    },
    {
    id: 8,
    number: "20"
    },
    {
    id: 9,
    number: "10"
    },
  ];


export const ListState: Array<string> = [
    "Inactive",
    "Pending",
    "Blacklisted",
    "Pending",
    "Active",
    "Active",
    "Blacklisted",
    "Inactive",
    "Inactive",
  ];

  export const _Status: Option2[] = [ 
    {
    id: 0,
    number: "Inactive"
    },
    {
    id: 1,
    number: "Pending"
    },
    {
    id: 2,
    number:  "Blacklisted"
    },
    {
    id: 3,
    number: "Active"
    },
]
  export const _Org: Option2[] = [ 
    {
    id: 0,
    number: "labore-dolor-et"
    },
    {
    id: 1,
    number: "accusamus-minima-repudiandae"
    },
    {
    id: 2,
    number:  "natus-harum-unde"
    },
    {
    id: 3,
    number: "aliquam-velit-ab"
    },
    {
    id: 4,
    number: "quas-et-ut"
    },
    {
    id: 5,
    number: "accusantium-voluptatem-voluptate"
    },
    {
    id: 6,
    number: "sint-ipsa-voluptatem"
    },
    {
    id: 7,
    number: "omnis-consequatur-sunt"
    },
    {
    id: 8,
    number: "officia-sed-accusamus"
    },
    {
    id: 9,
    number: "tempore-laudantium-aut"
    },
]

export const popMondal: Modal[] = [
    {
        id: 0,
        image: Eyes,
        name: "View Details"
    },
    {
        id: 1,
        image: AddUser,
        name: "Blacklist User"
    },
    {
        id: 2,
        image: Delete,
        name: "Activate User"
    },

]