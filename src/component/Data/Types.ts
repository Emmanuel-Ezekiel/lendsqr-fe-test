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

import iconUser from "../../assets/icon-user.svg"
import iconLoan from "../../assets/icon-loan.svg"
import iconSaving from "../../assets/icon-saving.svg"
import iconUsers from "../../assets/icon-user2.svg"



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