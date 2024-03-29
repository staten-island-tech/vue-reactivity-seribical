import { reactive } from 'vue'

export const shopitems = reactive([
    {
        name:`Hire a "Friend"`,
        cost:10,
        power:1,
        multiplier:1.2,
        amount:0
    },
    {
        name:"Install Spyware",
        cost:50,
        power:5,
        multiplier:1.2,
        amount:0
    },
    {
        name:"Crappy Graphics Card",
        cost:250,
        power:30,
        multiplier:1.18,
        amount:0
    },
    {
        name:"Mediocre Graphics Card",
        cost:1250,
        power:175,
        multiplier:1.18,
        amount:0
    },
    {
        name:"High End Graphics Card",
        cost:5000,
        power:750,
        multiplier:1.16,
        amount:0
    },
    {
        name:"Bitcoin Mining PC",
        cost:20000,
        power:3200,
        multiplier:1.16,
        amount:0
    },
    {
        name:"Rent a Basement",
        cost:100000,
        power:17500,
        multiplier:1.14,
        amount:0
    },
    {
        name:"Bitcoin Mining Facility",
        cost:500000,
        power:90000,
        multiplier:1.14,
        amount:0
    },
    {
        name:"Global PC Virus Scandal",
        cost:2500000,
        power:500000,
        multiplier:1.12,
        amount:0
    },
    {
        name:"Chinese Spyware App",
        cost:10000000,
        power:2100000,
        multiplier:1.12,
        amount:0
    },
    {
        name:"Certain Ethnic Group",
        cost:50000000,
        power:12000000,
        multiplier:1.1,
        amount:0
    },
    {
        name:"Ethan De Jesus",
        cost:250000000,
        power:62000000,
        multiplier:1.1,
        amount:0
    },
])

export const upgrades = reactive([
    {
        name:"Click Harder",
        multiplier:2,
        desc:"Harder clicking means more bitcoins (duh)",
        cost:100,
        available:"yes"
    },
    {
        name:"Better Mouse",
        multiplier:2,
        desc:"Better mouse means more bitcoin",
        cost:1000,
        available:"yes"
    },
    {
        name:"Better Mouse",
        multiplier:2,
        desc:"Better mouse means more bitcoin",
        cost:1000,
        available:"yes"
    },
])